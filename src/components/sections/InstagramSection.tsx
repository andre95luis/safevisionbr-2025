"use client";

import { motion } from "motion/react";
import { Instagram, Play, ArrowRight } from "lucide-react";

// Quando tiver URL de um Reel específico, substitua o valor abaixo:
// Ex: "https://www.instagram.com/reel/ABC123XYZ/"
const FEATURED_REEL_URL: string | null = null;

const highlights = [
  { emoji: "📷", label: "Instalações CFTV" },
  { emoji: "🌐", label: "Redes Mesh" },
  { emoji: "⚡", label: "Automação IoT" },
  { emoji: "🔧", label: "Bastidores" },
];

export default function InstagramSection() {
  return (
    <section className="py-24 bg-slate-900/30" aria-label="Nossa presença no Instagram">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase mb-3">
            Veja nosso trabalho
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cada projeto, uma{" "}
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
              história real.
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Acompanhe instalações, bastidores e dicas de segurança no nosso Instagram.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* Coluna esquerda — card principal com vídeo ou placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {FEATURED_REEL_URL ? (
              /* Embed do Reel quando disponível */
              <div className="relative aspect-[9/16] max-h-[540px] w-full rounded-3xl overflow-hidden border border-slate-700/50">
                <iframe
                  src={FEATURED_REEL_URL.replace("/reel/", "/p/").replace(/\/$/, "") + "/embed/"}
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  title="SafeVisionBR — Reel no Instagram"
                />
              </div>
            ) : (
              /* Placeholder elegante enquanto sem vídeo */
              <div className="relative aspect-[9/16] max-h-[540px] w-full rounded-3xl overflow-hidden border border-slate-700/50 bg-gradient-to-br from-slate-800/60 to-slate-900/80 flex flex-col items-center justify-center gap-6 group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-fuchsia-500/5 to-orange-500/5" />

                {/* Instagram gradient ring */}
                <div className="relative p-1 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400">
                  <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center">
                    <Instagram className="w-9 h-9 text-white" />
                  </div>
                </div>

                <div className="text-center px-6 relative z-10">
                  <p className="text-white font-bold text-xl mb-1">@safevisionbr</p>
                  <p className="text-slate-400 text-sm">
                    Projetos reais, dicas de segurança e bastidores do nosso time
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold text-sm relative z-10 hover:opacity-90 transition-opacity cursor-pointer"
                  onClick={() => window.open("https://instagram.com/safevisionbr", "_blank")}
                >
                  <Play className="w-4 h-4 fill-white" />
                  Ver Reels
                </div>

                <p className="text-slate-600 text-xs relative z-10">
                  Em breve: vídeo do nosso time aqui
                </p>
              </div>
            )}
          </motion.div>

          {/* Coluna direita — call to action + categorias */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Transparência em cada etapa
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Mostramos nosso trabalho de perto — do planejamento à entrega final.
                Porque confiança se constrói com evidências, não só com promessas.
              </p>
            </div>

            {/* Categorias de conteúdo */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ emoji, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-slate-800/40 border border-slate-700/40 rounded-2xl px-4 py-3"
                >
                  <span className="text-xl">{emoji}</span>
                  <span className="text-slate-300 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://instagram.com/safevisionbr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Seguir @safevisionbr
              </a>

              <a
                href="https://instagram.com/safevisionbr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all"
              >
                Ver todos os projetos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
