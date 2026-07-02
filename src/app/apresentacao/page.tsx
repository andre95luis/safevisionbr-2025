"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";
import {
  Cable,
  Wifi,
  Shield,
  Video,
  Volume2,
  Laptop,
  Zap,
  Star,
  CheckCircle2,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  Quote,
  ChevronDown,
  Clock,
  Users,
  Award,
  Wrench,
  HeadphonesIcon,
  FileCheck,
} from "lucide-react";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511963561680&text=Ol%C3%A1!%20Vi%20a%20apresenta%C3%A7%C3%A3o%20da%20SafeVisionBR%20e%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20meu%20projeto.&type=phone_number&app_absent=0";

// ── Data ─────────────────────────────────────────────────────────

const portfolio = [
  {
    category: "Segurança Eletrônica",
    client: "Empresa de Logística",
    location: "Zona Leste · SP",
    specs: "16 câmeras HD · Acesso remoto · Armazenamento em nuvem",
    result: "Furtos internos reduziram 100%",
    icon: Video,
    accent: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    category: "WiFi Mesh Enterprise",
    client: "Escola Particular",
    location: "Moema · SP",
    specs: "2.400m² cobertos · 12 access points · Rede segregada por perfil",
    result: "Zero pontos sem sinal no campus",
    icon: Wifi,
    accent: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    category: "Sonorização Profissional",
    client: "Igreja Evangélica",
    location: "Santo André · SP",
    specs: "Sistema completo para 800 pessoas · Mesa digital · Monitores de palco",
    result: "Clareza de som em todos os pontos",
    icon: Volume2,
    accent: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    category: "Segurança Residencial",
    client: "Residência Unifamiliar",
    location: "Mooca · SP",
    specs: "8 câmeras · Alarme perimetral · Cerca elétrica · App no celular",
    result: "Família dorme tranquila com monitoramento 24/7",
    icon: Shield,
    accent: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    category: "Cabeamento & Redes",
    client: "Condomínio Residencial",
    location: "Berrini · SP",
    specs: "80 pontos Cat6A · 3 racks · Certificação Fluke · WiFi por andar",
    result: "Infraestrutura pronta para 10 anos",
    icon: Cable,
    accent: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    category: "Instalação Elétrica",
    client: "Academia de Ginástica",
    location: "Tatuapé · SP",
    specs: "Padrão ABNT · Quadro de distribuição · 40 circuitos",
    result: "Vistoria aprovada na primeira tentativa",
    icon: Zap,
    accent: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
  },
];

const process = [
  {
    step: "01",
    icon: Phone,
    title: "Primeiro contato",
    desc: "Você entra em contato pelo WhatsApp ou e-mail. Respondemos em minutos e agendamos um diagnóstico sem custo.",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Diagnóstico e proposta",
    desc: "Visitamos o local, levantamos o escopo completo e entregamos uma proposta clara com prazo e valor definidos.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Instalação com acompanhamento",
    desc: "Executamos o projeto com nossa equipe própria e certificada. Você acompanha cada etapa com cronograma real.",
  },
  {
    step: "04",
    icon: HeadphonesIcon,
    title: "Suporte contínuo",
    desc: "Após a entrega, seguimos disponíveis. Contratos de suporte mensal ou atendimento avulso — você escolhe.",
  },
];

const testimonials = [
  {
    text: "A Safe instalou todo o sistema de câmeras do nosso galpão. Atendimento profissional, prazo cumprido e suporte rápido quando precisamos. Recomendo sem hesitar.",
    author: "Paulo R.",
    role: "Diretor Operacional",
    company: "Empresa de Logística · SP",
    stars: 5,
  },
  {
    text: "Contratamos o suporte de TI há 1 ano. Desde então, paramos de ter problema com rede e computadores. O André resolve qualquer coisa no mesmo dia.",
    author: "Mariana C.",
    role: "Gestora Administrativa",
    company: "Escritório de Advocacia · SP",
    stars: 5,
  },
  {
    text: "Sonorização da nossa igreja ficou perfeita. A equipe entendeu exatamente o que precisávamos e entregou dentro do orçamento combinado.",
    author: "Pastor Edson S.",
    role: "Responsável pela obra",
    company: "Igreja Evangélica · Santo André",
    stars: 5,
  },
];

const products = [
  {
    name: "PorteiroBot",
    tagline: "Portaria digital para condomínios",
    desc: "Morador recebe notificação no WhatsApp quando alguém chega. QR Code na entrada. Sem aplicativo.",
    url: "https://porteirobot.safevisionbr.com.br",
  },
  {
    name: "Agenda Pra Mim",
    tagline: "Reserva de espaços sem conflito",
    desc: "Agendamento inteligente para salão de festas, salas de reunião e qualquer espaço compartilhado.",
    url: "https://agendapramim.safevisionbr.com.br",
  },
  {
    name: "Cota Pra Mim",
    tagline: "Orçamentos profissionais por voz com IA",
    desc: "Fale o orçamento, a IA monta o PDF em 30 segundos e você envia direto pelo WhatsApp.",
    url: "https://cotapramim.safevisionbr.com.br",
  },
];

const services = [
  { icon: Video, label: "Câmeras de Segurança" },
  { icon: Wifi, label: "WiFi & Redes" },
  { icon: Shield, label: "Controle de Acesso" },
  { icon: Cable, label: "Cabeamento" },
  { icon: Volume2, label: "Sonorização" },
  { icon: Laptop, label: "Suporte de TI" },
  { icon: Zap, label: "Elétrica" },
];

// ── Animations ───────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

function InView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────

export default function ApresentacaoPage() {
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-cyan-400 origin-left z-50"
        style={{ scaleX: progressScale }}
      />

      {/* Ambient glow — fixed */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/[0.07] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/[0.05] blur-[120px]" />
      </div>

      {/* ══ 01 · CAPA ══════════════════════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center gap-10">
        <motion.div
          className="flex flex-col items-center gap-8 max-w-2xl w-full"
          initial="hidden"
          animate="visible"
          variants={stagger(0.12)}
        >
          <motion.div variants={fadeUp}>
            <Image
              src="/Logo Safe Vision-png-menor-branco-03.png"
              alt="Safe Vision BR"
              width={200}
              height={65}
              className="h-14 w-auto"
              style={{ width: "auto" }}
              priority
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-sm tracking-widest uppercase"
          >
            Apresentação preparada para você
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-balance"
          >
            A parceira em tecnologia que você{" "}
            <span className="text-cyan-400">estava procurando.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-xl leading-relaxed max-w-lg"
          >
            Câmeras, redes, TI, sonorização e elétrica — para residências,
            igrejas, escolas e empresas. Projetos completos com equipe própria em São Paulo.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              Nota 5.0 no Google
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              100+ projetos entregues
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              Equipe certificada Dell · Cisco · Ubiquiti
            </span>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white font-bold px-10 py-4 rounded-2xl shadow-lg shadow-green-500/20"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(34,197,94,0.30)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar uma conversa
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll para continuar</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ 02 · O PROBLEMA ════════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <InView className="mb-16 max-w-2xl">
            <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">O cenário real</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-balance mb-6">
              Tecnologia que falha{" "}
              <span className="text-slate-400">custa caro.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Câmeras que não gravam. Rede que cai na hora errada. Suporte que
              nunca aparece. TI que vira um problema, não uma solução. Parece
              familiar?
            </p>
          </InView>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: "72%", desc: "dos lares e negócios tiveram ao menos 1 falha de segurança ou TI no último ano" },
              { stat: "4h", desc: "é o tempo médio perdido por funcionário em cada incidente de rede" },
              { stat: "R$ 0", desc: "de valor gerado por câmeras que gravam mal ou não estão configuradas" },
            ].map(({ stat, desc }) => (
              <InView key={stat} className="bg-slate-800/50 border border-slate-700/40 rounded-2xl p-6">
                <p className="text-4xl font-bold text-cyan-400 mb-3">{stat}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </InView>
            ))}
          </div>

          <InView delay={0.2} className="mt-12 p-6 border border-cyan-500/20 rounded-2xl bg-cyan-500/[0.04]">
            <p className="text-lg text-white leading-relaxed">
              <span className="text-cyan-400 font-semibold">A Safe foi criada para resolver isso.</span>{" "}
              Não vendemos produto e sumimos. Somos parceiros — estamos aqui antes, durante e depois do projeto.
            </p>
          </InView>
        </div>
      </section>

      {/* ══ 03 · PORTFÓLIO ═════════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <InView className="mb-14">
            <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">Projetos executados</p>
            <h2 className="text-4xl font-bold mb-4">O que já entregamos.</h2>
            <p className="text-slate-400 text-lg">
              Residências, igrejas, escolas, condomínios e empresas. Resultados reais.
            </p>
          </InView>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger(0.07)}
          >
            {portfolio.map(({ category, client, location, specs, result, icon: Icon, accent, border, iconColor }) => (
              <motion.div
                key={client + category}
                variants={fadeUp}
                className={`bg-gradient-to-br ${accent} border ${border} rounded-2xl p-6 flex flex-col gap-4`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <span className={`text-xs font-semibold ${iconColor} bg-slate-900/60 rounded-full px-2.5 py-1 shrink-0`}>
                    {category}
                  </span>
                </div>

                <div>
                  <p className="font-bold text-white text-sm">{client}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{location}</p>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed flex-1">{specs}</p>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-700/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <p className="text-green-400 text-xs font-medium">{result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 04 · COMO TRABALHAMOS ══════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <InView className="mb-14">
            <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">Nosso processo</p>
            <h2 className="text-4xl font-bold mb-4">
              Do primeiro contato à entrega final.
            </h2>
            <p className="text-slate-400 text-lg">
              Seja para a sua casa, igreja, escola ou empresa — o processo é o mesmo: transparência do início ao fim.
            </p>
          </InView>

          <div className="relative flex flex-col gap-0">
            {process.map(({ step, icon: Icon, title, desc }, idx) => (
              <InView key={step} delay={idx * 0.08} className="flex gap-6">
                {/* Linha vertical conectando os steps */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800/80 flex items-center justify-center shrink-0 z-10">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  {idx < process.length - 1 && (
                    <div className="w-px flex-1 bg-slate-800 mt-2 mb-2 min-h-[3rem]" />
                  )}
                </div>

                <div className="pb-10 flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-slate-600">{step}</span>
                    <h3 className="font-bold text-white">{title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 05 · DEPOIMENTOS ═══════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <InView className="mb-14">
            <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">O que dizem os clientes</p>
            <h2 className="text-4xl font-bold mb-4">
              Não acredite só na gente.
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-400 text-sm">5.0 no Google Maps · Avaliações verificadas</span>
            </div>
          </InView>

          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger(0.1)}
          >
            {testimonials.map(({ text, author, role, company, stars }) => (
              <motion.div
                key={author}
                variants={fadeUp}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6"
              >
                <Quote className="w-6 h-6 text-slate-700 mb-4" />
                <p className="text-slate-300 text-base leading-relaxed mb-5">{text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white text-sm">{author}</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {role} · {company}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 06 · SERVIÇOS ══════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <InView className="text-center mb-10">
            <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">Áreas de atuação</p>
            <h2 className="text-3xl font-bold">Tudo em um único fornecedor.</h2>
          </InView>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.07)}
          >
            {services.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 flex flex-col items-center gap-3 text-center"
                whileHover={{ borderColor: "rgba(6,182,212,0.3)", y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-700/80 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-xs font-medium text-slate-300 leading-tight">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          <InView delay={0.2} className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            {[
              { icon: Clock, text: "Prazo e escopo definidos" },
              { icon: Award, text: "Equipe certificada" },
              { icon: CheckCircle2, text: "Garantia de 12 meses" },
              { icon: Users, text: "100+ clientes atendidos" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-cyan-400" />
                {text}
              </span>
            ))}
          </InView>
        </div>
      </section>

      {/* ══ 07 · PRODUTOS EXCLUSIVOS ═══════════════════════════════ */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <InView className="mb-12">
            <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">Inovação própria</p>
            <h2 className="text-4xl font-bold mb-3">Só a Safe tem.</h2>
            <p className="text-slate-400 text-lg">
              Além dos serviços tradicionais, desenvolvemos produtos próprios para
              resolver problemas que o mercado ignorou.
            </p>
          </InView>

          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger(0.1)}
          >
            {products.map(({ name, tagline, desc, url }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="group flex items-start gap-5 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6"
                whileHover={{
                  borderColor: "rgba(6,182,212,0.3)",
                  backgroundColor: "rgba(30,41,59,0.65)",
                  y: -2,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white text-lg mb-0.5">{name}</p>
                  <p className="text-cyan-400 text-sm mb-3">{tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 08 · CTA FINAL ═════════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6 bg-slate-900/50">
        <motion.div
          className="max-w-xl mx-auto text-center flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-slate-500 text-sm tracking-widest uppercase">Próximo passo</p>
            <h2 className="text-4xl font-bold">Vamos conversar?</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Orçamento gratuito e sem compromisso. Basta nos contar o que você precisa — residência, igreja, escola ou empresa.
            </p>
          </div>

          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-8 py-5 rounded-2xl shadow-lg shadow-green-500/20 text-lg"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 40px rgba(34,197,94,0.35)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <MessageCircle className="w-6 h-6" />
            Agendar conversa pelo WhatsApp
          </motion.a>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
            <a
              href="tel:+5511963561680"
              className="flex items-center gap-1.5 hover:text-slate-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (11) 96356-1680
            </a>
            <span className="hidden sm:block text-slate-700">·</span>
            <a
              href="mailto:contato@safevisionbr.com.br"
              className="flex items-center gap-1.5 hover:text-slate-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              contato@safevisionbr.com.br
            </a>
          </div>

          <p className="text-slate-700 text-xs leading-relaxed max-w-sm">
            Esta apresentação foi preparada pela equipe SafeVisionBR exclusivamente para você.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="relative z-10 py-8 text-center border-t border-slate-900">
        <a
          href="https://safevisionbr.com.br"
          className="text-slate-700 hover:text-slate-500 text-xs transition-colors"
        >
          safevisionbr.com.br
        </a>
      </div>

    </div>
  );
}
