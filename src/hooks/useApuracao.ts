"use client";

import { useEffect, useState } from "react";
import type { ApuracaoResponse } from "@/app/api/apuracao/route";

const POLL_MS = 30_000;
// Fechamento das urnas: 17h de Brasília em 25/10/2026 = 20h UTC no mesmo
// dia. Instante absoluto, não "hora do dia" — uma comparação por hora
// isolada (getHours/getUTCHours) volta a ficar verdadeira toda
// madrugada seguinte, pra sempre, porque não sabe em que DIA está. Com
// timestamp fixo, uma vez fechado fica fechado definitivamente.
const POLLS_CLOSE_AT = Date.parse("2026-10-25T20:00:00Z");

export function pollsClosed() {
  return Date.now() >= POLLS_CLOSE_AT;
}

export type Turno = "1" | "2";

export function useApuracao(turno: Turno = "2") {
  const [data, setData] = useState<ApuracaoResponse | null>(null);
  const [closed, setClosed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setClosed(pollsClosed());
    setReady(true);
    const clockId = setInterval(() => setClosed(pollsClosed()), 60_000);
    return () => clearInterval(clockId);
  }, []);

  // 1º turno já é resultado final (100% apurado) — basta uma busca, sem polling.
  // 2º turno só começa a fazer sentido buscar depois que as urnas fecham.
  const shouldFetch = turno === "1" || closed;

  useEffect(() => {
    if (!shouldFetch) return;
    let cancelled = false;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const isFinal = (json: ApuracaoResponse) =>
      Number((json.secoesApuradasPct ?? "0").replace(",", ".")) >= 100;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/apuracao?turno=${turno}`);
        const json: ApuracaoResponse = await res.json();
        if (cancelled) return;
        setData(json);
        // Apuração encerrada (100% das seções): vira resultado final, como
        // o 1º turno — para o polling em vez de continuar martelando.
        if (json.ok && isFinal(json) && intervalId) {
          clearInterval(intervalId);
          intervalId = undefined;
        }
      } catch {
        // mantém o último dado bom; não derruba a UI
      }
    };
    fetchData();
    if (turno === "2") {
      intervalId = setInterval(fetchData, POLL_MS);
      return () => {
        cancelled = true;
        if (intervalId) clearInterval(intervalId);
      };
    }
    return () => {
      cancelled = true;
    };
  }, [shouldFetch, turno]);

  return { data, closed, ready };
}
