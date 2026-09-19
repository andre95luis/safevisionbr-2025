"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Shield, Instagram } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { useLanguage } from "@/providers/LanguageProvider";

function PainTicker() {
  const { t } = useLanguage();
  const [i, setI] = useState(0);
  const pains = t.hero.pains;
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % pains.length), 3400);
    return () => clearInterval(id);
  }, [pains.length]);

  return (
    <div className="mb-8 mx-auto max-w-2xl border border-slate-700/60 bg-slate-900/60 rounded-2xl px-6 py-5">
      <p className="text-slate-500 text-sm mb-2">{t.hero.painLabel}</p>
      <div className="relative h-[5.5rem] md:h-8" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.p
            key={`${t.hero.painLabel}-${i}`}
            className="absolute inset-0 text-white text-lg md:text-xl font-medium"
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {pains[i]}
          </motion.p>
        </AnimatePresence>
      </div>
      <motion.p
        className="mt-3 flex items-center justify-center gap-2 text-cyan-400 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Shield className="w-4 h-4" />
        {t.hero.painSolve}
      </motion.p>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-24 md:pb-32"
      aria-label="Início"
    >
      <motion.div
        className="absolute inset-0 bg-slate-950"
        style={{ y: bgY }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          <motion.div
            className="mb-5 flex justify-center"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Image
              src="/Logo Safe Vision-png-menor-branco-03.png"
              alt="Safe Vision BR — Segurança Eletrônica e Automação IoT"
              width={400}
              height={312}
              className="h-28 md:h-40 w-auto"
              style={{ width: "auto" }}
              priority
            />
          </motion.div>

          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="flex items-center gap-2 border border-slate-700/60 bg-slate-800/50 rounded-full px-4 py-2 text-sm text-slate-300">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
              <span className="text-slate-500">·</span>
              <span>{t.hero.badge}</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {t.hero.headline1}{" "}
            <br />
            <span className="text-cyan-400">
              {t.hero.headline2}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <PainTicker />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-cyan-500/20"
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(6,182,212,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Shield className="w-5 h-5" />
              {t.hero.ctaPrimary}
            </motion.a>

            <motion.a
              href="https://instagram.com/safevisionbr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 border border-slate-700 px-8 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.03, borderColor: "rgba(148,163,184,0.6)", color: "#fff", backgroundColor: "rgba(30,41,59,0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Instagram className="w-5 h-5" />
              {t.hero.ctaSecondary}
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {t.hero.trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-1.5 text-slate-500 text-sm">
                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                {point}
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("services")}
          className="animate-bounce text-slate-500 hover:text-slate-300 transition-colors"
          aria-label={t.hero.scrollLabel}
          style={{ animationDuration: "2s" }}
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
