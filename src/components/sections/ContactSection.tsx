"use client";

import { motion } from "motion/react";
import { Phone, Mail, Clock } from "lucide-react";
import { WHATSAPP_QUOTE_LINK } from "@/lib/data";

const contactCards = [
  {
    icon: Phone,
    title: "Telefone",
    subtitle: "Entre em contato direto",
    value: "+55 (11) 963561680",
    href: "tel:+5511963561680",
  },
  {
    icon: Mail,
    title: "E-mail",
    subtitle: "Envie sua mensagem",
    value: "contato@safevisionbr.com.br",
    href: "mailto:contato@safevisionbr.com.br",
  },
  {
    icon: Clock,
    title: "Resposta rápida",
    subtitle: "Atendimento ágil, sem burocracia",
    value: "Em até 2 horas",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-900/50"
      aria-label="Entre em Contato"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Fale com nossa equipe e receba uma proposta personalizada
            para o seu projeto — sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactCards.map(({ icon: Icon, title, subtitle, value, href }, index) => (
            <motion.div
              key={title}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-cyan-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-slate-400">{subtitle}</p>
              {href ? (
                <a
                  href={href}
                  className="text-cyan-400 font-semibold mt-2 block hover:text-cyan-300 transition-colors"
                >
                  {value}
                </a>
              ) : (
                <p className="text-cyan-400 font-semibold mt-2">{value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href={WHATSAPP_QUOTE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
