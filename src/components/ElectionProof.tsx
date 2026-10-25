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
    title: "A mesma atenção que colocamos aqui, colocamos em cada instalação.",
    body: "Essa apuração em tempo real não é um widget pronto — foi integrada do zero, direto da fonte oficial, no ar em poucas horas. É o mesmo cuidado técnico que a Safe Vision aplica em cada câmera, cada ponto de rede e cada automação que entrega: feito com atenção, sem gambiarra, funcionando de verdade.",
    proof: [
      { k: "5.0", v: "nota no Google, com avaliações reais" },
      { k: "100+", v: "empresas e residências atendidas" },
      { k: "2h", v: "tempo médio de resposta" },
    ],
    quoteCta: "Solicitar uma cotação",
    quoteSub: "Sem compromisso. Resposta rápida.",
    shareCta: "Indicar para alguém",
    shareSub: "Conhece uma empresa ou vizinho que precisa disso?",
    shareText:
      "Vi essa apuração ao vivo das eleições no site da Safe Vision BR — empresa de segurança eletrônica, redes e TI com nota 5.0 no Google. Recomendo:",
    copied: "Link copiado!",
  },
  en: {
    eyebrow: "Behind this page",
    title: "The same care we put into this, we put into every installation.",
    body: "This live results feed isn't an off-the-shelf widget — it was built from scratch, straight from the official source, live in a few hours. That's the same technical care Safe Vision applies to every camera, network point and automation we deliver: built with attention, no shortcuts, actually working.",
    proof: [
      { k: "5.0", v: "rating on Google, from real reviews" },
      { k: "100+", v: "businesses and homes served" },
      { k: "2h", v: "average response time" },
    ],
    quoteCta: "Request a quote",
    quoteSub: "No commitment. Fast reply.",
    shareCta: "Refer someone",
    shareSub: "Know a business or neighbor who needs this?",
    shareText:
      "I watched the Brazilian election results live on Safe Vision BR's site — a 5.0-rated security, networking and IT company. Recommending them:",
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
