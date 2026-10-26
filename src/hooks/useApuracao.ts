"use client";

import { useEffect, useState } from "react";
import type { ApuracaoResponse } from "@/app/api/apuracao/route";

const POLL_MS = 30_000;
// Fechamento das urnas: 17h de Brasília. Brasília é sempre UTC-3 (sem
// horário de verão desde 2019) — não dá pra comparar só a hora UTC
// isolada (getUTCHours()), porque ela "zera" à meia-noite UTC, que cai
// no meio da noite de Brasília (21h). Em vez disso, desloca o instante
// inteiro em -3h e só então olha a hora resultante.
const BRASILIA_OFFSET_MS = 3 * 60 * 60 * 1000;
const POLLS_CLOSE_HOUR = 17;

export function pollsClosed() {
  const brasiliaNow = new Date(Date.now() - BRASILIA_OFFSET_MS);
  return brasiliaNow.getUTCHours() >= POLLS_CLOSE_HOUR;
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
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/apuracao?turno=${turno}`);
        const json: ApuracaoResponse = await res.json();
        if (!cancelled) setData(json);
      } catch {
        // mantém o último dado bom; não derruba a UI
      }
    };
    fetchData();
    if (turno === "2") {
      const id = setInterval(fetchData, POLL_MS);
      return () => {
        cancelled = true;
        clearInterval(id);
      };
    }
    return () => {
      cancelled = true;
    };
  }, [shouldFetch, turno]);

  return { data, closed, ready };
}
