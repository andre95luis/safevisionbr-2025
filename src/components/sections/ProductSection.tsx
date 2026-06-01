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

const features = [
  {
    icon: MessageCircle,
    text: "Notificação direto no WhatsApp do morador",
  },
  {
    icon: QrCode,
    text: "QR Code na portaria — sem aplicativo necessário",
  },
  {
    icon: ShieldCheck,
    text: "Entrega só acontece com autorização prévia",
  },
  {
    icon: Building2,
    text: "Painel multi-condomínio em uma única conta",
  },
];

const steps = [
  {
    icon: Scan,
    label: "Entregador chega",
    description: "Escaneia o QR Code ou acessa o link do condomínio pelo celular",
  },
  {
    icon: Package,
    label: "Localiza o morador",
    description: "Busca por número do apartamento ou nome do morador",
  },
  {
    icon: UserCheck,
    label: "Morador autoriza",
    description: "Recebe a notificação no WhatsApp e libera a entrada pelo celular",
  },
];

export default function ProductSection() {
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
            Nossos Produtos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Só a Safe tem.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Desenvolvemos nossas próprias soluções para resolver problemas
            que o mercado ainda não resolveu.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Card esquerdo — diferenciais */}
          <motion.div
            className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
              Por que o PorteiroBot?
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 text-sm leading-snug">{text}</p>
                </div>
              ))}
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
              Conhecer o PorteiroBot →
            </motion.a>
          </motion.div>

          {/* Card direito — como funciona (3 passos) */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2 px-1">
              Como funciona
            </p>

            {steps.map(({ icon: Icon, label, description }, i) => (
              <div
                key={label}
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
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
