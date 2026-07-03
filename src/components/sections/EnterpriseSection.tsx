"use client";

import { motion } from "motion/react";
import { Check, Building2, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import { useLanguage } from "@/providers/LanguageProvider";

export default function EnterpriseSection() {
  const { t } = useLanguage();

  return (
    <section
      id="enterprise"
      className="py-24 bg-slate-900/30"
      aria-label="Suporte Corporativo"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                {t.enterprise.badge}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {t.enterprise.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t.enterprise.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.enterprise.tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-3xl p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-gradient-to-b from-cyan-950/80 to-blue-950/60 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/10"
                  : "bg-slate-800/40 border border-slate-700/50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" as const }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Mais popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-1 ${
                  tier.highlighted ? "text-cyan-400" : "text-white"
                }`}>
                  {tier.name}
                </h3>
                <p className="text-slate-400 text-sm">{tier.desc}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      tier.highlighted ? "bg-cyan-500/20" : "bg-slate-700/60"
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${
                        tier.highlighted ? "text-cyan-400" : "text-slate-400"
                      }`} />
                    </div>
                    <span className="text-slate-300 text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                    : "border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-slate-500 text-sm mt-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {t.enterprise.note}
        </motion.p>
      </div>
    </section>
  );
}
