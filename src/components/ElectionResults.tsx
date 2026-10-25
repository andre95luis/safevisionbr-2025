"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { useApuracao, type Turno } from "@/hooks/useApuracao";

const FALLBACK_LINK =
  "https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/6258/uf/br/cargo/1/vis/nominal/resultados";

const copy = {
  pt: {
    eyebrow: "Presidente da República · 2026",
    tab1: "1º turno · 05/10",
    tab2: "2º turno · ao vivo",
    title: "Apuração ao vivo",
    title1: "Resultado do 1º turno",
    votingTitle: "As urnas ainda estão abertas",
    votingBody:
      "A votação segue até as 17h (horário de Brasília). Assim que fechar, os números abaixo começam a atualizar automaticamente — sem precisar atualizar a página.",
    sections: "Seções apuradas",
    turnout: "Comparecimento",
    updatedAt: "Última atualização",
    source: "Fonte oficial: TSE",
    sourceCta: "Abrir apuração completa no TSE",
    offline: "Não foi possível carregar os dados agora. Acompanhe direto na fonte oficial do TSE:",
    waitingVotes: "Aguardando os primeiros votos apurados.",
    scrollCue: "Enquanto isso, conheça a Safe Vision",
    othersLabel: "Os 5 mais votados",
  },
  en: {
    eyebrow: "President of Brazil · 2026",
    tab1: "1st round · Oct 5",
    tab2: "2nd round · live",
    title: "Live results",
    title1: "1st round results",
    votingTitle: "Polls are still open",
    votingBody:
      "Voting runs until 5pm (Brasília time). Once it closes, the numbers below start updating automatically — no need to refresh.",
    sections: "Polling stations counted",
    turnout: "Turnout",
    updatedAt: "Last updated",
    source: "Official source: TSE (Brazil's electoral court)",
    sourceCta: "Open full results on the TSE website",
    offline: "Couldn't load the data right now. Follow it directly on the TSE's official source:",
    waitingVotes: "Waiting for the first votes to be counted.",
    scrollCue: "While you wait, meet Safe Vision",
    othersLabel: "The top 5 most voted",
  },
} as const;

function pct(v: string | null | undefined) {
  if (!v) return 0;
  return Math.min(100, Math.max(0, Number(v.replace(",", "."))));
}

export default function ElectionResults() {
  const { locale } = useLanguage();
  const t = copy[locale] ?? copy.pt;
  const [turno, setTurno] = useState<Turno>("2");
  const { data, closed, ready } = useApuracao(turno);

  const secoesPct = pct(data?.secoesApuradasPct);
  const turnoutPct = pct(data?.comparecimentoPct);
  const allCandidatos = data?.candidatos ?? [];
  // 1º turno teve 12 candidatos — mostramos os 5 mais votados, o 2º turno só tem 2.
  const candidatos = turno === "1" ? allCandidatos.slice(0, 5) : allCandidatos;
  const hasVotes = allCandidatos.some((c) => c.votos > 0);
  const sourceLink = data?.fonte ?? FALLBACK_LINK;
  // 1º turno é resultado final e fechado; a janela de "urnas abertas" só existe no 2º.
  const showVotingCard = turno === "2" && ready && !closed;
  const showResults = turno === "1" ? ready && data?.ok : ready && closed && data?.ok;

  return (
    <section className="relative bg-slate-950 pt-28 pb-10 md:pt-36 md:pb-14">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">
              {t.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {turno === "1" ? t.title1 : t.title}
          </h1>

          <div className="mt-6 inline-flex rounded-full border border-slate-800 bg-slate-900/60 p-1">
            {(["1", "2"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setTurno(v)}
                aria-pressed={turno === v}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  turno === v
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {v === "1" ? t.tab1 : t.tab2}
              </button>
            ))}
          </div>
        </motion.div>

        {showVotingCard && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 max-w-xl"
          >
            <p className="text-white font-semibold text-lg mb-1">{t.votingTitle}</p>
            <p className="text-slate-400 text-sm">{t.votingBody}</p>
          </motion.div>
        )}

        {ready && data && !data.ok && (turno === "1" || closed) && (
          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 max-w-xl">
            <p className="text-slate-400 mb-4">{t.offline}</p>
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              {t.sourceCta}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {showResults && data && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-6"
          >
            {/* Candidatos */}
            <div>
              {turno === "1" && (
                <p className="text-slate-500 text-xs mb-3">{t.othersLabel}</p>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
              {candidatos.length === 0 && (
                <p className="text-slate-500 col-span-2">{t.waitingVotes}</p>
              )}
              {candidatos.map((c, i) => (
                <div
                  key={c.numero}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <p className="text-white font-bold text-lg leading-tight">{c.nomeUrna}</p>
                  <p className="text-slate-500 text-xs mb-4">Número {c.numero}</p>
                  <p className="text-4xl font-bold text-cyan-400 tabular-nums mb-3">
                    {c.percentual}%
                  </p>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct(c.percentual)}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  {!hasVotes && (
                    <p className="text-slate-600 text-xs mt-3">{t.waitingVotes}</p>
                  )}
                </div>
              ))}
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col gap-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{t.sections}</span>
                  <span className="text-white font-semibold tabular-nums">
                    {data.secoesApuradasPct}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${secoesPct}%` }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{t.turnout}</span>
                  <span className="text-white font-semibold tabular-nums">
                    {data.comparecimentoPct}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-slate-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${turnoutPct}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              <div className="pt-4 mt-auto border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>
                  {t.updatedAt}: {data.atualizadoEm ?? "—"}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-10 flex items-center justify-between text-xs text-slate-600">
          <span>{t.source}</span>
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-500 hover:text-slate-300"
          >
            {t.sourceCta}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Nudge subconsciente pra rolar: texto + seta quicando, mesma linguagem do Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-sm">{t.scrollCue}</span>
        <ChevronDown
          className="w-6 h-6 text-slate-500 animate-bounce"
          style={{ animationDuration: "2s" }}
          aria-hidden
        />
      </motion.div>
    </section>
  );
}
