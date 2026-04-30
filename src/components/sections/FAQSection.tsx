"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

const faqs = [
  {
    question: "Qual é a área de atendimento?",
    answer:
      "Atendemos São Paulo e toda a Grande São Paulo, incluindo ABC Paulista, Guarulhos, Osasco, Barueri, Santo André, São Bernardo do Campo e região. Para projetos fora dessa área, entre em contato — avaliamos cada caso.",
  },
  {
    question: "O orçamento é gratuito?",
    answer:
      "Sim, totalmente gratuito e sem compromisso. Analisamos o seu projeto, apresentamos as melhores opções e só avançamos quando você estiver confortável com a proposta.",
  },
  {
    question: "Vocês atendem residências, empresas e igrejas?",
    answer:
      "Sim. Nossos projetos vão do residencial ao corporativo — casas, apartamentos, escritórios, lojas, condomínios, escolas e igrejas. Somos especialistas em sonorização e segurança eletrônica para igrejas e templos de todos os portes.",
  },
  {
    question: "Quanto tempo leva a instalação?",
    answer:
      "Depende do porte do projeto. Instalações simples, como câmeras residenciais ou ponto de rede, costumam ser concluídas no mesmo dia. Projetos maiores, como infraestrutura de rede corporativa ou sonorização de igrejas, são planejados em etapas com prazo definido na proposta.",
  },
  {
    question: "Qual é a garantia dos serviços?",
    answer:
      "Todos os serviços têm garantia de 12 meses. Isso inclui mão de obra e os materiais instalados pela nossa equipe. Trabalhamos com marcas líderes do mercado justamente para garantir durabilidade e confiabilidade.",
  },
  {
    question: "Vocês fazem manutenção em sistemas que não instalaram?",
    answer:
      "Sim. Realizamos manutenção, readequação e modernização de câmeras, redes, alarmes e sistemas de sonorização independentemente de quem fez a instalação original. Se o sistema está com problema ou desatualizado, podemos avaliar e corrigir.",
  },
  {
    question: "Vocês oferecem contrato de suporte mensal para empresas?",
    answer:
      "Sim. Temos planos de suporte técnico mensal para empresas que precisam de TI sempre disponível — manutenção preventiva, atendimento remoto e visita presencial quando necessário. Ideal para quem não quer depender de chamados avulsos.",
  },
  {
    question: "Como faço para solicitar um orçamento?",
    answer:
      "Entre em contato via WhatsApp descrevendo seu projeto — tipo de serviço, local e objetivo. Nossa equipe analisa e prepara uma proposta personalizada para você.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-700/50 rounded-2xl overflow-hidden bg-slate-800/30 hover:border-slate-600/70 transition-colors duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-sm md:text-base leading-snug">
          {question}
        </span>
        <span className="shrink-0 w-6 h-6 rounded-full bg-slate-700/60 flex items-center justify-center text-cyan-400">
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-slate-900/50" aria-label="Perguntas frequentes">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Respondemos as principais dúvidas abaixo. Para informações adicionais, nossa equipe está disponível via WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm mb-4">
            Ainda tem dúvidas? Nossa equipe está à disposição.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            Falar com um especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
