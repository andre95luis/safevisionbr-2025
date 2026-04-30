"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown, Shield, Instagram } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

const trustPoints = [
  "Atendimento em até 2h",
  "Garantia de 12 meses",
  "Do residencial ao corporativo",
  "Suporte 24/7",
];

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      aria-label="Início"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/Logo Safe Vision-png-menor-branco-03.png"
              alt="Safe Vision BR — Segurança Eletrônica e Automação IoT"
              width={400}
              height={312}
              className="h-44 md:h-64 w-auto"
              style={{ width: "auto" }}
              priority
            />
          </motion.div>

          {/* Headline */}
          {/* Badge de credibilidade */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 border border-slate-700/60 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-slate-300">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
              <span className="text-slate-500">·</span>
              <span>Nota 5.0 no Google</span>
              <span className="text-slate-500">·</span>
              <span>Mais de uma década de experiência</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
          >
            Tudo que você precisa em tecnologia.{" "}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Uma empresa, tudo resolvido.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Muito mais que segurança. Conheça todas as soluções que temos
            para a sua empresa ou residência.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <Shield className="w-5 h-5" />
              Solicitar uma proposta
            </a>

            <a
              href="https://instagram.com/safevisionbr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-slate-800/50"
            >
              <Instagram className="w-5 h-5" />
              Ver nosso trabalho
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-1.5 text-slate-500 text-sm">
                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                {point}
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("services")}
          className="animate-bounce text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="Ver serviços"
          style={{ animationDuration: "2s" }}
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
