"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink, Instagram } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tag: string;
  url: string;
  gradient: string;
  iconBg: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: "Manutenção em HD",
    description:
      "Atualização e manutenção completa em sistema de vigilância HD — câmeras recalibradas, cabos verificados e gravador otimizado para máximo desempenho e imagem nítida.",
    tag: "CFTV",
    url: "https://www.instagram.com/p/DW_WDenNFwH/",
    gradient: "from-cyan-900/60 to-blue-900/40",
    iconBg: "bg-cyan-500/20",
    icon: "📷",
  },
  {
    title: "Sonorização de Igreja",
    description:
      "Manutenção no sistema de sonorização completo de uma igreja — equalização, revisão de cabeamento e garantia de som cristalino em todos os ambientes do templo.",
    tag: "Sonorização",
    url: "https://www.instagram.com/p/DW6Jy_ejSU2/",
    gradient: "from-violet-900/60 to-purple-900/40",
    iconBg: "bg-violet-500/20",
    icon: "🔊",
  },
  {
    title: "Rede de TI + Câmeras",
    description:
      "Readequação total da infraestrutura de rede corporativa com organização de rack, certificação dos pontos e manutenção preventiva do sistema de câmeras.",
    tag: "Rede + CFTV",
    url: "https://www.instagram.com/p/DUp9qpwDaLk/",
    gradient: "from-emerald-900/60 to-teal-900/40",
    iconBg: "bg-emerald-500/20",
    icon: "🌐",
  },
  {
    title: "Câmera Fisheye 360°",
    description:
      "Instalação de câmera fisheye de última geração — visão 360° sem pontos cegos. Porque o compromisso é sempre escolher a melhor solução para cada local do cliente.",
    tag: "CFTV Avançado",
    url: "https://www.instagram.com/p/DVYPY6LjWR_/",
    gradient: "from-orange-900/60 to-amber-900/40",
    iconBg: "bg-orange-500/20",
    icon: "👁️",
  },
  {
    title: "Fotocélula em Portão",
    description:
      "Explicando na prática como a fotocélula num portão eletrônico funciona, impedindo que ele feche com pessoas ou objetos no caminho — segurança ativa no dia a dia.",
    tag: "Automação",
    url: "https://www.instagram.com/p/DTVPcVGDbqI/",
    gradient: "from-yellow-900/60 to-orange-900/40",
    iconBg: "bg-yellow-500/20",
    icon: "⚡",
  },
  {
    title: "Iluminação + Câmera + Alarme",
    description:
      "Projeto integrado de segurança completa: iluminação estratégica, câmeras posicionadas para cobertura total e sistema de alarme — monitoramento em três camadas.",
    tag: "Segurança Completa",
    url: "https://www.instagram.com/p/DJqLeBAJ5gG/",
    gradient: "from-rose-900/60 to-pink-900/40",
    iconBg: "bg-rose-500/20",
    icon: "🔒",
  },
];

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll("[data-card]");
    cards[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(index);
  };

  const prev = () => scrollTo(Math.max(0, activeIndex - 1));
  const next = () => scrollTo(Math.min(projects.length - 1, activeIndex + 1));

  return (
    <section className="py-24" aria-label="Projetos em destaque">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-slate-500 text-sm font-medium tracking-widest uppercase mb-3">
              Portfólio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Projetos que{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                falam por si.
              </span>
            </h2>
          </div>

          {/* Controles desktop */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-slate-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Projeto anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === projects.length - 1}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-slate-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Próximo projeto"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://instagram.com/safevisionbr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 rounded-full px-4 py-2 transition-all ml-2"
            >
              <Instagram className="w-4 h-4" />
              Ver todos
            </a>
          </div>
        </motion.div>

        {/* Carrossel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const cardWidth = el.scrollWidth / projects.length;
            setActiveIndex(Math.round(el.scrollLeft / cardWidth));
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.url}
              data-card
              className="snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <div
                className={`h-full rounded-3xl border border-slate-700/50 bg-gradient-to-br ${project.gradient} backdrop-blur-sm p-6 flex flex-col gap-5 hover:border-slate-600/70 transition-colors duration-300`}
              >
                {/* Tag + ícone */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 bg-slate-800/60 border border-slate-700/60 rounded-full px-3 py-1">
                    {project.tag}
                  </span>
                  <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center text-xl`}>
                    {project.icon}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Divisor */}
                <div className="h-px w-full bg-slate-700/50" />

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm font-semibold text-slate-300 hover:text-white group transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    Ver no Instagram
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots de navegação */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2 bg-cyan-400"
                  : "w-2 h-2 bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Ir para projeto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
