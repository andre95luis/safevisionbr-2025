import { NextRequest, NextResponse } from "next/server";

// Presidente da República 2026. Códigos oficiais confirmados clicando no
// seletor de turno dentro de resultados.tse.jus.br/oficial/app (1º: 6257,
// 2º: 6258 — sequenciais, mesma eleição).
const ELECTIONS: Record<"1" | "2", { codigo: string; fonte: string }> = {
  "1": {
    codigo: "6257",
    fonte:
      "https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/6257/uf/br/cargo/1/vis/nominal/resultados",
  },
  "2": {
    codigo: "6258",
    fonte:
      "https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/6258/uf/br/cargo/1/vis/nominal/resultados",
  },
};

function tseUrl(codigo: string) {
  const padded = codigo.padStart(6, "0");
  return `https://resultados.tse.jus.br/oficial/ele2026/${codigo}/dados/br/br-c0001-e${padded}-u.jws`;
}

export const dynamic = "force-dynamic";

interface TseCandidato {
  n: string;
  nm: string;
  nmu: string;
  vap: string;
  pvap: string;
}

interface TsePartido {
  cand?: TseCandidato[];
}

interface TseAgremiacao {
  par?: TsePartido[];
}

interface TseCargo {
  cd: string;
  nmn: string;
  agr?: TseAgremiacao[];
}

interface TsePayload {
  dg: string;
  hg: string;
  carg: TseCargo[];
  // Seções e eleitorado vêm no nível raiz do payload (não dentro de cada cargo).
  s?: { ts: string; st: string; pst: string };
  e?: { te: string; pest: string };
}

export interface Candidato {
  numero: string;
  nome: string;
  nomeUrna: string;
  votos: number;
  percentual: string;
}

export interface ApuracaoResponse {
  ok: boolean;
  atualizadoEm: string | null;
  secoesApuradasPct: string | null;
  comparecimentoPct: string | null;
  candidatos: Candidato[];
  fonte: string;
}

// JWS compacto (header.payload.signature, EdDSA). Não precisamos validar a
// assinatura para exibição pública — só decodificar o payload (base64url).
function decodeJwsPayload(jws: string): TsePayload {
  const [, payload] = jws.split(".");
  if (!payload) throw new Error("JWS sem payload");
  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  const json = Buffer.from(padded, "base64").toString("utf-8");
  return JSON.parse(json) as TsePayload;
}

const cache = new Map<string, { at: number; data: ApuracaoResponse }>();
const CACHE_MS = 30_000;

export async function GET(req: NextRequest) {
  const turnoParam = req.nextUrl.searchParams.get("turno");
  const turno: "1" | "2" = turnoParam === "1" ? "1" : "2";
  const { codigo, fonte } = ELECTIONS[turno];

  const cached = cache.get(turno);
  if (cached && Date.now() - cached.at < CACHE_MS) {
    return NextResponse.json(cached.data);
  }

  try {
    const res = await fetch(`${tseUrl(codigo)}?nocache=${Date.now()}`, {
      headers: { "User-Agent": "Mozilla/5.0 (SafeVisionBR)" },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) throw new Error(`TSE respondeu ${res.status}`);

    const jws = await res.text();
    const payload = decodeJwsPayload(jws);
    const presidente = payload.carg?.find((c) => c.cd === "1");

    const candidatos: Candidato[] =
      presidente?.agr?.flatMap((agr) =>
        (agr.par ?? []).flatMap((par) =>
          (par.cand ?? []).map((c) => ({
            numero: c.n,
            nome: c.nm,
            nomeUrna: c.nmu,
            votos: Number(c.vap) || 0,
            percentual: c.pvap,
          })),
        ),
      ) ?? [];

    candidatos.sort((a, b) => b.votos - a.votos);

    const data: ApuracaoResponse = {
      ok: true,
      atualizadoEm: payload.dg && payload.hg ? `${payload.dg} ${payload.hg}` : null,
      secoesApuradasPct: payload.s?.pst ?? null,
      comparecimentoPct: payload.e?.pest ?? null,
      candidatos,
      fonte,
    };

    cache.set(turno, { at: Date.now(), data });
    return NextResponse.json(data);
  } catch (err) {
    const fallback: ApuracaoResponse = {
      ok: false,
      atualizadoEm: null,
      secoesApuradasPct: null,
      comparecimentoPct: null,
      candidatos: [],
      fonte,
    };
    console.error("apuracao proxy error:", err);
    return NextResponse.json(fallback, { status: 200 });
  }
}
