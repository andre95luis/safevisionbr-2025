"use client";

import { useEffect, useState } from "react";
import type { ApuracaoResponse } from "@/app/api/apuracao/route";

const POLL_MS = 30_000;
// Fechamento das urnas: 17h de Brasília (UTC-3) = 20h UTC
const POLLS_CLOSE_UTC_HOUR = 20;

export function pollsClosed() {
  return new Date().getUTCHours() >= POLLS_CLOSE_UTC_HOUR;
}

export function useApuracao() {
  const [data, setData] = useState<ApuracaoResponse | null>(null);
  const [closed, setClosed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setClosed(pollsClosed());
    setReady(true);
    const clockId = setInterval(() => setClosed(pollsClosed()), 60_000);
    return () => clearInterval(clockId);
  }, []);

  useEffect(() => {
    if (!closed) return;
    let cancelled = false;
    const fetchData = async () => {
      try {
        const res = await fetch("/api/apuracao");
        const json: ApuracaoResponse = await res.json();
        if (!cancelled) setData(json);
      } catch {
        // mantém o último dado bom; não derruba a UI
      }
    };
    fetchData();
    const id = setInterval(fetchData, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [closed]);

  return { data, closed, ready };
}
