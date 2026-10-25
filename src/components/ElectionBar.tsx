"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ExternalLink, X } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { useApuracao } from "@/hooks/useApuracao";

const TSE_LINK =
  "https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/6258/uf/br/cargo/1/vis/nominal/resultados";

const copy = {
  pt: {
    votingLabel: "2º turno das eleições — votação até 17h",
    liveLabel: "Apuração ao vivo",
    sections: (pct: string) => `${pct}% das seções apuradas`,
    notStarted: "Urnas ainda abertas. A apuração começa após o fechamento, às 17h.",
    cta: "Ver apuração completa",
    close: "Fechar barra",
    sourceLabel: "Fonte oficial: TSE",
    sourceCta: "Abrir no site do TSE",
    offline: "Não foi possível carregar os dados do TSE agora. Acompanhe direto na fonte oficial:",
  },
  en: {
    votingLabel: "Brazil's presidential runoff — polls open until 5pm",
    liveLabel: "Live results",
    sections: (pct: string) => `${pct}% of polling stations counted`,
    notStarted: "Polls still open. Counting starts once they close, at 5pm.",
    cta: "See full results",
    close: "Close bar",
    sourceLabel: "Official source: TSE (Brazil's electoral court)",
    sourceCta: "Open on the TSE website",
    offline: "Couldn't load TSE data right now. Follow it directly on the official source:",
  },
} as const;

export default function ElectionBar() {
  const { locale } = useLanguage();
  const t = copy[locale] ?? copy.pt;
  const rowRef = useRef<HTMLDivElement>(null);
  const { data, closed, ready } = useApuracao();
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("election-bar-dismissed") === "1") setDismissed(true);
    } catch {
      // ignore
    }
  }, []);

  // Publica a altura real da barra para o Header (fixed) abrir espaço embaixo dela.
  useEffect(() => {
    const root = document.documentElement;
    if (dismissed || !ready) {
      root.style.setProperty("--election-bar-h", "0px");
      return;
    }
    const h = rowRef.current?.offsetHeight ?? 0;
    root.style.setProperty("--election-bar-h", `${h}px`);
    return () => root.style.setProperty("--election-bar-h", "0px");
  }, [dismissed, ready]);

  const handleDismiss = () => {
    setDismissed(true);
    setOpen(false);
    try {
      sessionStorage.setItem("election-bar-dismissed", "1");
    } catch {
      // ignore
    }
  };

  if (!ready || dismissed) return null;

  const pct = data?.secoesApuradasPct;
  const hasVotes = closed && pct && Number(pct.replace(",", ".")) > 0;

  return (
    <div className="fixed top-0 inset-x-0 z-[70]" aria-live="polite">
      <div ref={rowRef} className="bg-slate-900 border-b border-slate-800 text-sm">
        <div className="container mx-auto px-6 py-2 flex items-center gap-3">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="flex-1 flex items-center gap-2 text-left text-slate-200 hover:text-white transition-colors min-w-0"
          >
            <span className="truncate">
              {hasVotes
                ? `${t.liveLabel} · ${t.sections(pct!)}`
                : closed
                  ? t.liveLabel
                  : t.votingLabel}
            </span>
            <ChevronDown
              className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          <Link
            href="/apuracao"
            className="hidden sm:flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium shrink-0"
          >
            {t.cta}
          </Link>

          <button
            onClick={handleDismiss}
            aria-label={t.close}
            className="text-slate-500 hover:text-slate-300 shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-950 border-b border-slate-800 shadow-2xl shadow-black/40"
          >
            <div className="container mx-auto px-6 py-5">
              {!closed && <p className="text-slate-400 text-sm">{t.notStarted}</p>}

              {closed && data && !data.ok && (
                <p className="text-slate-400 text-sm">{t.offline}</p>
              )}

              {closed && data?.ok && data.candidatos.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
                  {data.candidatos.map((c) => (
                    <div
                      key={c.numero}
                      className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
                    >
                      <p className="text-white font-semibold">{c.nomeUrna}</p>
                      <p className="text-slate-500 text-xs mb-2">{c.numero}</p>
                      <p className="text-2xl font-bold text-cyan-400 tabular-nums">
                        {c.percentual}%
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 gap-4">
                <span>{t.sourceLabel}</span>
                <div className="flex items-center gap-4 shrink-0">
                  <Link href="/apuracao" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    {t.cta} →
                  </Link>
                  <a
                    href={TSE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-500 hover:text-slate-300"
                  >
                    {t.sourceCta}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
