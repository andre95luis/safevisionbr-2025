import { NextResponse } from "next/server";

// Presidente, 2º turno 2026. Código oficial confirmado em
// resultados.tse.jus.br/oficial/app/index.html#/eleicao/6258/uf/br/cargo/1/vis/nominal/resultados
const TSE_URL =
  "https://resultados.tse.jus.br/oficial/ele2026/6258/dados/br/br-c0001-e006258-u.jws";

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

let cache: { at: number; data: ApuracaoResponse } | null = null;
const CACHE_MS = 30_000;

export async function GET() {
  if (cache && Date.now() - cache.at < CACHE_MS) {
    return NextResponse.json(cache.data);
  }

  try {
    const res = await fetch(`${TSE_URL}?nocache=${Date.now()}`, {
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
      fonte: "https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/6258/uf/br/cargo/1/vis/nominal/resultados",
    };

    cache = { at: Date.now(), data };
    return NextResponse.json(data);
  } catch (err) {
    const fallback: ApuracaoResponse = {
      ok: false,
      atualizadoEm: null,
      secoesApuradasPct: null,
      comparecimentoPct: null,
      candidatos: [],
      fonte: "https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/6258/uf/br/cargo/1/vis/nominal/resultados",
    };
    console.error("apuracao proxy error:", err);
    return NextResponse.json(fallback, { status: 200 });
  }
}
