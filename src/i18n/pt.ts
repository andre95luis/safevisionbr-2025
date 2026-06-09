import type { Dict } from "./types";

export const pt: Dict = {
  header: {
    nav: [
      { label: "Início", id: "home" },
      { label: "Serviços", id: "services" },
      { label: "Corporativo", id: "enterprise" },
      { label: "Produtos", id: "produto" },
      { label: "Sobre", id: "about" },
      { label: "FAQ", id: "faq" },
      { label: "Contato", id: "contact" },
    ],
    ticket: "Abrir chamado",
    cta: "Solicitar orçamento →",
  },

  hero: {
    badge: "Nota 5.0 no Google · Mais de uma década de experiência",
    headline1: "Tecnologia completa",
    headline2: "para qualquer ambiente.",
    subheadline:
      "Do cabeamento à segurança eletrônica, da elétrica à automação IoT — projetos sob medida com começo e fim em São Paulo.",
    trustPoints: [
      "Projetos sob medida com começo e fim",
      "Equipe certificada Dell, Cisco & Ubiquiti",
      "Monitoramento e suporte 24/7",
      "Da escola à multinacional",
    ],
    ctaPrimary: "Solicitar proposta",
    ctaSecondary: "Ver nosso trabalho",
    scrollLabel: "Ver serviços",
  },

  trustBar: {
    label: "Trabalhamos com as melhores marcas do mercado:",
  },

  services: {
    title: "Nossos Serviços",
    subtitle:
      "Soluções completas em tecnologia para empresas de todos os portes — do escritório corporativo ao ambiente industrial.",
    ctaTitle: "Precisa de uma solução personalizada?",
    ctaDesc:
      "Nossa equipe especializada está pronta para desenvolver a solução ideal para as necessidades de TI da sua empresa.",
    ctaBtn: "Consultar Especialistas",
    items: [
      {
        title: "Cabeamento Estruturado",
        description:
          "Infraestrutura de rede profissional para qualquer porte — fibra óptica, Cat6A, racks e documentação completa com certificação.",
      },
      {
        title: "WiFi Mesh e Redes",
        description:
          "Cobertura wireless total com tecnologia mesh enterprise, roteadores e switches gerenciados para ambientes de qualquer tamanho.",
      },
      {
        title: "Segurança Eletrônica",
        description:
          "Sistemas CFTV, controle de acesso, alarmes e cercas elétricas para residências, escolas, igrejas, condomínios e empresas.",
      },
      {
        title: "Monitoramento Remoto 24/7",
        description:
          "Central de monitoramento contínua com resposta imediata a alarmes, câmeras e eventos — proteção que nunca dorme.",
      },
      {
        title: "Projetos de Sonorização",
        description:
          "Projetos de áudio profissional para igrejas, academias, lojas, corporativos e eventos de grande porte.",
      },
      {
        title: "Suporte de TI",
        description:
          "Suporte técnico remoto e presencial para manter sua infraestrutura, computadores e redes sempre funcionando.",
      },
      {
        title: "Serviços Elétricos",
        description:
          "Instalação e manutenção elétrica predial e industrial com equipe certificada e materiais de alto padrão.",
      },
    ],
  },

  enterprise: {
    badge: "Para empresas",
    title: "Soluções Corporativas",
    subtitle:
      "Contratos de suporte e projetos de TI para empresas de todos os portes — do escritório à multinacional",
    tiers: [
      {
        name: "Essencial",
        desc: "Para pequenas e médias empresas",
        features: [
          "Suporte remoto",
          "Manutenção preventiva mensal",
          "Gestão de chamados via sistema",
          "Tempo de resposta definido em contrato",
        ],
        cta: "Solicitar proposta",
        highlighted: false,
      },
      {
        name: "Profissional",
        desc: "Para empresas com demanda crítica de TI",
        features: [
          "Suporte remoto + presencial",
          "Monitoramento proativo",
          "Prioridade no atendimento",
          "Relatório mensal de TI",
          "Tempo de resposta prioritário",
        ],
        cta: "Solicitar proposta",
        highlighted: true,
      },
      {
        name: "Enterprise",
        desc: "Para multinacionais e grandes corporações",
        features: [
          "Equipe dedicada",
          "Monitoramento 24/7",
          "Contrato formal personalizado",
          "Assinatura de NDA disponível",
          "Reuniões de alinhamento mensais",
          "Atendimento prioritário garantido",
        ],
        cta: "Solicitar proposta",
        highlighted: false,
      },
    ],
    note: "Todos os planos incluem contrato formal. Escopo e condições definidos conforme necessidade de cada cliente.",
  },

  product: {
    badge: "Nossos Produtos",
    title: "Só a Safe tem.",
    subtitle:
      "Desenvolvemos nossas próprias soluções para resolver problemas que o mercado ainda não resolveu.",
    whyTitle: "Por que o PorteiroBot?",
    howTitle: "Como funciona",
    cta: "Conhecer o PorteiroBot →",
    features: [
      "Notificação direto no WhatsApp do morador",
      "QR Code na portaria — sem aplicativo necessário",
      "Entrega só acontece com autorização prévia",
      "Painel multi-condomínio em uma única conta",
    ],
    steps: [
      {
        label: "Entregador chega",
        description:
          "Escaneia o QR Code ou acessa o link do condomínio pelo celular",
      },
      {
        label: "Localiza o morador",
        description: "Busca por número do apartamento ou nome do morador",
      },
      {
        label: "Morador autoriza",
        description:
          "Recebe a notificação no WhatsApp e libera a entrada pelo celular",
      },
    ],
  },

  about: {
    title: "Por que empresas escolhem a SafeVisionBR?",
    subtitle:
      "Mais de 5 anos entregando soluções de TI com SLA definido para empresas em São Paulo.",
    location: "São Paulo, SP · Desde 2020",
    cardTitle1: "Tecnologia que garante",
    cardTitle2: "continuidade operacional.",
    cardDesc:
      "Combinamos expertise técnica com atendimento corporativo para entregar soluções sob medida — do cabeamento estruturado ao suporte TI gerenciado com SLA.",
    features: [
      {
        title: "SLA garantido",
        text: "Tempo de resposta definido em contrato",
      },
      {
        title: "Equipe certificada",
        text: "Técnicos com certificações Dell, Cisco e Ubiquiti",
      },
      {
        title: "Equipamentos enterprise",
        text: "Marcas líderes do mercado global",
      },
    ],
    statsLabel: "Nossos números",
    stats: [
      { suffix: "+", label: "Empresas atendidas" },
      { suffix: "/7", label: "Suporte" },
      { suffix: "+", label: "Anos de mercado" },
      { suffix: "%", label: "Satisfação" },
    ],
    statsCaption:
      "Resultados consistentes para empresas em toda a Grande São Paulo",
    googleLabel: "Google Reviews",
    googleCaption: "Baseado em avaliações reais de clientes no Google Maps",
    whatsappTitle: "Proposta corporativa",
    whatsappDesc: "Envie o projeto e receba uma proposta formal com SLA",
    whatsappCta: "Solicitar proposta →",
  },

  faq: {
    title: "Perguntas frequentes",
    subtitle:
      "Principais dúvidas sobre nossos serviços. Para contratos corporativos, nossa equipe está disponível para uma reunião.",
    ctaText: "Ainda tem dúvidas? Nossa equipe está à disposição.",
    ctaBtn: "Falar com um especialista",
    items: [
      {
        question: "Qual é a área de atendimento?",
        answer:
          "Atendemos São Paulo e toda a Grande São Paulo, incluindo ABC Paulista, Guarulhos, Osasco, Barueri e região. Para contratos corporativos com múltiplos endereços ou multinacionais, avaliamos a estrutura sob medida.",
      },
      {
        question: "O orçamento é gratuito?",
        answer:
          "Sim, totalmente gratuito e sem compromisso. Para contratos corporativos, preparamos uma proposta técnica detalhada após uma reunião de levantamento de escopo.",
      },
      {
        question: "Vocês atendem multinacionais e empresas de grande porte?",
        answer:
          "Sim. Temos experiência em contratos corporativos para multinacionais com escritórios em São Paulo. Oferecemos SLA formal, relatórios periódicos e assinatura de NDA quando necessário.",
      },
      {
        question: "Vocês oferecem SLA garantido?",
        answer:
          "Sim. Nossos contratos de suporte corporativo incluem SLA formal com tempo de resposta e resolução definidos — de 1h a 4h dependendo do plano. O SLA está previsto em contrato e pode incluir penalidades por descumprimento.",
      },
      {
        question: "Quanto tempo leva a instalação?",
        answer:
          "Depende do porte do projeto. Instalações simples são concluídas no mesmo dia. Projetos corporativos — infraestrutura de rede, CFTV, cabeamento — são planejados em etapas com cronograma formal na proposta.",
      },
      {
        question: "Qual é a garantia dos serviços?",
        answer:
          "Todos os serviços têm garantia de 12 meses em mão de obra e materiais. Para contratos de suporte, a cobertura é contínua enquanto o contrato estiver ativo.",
      },
      {
        question: "Como funciona o contrato de suporte corporativo?",
        answer:
          "Contratos mensais com escopo definido: suporte remoto e/ou presencial, monitoramento proativo, visitas preventivas e relatório mensal. Temos planos Essencial, Profissional e Enterprise, além de contratos 100% customizados.",
      },
      {
        question: "Vocês firmam NDA (acordo de confidencialidade)?",
        answer:
          "Sim. Para contratos corporativos, especialmente com multinacionais, estamos habituados a assinar acordos de confidencialidade (NDA) antes do início dos trabalhos ou do levantamento técnico.",
      },
      {
        question: "Como solicitar uma proposta corporativa?",
        answer:
          "Entre em contato via e-mail ou WhatsApp descrevendo o escopo — tipo de serviço, quantidade de unidades/usuários e expectativa de SLA. Nossa equipe prepara uma proposta técnica formal em até 24h úteis.",
      },
    ],
  },

  contact: {
    title: "Entre em Contato",
    subtitle:
      "Fale com nossa equipe e receba uma proposta técnica personalizada para o seu projeto corporativo.",
    cards: [
      {
        title: "Telefone",
        subtitle: "Ligação direta ou WhatsApp",
        value: "+55 (11) 963561680",
        href: "tel:+5511963561680",
      },
      {
        title: "E-mail corporativo",
        subtitle: "Propostas e contratos formais",
        value: "contato@safevisionbr.com.br",
        href: "mailto:contato@safevisionbr.com.br",
      },
      {
        title: "Resposta em 24h",
        subtitle: "Proposta formal garantida para empresas",
        value: "Para contratos corporativos",
        href: null,
      },
    ],
    cta: "Solicitar Proposta Corporativa",
  },

  footer: {
    services: [
      "Câmeras de Segurança",
      "Redes Corporativas",
      "Sonorização Ambiente",
      "Monitoramento 24/7",
      "Controle de Acesso",
      "WiFi Corporativo",
    ],
    privacy: "Política de Privacidade",
    terms: "Termos de Uso",
    copyright:
      "© 2025 Safe Vision BR – Soluções de Tecnologia Ltda. · Todos os direitos reservados.",
  },
};
