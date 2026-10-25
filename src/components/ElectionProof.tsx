"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Share2, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { WHATSAPP_QUOTE_LINK } from "@/lib/data";

const SHARE_URL = "https://safevisionbr.com.br/apuracao";

const copy = {
  pt: {
    eyebrow: "Por trás desta página",
    title: "Se fazemos isso em poucas horas, imagine pelo seu espaço.",
    body: "Esta página consome, em tempo real, os dados oficiais e criptografados do TSE — a mesma fonte usada pelos grandes veículos de imprensa — e foi projetada, integrada e publicada no mesmo dia. É o mesmo padrão de engenharia que a Safe Vision aplica em cada projeto: do som de uma igreja à rede de uma empresa, da câmera de uma residência à automação de uma escola.",
    proof: [
      { k: "5.0", v: "única empresa do setor com nota 5.0 no Google na região" },
      { k: "100+", v: "projetos entregues em São Paulo e região" },
      { k: "2h", v: "tempo médio de primeira resposta" },
    ],
    quoteCta: "Solicitar uma cotação",
    quoteSub: "Diagnóstico sem compromisso, com retorno ágil da equipe técnica.",
    shareCta: "Indicar para alguém",
    shareSub: "Conhece uma empresa, condomínio ou residência que merece esse padrão?",
    shareText:
      "Acompanhei a apuração das eleições pelo site da Safe Vision BR — referência em segurança eletrônica, redes e TI, com nota 5.0 no Google. Vale a pena conhecer:",
    copied: "Link copiado!",
  },
  en: {
    eyebrow: "Behind this page",
    title: "If we can pull this off in hours, imagine what we do for your space.",
    body: "This page pulls, in real time, the official, cryptographically signed data feed from Brazil's electoral court — the same source major newsrooms use — and was designed, integrated and shipped the same day. That's the engineering standard Safe Vision applies to every project: from a church's sound system to a company's network, from a home's cameras to a school's automation.",
    proof: [
      { k: "5.0", v: "the only 5.0-rated company in the sector, in the region" },
      { k: "100+", v: "projects delivered across São Paulo" },
      { k: "2h", v: "average time to first response" },
    ],
    quoteCta: "Request a quote",
    quoteSub: "No-commitment assessment, fast reply from our technical team.",
    shareCta: "Refer someone",
    shareSub: "Know a business, building or home that deserves this standard?",
    shareText:
      "I followed the Brazilian election results on Safe Vision BR's site — a benchmark in security, networking and IT, rated 5.0 on Google. Worth checking out:",
    copied: "Link copied!",
  },
} as const;

export default function ElectionProof() {
  const { locale } = useLanguage();
  const t = copy[locale] ?? copy.pt;
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text: t.shareText, url: SHARE_URL });
        return;
      } catch {
        // usuário cancelou o share nativo; cai no fallback abaixo
      }
    }
    try {
      await navigator.clipboard.writeText(`${t.shareText} ${SHARE_URL}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // sem permissão de clipboard; não há mais o que tentar
    }
  };

  return (
    <section className="bg-slate-900/60 border-y border-slate-800 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-4">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{t.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 grid grid-cols-3 gap-4 max-w-2xl"
        >
          {t.proof.map((p) => (
            <div
              key={p.v}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <p className="text-2xl md:text-3xl font-bold text-cyan-400 tabular-nums mb-1">
                {p.k}
              </p>
              <p className="text-slate-500 text-xs leading-snug">{p.v}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={WHATSAPP_QUOTE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-7 py-4 rounded-2xl font-semibold transition-colors"
          >
            <span className="flex items-center gap-2">
              {t.quoteCta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="text-slate-900/70 text-xs font-normal">{t.quoteSub}</span>
          </a>

          <button
            onClick={handleShare}
            className="group flex flex-col gap-1 border border-slate-700 hover:border-slate-500 text-white px-7 py-4 rounded-2xl font-semibold transition-colors text-left"
          >
            <span className="flex items-center gap-2">
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-cyan-400" />
                  {t.copied}
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  {t.shareCta}
                </>
              )}
            </span>
            <span className="text-slate-500 text-xs font-normal">{t.shareSub}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
