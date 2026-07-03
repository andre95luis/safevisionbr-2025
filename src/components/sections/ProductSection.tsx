"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/providers/LanguageProvider";

export default function ProductSection() {
  const { t } = useLanguage();

  return (
    <section
      id="produto"
      className="py-20 bg-slate-900/50"
      aria-label={t.product.badge}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {t.product.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.product.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {t.product.items.map((product) => (
            <motion.a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 flex flex-col cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
              }}
              whileHover={{
                y: -6,
                borderColor: "rgba(6,182,212,0.35)",
                backgroundColor: "rgba(30,41,59,0.65)",
                boxShadow: "0 8px 32px rgba(6,182,212,0.08)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <h3 className="text-lg font-bold text-white mb-1">
                {product.name}
              </h3>
              <p className="text-cyan-400 text-sm mb-4">
                {product.tagline}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                {product.features.join(". ")}.
              </p>
              <span className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                {product.cta}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
