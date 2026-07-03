"use client";

import { motion } from "motion/react";
import {
  NetworkIcon,
  WifiMeshIcon,
  SecurityIcon,
  MonitoringIcon,
  ITSupportIcon,
  ElectricalIcon,
  ChurchSoundIcon,
} from "@/components/icons/ServiceIcons";
import { useLanguage } from "@/providers/LanguageProvider";

const serviceIcons = [
  <NetworkIcon key="network" />,
  <WifiMeshIcon key="wifi" />,
  <SecurityIcon key="security" />,
  <MonitoringIcon key="monitoring" />,
  <ChurchSoundIcon key="sound" />,
  <ITSupportIcon key="it" />,
  <ElectricalIcon key="electrical" />,
];

export default function ServicesSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-20 bg-slate-900/50"
      aria-label="Nossos Serviços"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {t.services.items.map((service, idx) => (
            <motion.article
              key={service.title}
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 cursor-default"
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
              <div className="text-cyan-400 mb-4">
                {serviceIcons[idx]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.services.ctaTitle}
              </h3>
              <p className="text-slate-400 mb-6 max-w-2xl">
                {t.services.ctaDesc}
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                {t.services.ctaBtn}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
