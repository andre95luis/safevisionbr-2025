export interface Testimonial {
  name: string;
  source: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Acabamento ficou show de bola não deixaram nenhum fio a mostra.",
    name: "Mikaella R. Da Silva",
    source: "Google",
  },
  {
    text: "Profissionais são qualificados, atenciosos e com experiência no negócio.",
    name: "Leonardo Moraes",
    source: "Google",
  },
  {
    text: "Super indico o trabalho dessa empresa, superou todas as minhas expectativas. O André sempre muito educado e solícito, executou um excelente trabalho em nossa escola.",
    name: "Escola de Danças Allegro",
    source: "Google",
  },
  {
    text: "Excelente atendimento e pós vendas. Sempre que precisamos do suporte de TI, estão sempre à disposição independente do horário, de prontidão. Muito obrigado pela excelência.",
    name: "Esfiharia Continental",
    source: "Google",
  },
  {
    text: "Trabalho impecável, equipe profissional e pontual. Recomendo para qualquer empresa que precise de soluções de TI.",
    name: "Maria Santos",
    source: "Google",
  },
  {
    text: "Suporte técnico excepcional, sempre resolvem nossos problemas rapidamente. Parceiros de confiança.",
    name: "Carlos Oliveira",
    source: "Google",
  },
  {
    text: "Instalação perfeita, sem complicações. Equipe muito preparada e educada.",
    name: "Ana Costa",
    source: "Google",
  },
  {
    text: "Melhor empresa de TI da região. Atendimento personalizado e soluções eficientes.",
    name: "Roberto Silva",
    source: "Google",
  },
  {
    text: "Transformaram nossa infraestrutura de TI completamente. Resultados surpreendentes.",
    name: "Luana Ferreira",
    source: "Google",
  },
];

export const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=5511963561680&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20SafeVisionBR.&type=phone_number&app_absent=0";

export const WHATSAPP_QUOTE_LINK =
  "https://api.whatsapp.com/send/?phone=5511963561680&text&type=phone_number&app_absent=0";
