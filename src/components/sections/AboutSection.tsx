"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Shield,
  CheckCircle2,
  Cpu,
  Star,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

function CountUp({
  target,
  suffix = "",
  inView,
}: {
  target: number;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const duration = 1800;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round((target / steps) * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

const features = [
  {
    icon: Shield,
    title: "Garantia total",
    text: "12 meses em todos os serviços instalados",
  },
  {
    icon: CheckCircle2,
    title: "Equipe certificada",
    text: "Técnicos treinados e especializados",
  },
  {
    icon: Cpu,
    title: "Equipamentos de alto padrão",
    text: "Marcas líderes do mercado global",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Clientes atendidos" },
  { value: 24, suffix: "/7", label: "Suporte" },
  { value: 5, suffix: "+", label: "Anos" },
  { value: 100, suffix: "%", label: "Satisfação" },
];

const cardBase =
  "rounded-3xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-6 transition-colors duration-300";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24" aria-label="Sobre a SafeVisionBR">
      <div className="container mx-auto px-6">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Por que escolher a SafeVisionBR?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Mais de 5 anos conectando e cuidando de empresas e residências em São Paulo.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {/* Card 1 — Principal (col-span-2) */}
          <motion.div
            className={`${cardBase} md:col-span-2 hover:border-cyan-500/30`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 rounded-full px-3 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-400 text-xs">São Paulo, SP · Desde 2020</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Tecnologia que monitora.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Expertise que tranquiliza.
              </span>
            </h3>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Combinamos expertise técnica com atendimento personalizado para entregar
              soluções sob medida — do cabeamento estruturado à automação IoT completa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 bg-slate-900/50 border border-slate-700/40 rounded-2xl p-4"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{title}</p>
                    <p className="text-slate-400 text-xs leading-snug">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 — Stats (col-span-1, row-span-2) */}
          <motion.div
            className="md:row-span-2 rounded-3xl border border-cyan-800/30 bg-gradient-to-b from-cyan-950/50 to-blue-950/40 backdrop-blur-sm p-6 flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-xs font-medium tracking-widest uppercase">
              Nossos números
            </p>

            <div className="grid grid-cols-2 gap-3 flex-1">
              {stats.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-4 flex flex-col justify-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 tabular-nums">
                    <CountUp target={value} suffix={suffix} inView={inView} />
                  </p>
                  <p className="text-slate-400 text-xs">{label}</p>
                </div>
              ))}
            </div>

            {/* Barra de destaque */}
            <div className="h-px w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50" />

            <p className="text-slate-500 text-xs text-center leading-relaxed">
              Resultados consistentes para clientes em toda a Grande São Paulo
            </p>
          </motion.div>

          {/* Card 3 — Google Reviews */}
          <motion.div
            className={`${cardBase} hover:border-yellow-500/30`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-sm font-bold" style={{ color: "#4285F4" }}>
                  G
                </span>
              </div>
              <span className="text-slate-300 text-sm font-medium">Google Reviews</span>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-4xl font-bold text-white mb-1">5.0</p>
            <p className="text-slate-500 text-xs leading-relaxed">
              Baseado em avaliações reais de clientes no Google Maps
            </p>
          </motion.div>

          {/* Card 4 — WhatsApp CTA */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-green-800/40 bg-gradient-to-br from-green-950/50 to-emerald-900/30 backdrop-blur-sm p-6 flex flex-col transition-all duration-300 hover:border-green-500/50 hover:from-green-950/70 hover:to-emerald-900/50 group cursor-pointer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>

            <h4 className="text-white font-bold text-lg mb-1">Atendimento imediato</h4>
            <p className="text-slate-400 text-sm mb-4 flex-1">
              Retorno ágil via WhatsApp
            </p>

            <div className="flex items-center gap-2 text-green-400 text-sm font-semibold group-hover:gap-3 transition-all">
              <span>Solicitar orçamento</span>
              <span>→</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
