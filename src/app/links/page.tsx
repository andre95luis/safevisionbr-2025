"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  Star,
  MapPin,
  Clock,
  ChevronRight,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511963561680&text=Ol%C3%A1!%20Vim%20pelo%20cart%C3%A3o%20de%20visita%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.&type=phone_number&app_absent=0";

const GOOGLE_REVIEWS =
  "https://www.google.com/maps/search/safevisionbr+sao+paulo";

const badges = [
  { icon: Star, label: "Nota 5.0 no Google", color: "text-amber-400" },
  { icon: MapPin, label: "São Paulo e Grande SP", color: "text-cyan-400" },
  { icon: Clock, label: "Resposta em minutos", color: "text-cyan-400" },
];

const links = [
  {
    label: "Instagram",
    sublabel: "@safevisionbr — Projetos reais",
    href: "https://instagram.com/safevisionbr",
    icon: Instagram,
    iconColor: "text-pink-400",
  },
  {
    label: "Facebook",
    sublabel: "Novidades e promoções",
    href: "https://facebook.com/safevisionbr",
    icon: Facebook,
    iconColor: "text-blue-400",
  },
  {
    label: "Avaliações no Google",
    sublabel: "Nota 5.0 ★★★★★",
    href: GOOGLE_REVIEWS,
    icon: Star,
    iconColor: "text-amber-400",
  },
  {
    label: "+55 (11) 96356-1680",
    sublabel: "Toque para ligar agora",
    href: "tel:+5511963561680",
    icon: Phone,
    iconColor: "text-emerald-400",
  },
  {
    label: "contato@safevisionbr.com.br",
    sublabel: "Orçamentos e propostas",
    href: "mailto:contato@safevisionbr.com.br",
    icon: Mail,
    iconColor: "text-cyan-400",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center overflow-x-hidden">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-blue-600/[0.08] blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6 px-5 pt-14 pb-12">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/Logo Safe Vision-png-menor-branco-03.png"
            alt="Safe Vision BR"
            width={220}
            height={72}
            className="h-16 w-auto"
            style={{ width: "auto" }}
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <p className="text-white font-semibold text-sm leading-snug mb-1">
            Segurança, redes, elétrica, sonorização e TI.
          </p>
          <p className="text-slate-400 text-xs">
            Empresas · Igrejas · Condomínios · Residências
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {badges.map(({ icon: Icon, label, color }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-slate-300"
            >
              <Icon className={`w-3 h-3 ${color}`} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full flex items-center gap-3 rounded-2xl bg-green-500 px-5 py-4 shadow-lg shadow-green-500/20 overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(34,197,94,0.30)" }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Pulse ring */}
          <span className="absolute left-5 w-10 h-10 rounded-xl bg-white/20 animate-ping opacity-50" />

          <div className="relative w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-white fill-white/30" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Falar pelo WhatsApp</p>
            <p className="text-green-100/80 text-xs">Respondemos em minutos</p>
          </div>
          <ChevronRight className="w-4 h-4 text-white/60 shrink-0" />
        </motion.a>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-3 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-slate-600 text-xs tracking-widest uppercase">ou acesse</span>
          <div className="flex-1 h-px bg-slate-800" />
        </motion.div>

        {/* Link cards */}
        <motion.div
          className="w-full flex flex-col gap-3"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {links.map(({ label, sublabel, href, icon: Icon, iconColor }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 w-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-2xl px-4 py-4"
              variants={fadeUp}
              whileHover={{
                y: -2,
                borderColor: "rgba(6,182,212,0.3)",
                backgroundColor: "rgba(30,41,59,0.7)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-700/80 flex items-center justify-center shrink-0">
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm truncate">{label}</p>
                <p className="text-slate-500 text-xs truncate mt-0.5">{sublabel}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.a
          href="https://safevisionbr.com.br"
          className="text-slate-600 hover:text-slate-400 transition-colors text-xs tracking-wide pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          safevisionbr.com.br
        </motion.a>

      </main>
    </div>
  );
}
