"use client";

import { motion } from "motion/react";
import {
  QrCode,
  MessageCircle,
  ShieldCheck,
  Building2,
  Package,
  UserCheck,
  Scan,
} from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const featureIcons = [MessageCircle, QrCode, ShieldCheck, Building2];
const stepIcons = [Scan, Package, UserCheck];

export default function ProductSection() {
  const { t } = useLanguage();

  return (
    <section id="produto" className="py-20" aria-label="PorteiroBot">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-5">
            {t.product.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.product.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.product.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <motion.div
            className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
              {t.product.whyTitle}
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {t.product.features.map((text, idx) => {
                const Icon = featureIcons[idx];
                return (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <p className="text-slate-300 text-sm leading-snug">{text}</p>
                  </div>
                );
              })}
            </div>

            <motion.a
              href="https://porteirobot.safevisionbr.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(6,182,212,0.30)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {t.product.cta}
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2 px-1">
              {t.product.howTitle}
            </p>

            {t.product.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div
                  key={step.label}
                  className="flex items-start gap-4 bg-slate-800/30 border border-slate-700/40 rounded-2xl p-5"
                >
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <span className="text-xs font-bold text-cyan-400 tabular-nums">
                      0{i + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-300" />
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-white font-semibold text-sm mb-1">{step.label}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
