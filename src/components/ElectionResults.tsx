"use client";

import { motion } from "motion/react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { useApuracao } from "@/hooks/useApuracao";

const TSE_LINK =
  "https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/6258/uf/br/cargo/1/vis/nominal/resultados";

const copy = {
  pt: {
    eyebrow: "2º turno · Presidente da República · 2026",
    title: "Apuração ao vivo",
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
  },
  en: {
    eyebrow: "Runoff · President of Brazil · 2026",
    title: "Live results",
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
  },
} as const;

function pct(v: string | null | undefined) {
  if (!v) return 0;
  return Math.min(100, Math.max(0, Number(v.replace(",", "."))));
}

export default function ElectionResults() {
  const { locale } = useLanguage();
  const t = copy[locale] ?? copy.pt;
  const { data, closed, ready } = useApuracao();

  const secoesPct = pct(data?.secoesApuradasPct);
  const turnoutPct = pct(data?.comparecimentoPct);
  const candidatos = data?.candidatos ?? [];
  const hasVotes = candidatos.some((c) => c.votos > 0);

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

          <h1 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h1>
        </motion.div>

        {ready && !closed && (
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

        {ready && closed && data && !data.ok && (
          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 max-w-xl">
            <p className="text-slate-400 mb-4">{t.offline}</p>
            <a
              href={TSE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              {t.sourceCta}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {ready && closed && data?.ok && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-6"
          >
            {/* Candidatos */}
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
