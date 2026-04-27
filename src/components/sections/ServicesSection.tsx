"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  NetworkIcon,
  WifiMeshIcon,
  SecurityIcon,
  IoTIcon,
  ITSupportIcon,
  ElectricalIcon,
} from "@/components/icons/ServiceIcons";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <NetworkIcon />,
    title: "Cabeamento Estruturado",
    description:
      "Infraestrutura de rede profissional para empresas e residências com padrões internacionais de qualidade.",
  },
  {
    icon: <WifiMeshIcon />,
    title: "WiFi Mesh",
    description:
      "Cobertura total de internet sem fio com tecnologia mesh para conectividade perfeita em todos os ambientes.",
  },
  {
    icon: <SecurityIcon />,
    title: "Segurança Eletrônica",
    description:
      "Sistemas completos de câmeras, alarmes e monitoramento 24h para proteção total do seu patrimônio.",
  },
  {
    icon: <IoTIcon />,
    title: "Automação IoT",
    description:
      "Casa e empresa inteligentes com dispositivos conectados para máximo conforto e eficiência energética.",
  },
  {
    icon: <ITSupportIcon />,
    title: "Suporte de TI",
    description:
      "Contratos de suporte técnico especializado para manter sua tecnologia sempre funcionando perfeitamente.",
  },
  {
    icon: <ElectricalIcon />,
    title: "Serviços Elétricos",
    description:
      "Instalação e manutenção elétrica predial e residencial com equipe certificada e materiais de qualidade.",
  },
];

export default function ServicesSection() {
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia, desde infraestrutura de rede
            até sistemas de segurança avançados, sempre com foco na excelência e inovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-slate-400 mb-6 max-w-2xl">
                Nossa equipe especializada está pronta para desenvolver a solução perfeita
                para suas necessidades específicas de tecnologia e segurança.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Consulte Nossos Especialistas
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
