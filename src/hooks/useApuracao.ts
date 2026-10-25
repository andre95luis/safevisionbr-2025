"use client";

import { useEffect, useState } from "react";
import type { ApuracaoResponse } from "@/app/api/apuracao/route";

const POLL_MS = 30_000;
// Fechamento das urnas: 17h de Brasília (UTC-3) = 20h UTC
const POLLS_CLOSE_UTC_HOUR = 20;

export function pollsClosed() {
  return new Date().getUTCHours() >= POLLS_CLOSE_UTC_HOUR;
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
