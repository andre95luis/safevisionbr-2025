import type { Dict } from "./types";

export const en: Dict = {
  header: {
    nav: [
      { label: "Home", id: "home" },
      { label: "Services", id: "services" },
      { label: "Corporate", id: "enterprise" },
      { label: "Products", id: "produto" },
      { label: "About", id: "about" },
      { label: "FAQ", id: "faq" },
      { label: "Contact", id: "contact" },
    ],
    ticket: "Open a ticket",
    cta: "Request a quote →",
  },

  hero: {
    badge: "5.0 on Google · Over a decade of experience",
    headline1: "Full-scope technology.",
    headline2: "For any environment.",
    subheadline:
      "Security cameras, IT support, WiFi, electrical and IoT automation — custom projects for any environment.",
    trustPoints: [
      "Custom projects from start to finish",
      "In-house certified team",
      "24/7 monitoring & support",
      "From schools to multinationals",
    ],
    ctaPrimary: "Request a proposal",
    ctaSecondary: "View our work",
    scrollLabel: "View services",
  },

  trustBar: {
    label: "We work with industry-leading brands:",
  },

  services: {
    title: "Our Services",
    subtitle:
      "End-to-end technology solutions for businesses of all sizes — from corporate offices to industrial facilities.",
    ctaTitle: "Need a custom solution?",
    ctaDesc:
      "Our specialized team is ready to design the ideal solution for your company's IT and security needs.",
    ctaBtn: "Consult Our Specialists",
    items: [
      {
        title: "Structured Cabling",
        description:
          "Professional network infrastructure for any scale — fiber optic, Cat6A, rack installation, and full certified documentation.",
      },
      {
        title: "WiFi Mesh & Networking",
        description:
          "Full wireless coverage with mesh technology, managed routers and switches for environments of any size.",
      },
      {
        title: "Electronic Security",
        description:
          "CCTV, access control, alarms and electric fences for residences, schools, churches, condominiums and businesses.",
      },
      {
        title: "24/7 Remote Monitoring",
        description:
          "Continuous monitoring center with immediate response to alarms, cameras, and security events — protection that never sleeps.",
      },
      {
        title: "Sound Systems",
        description:
          "Professional audio design and installation for churches, gyms, retail spaces, corporate offices, and large events.",
      },
      {
        title: "IT Support",
        description:
          "Remote and on-site technical support to keep your infrastructure, computers, and networks running at full capacity.",
      },
      {
        title: "Electrical Services",
        description:
          "Commercial and industrial electrical installation and maintenance by a certified team using premium materials.",
      },
    ],
  },

  enterprise: {
    badge: "For businesses",
    title: "Corporate Solutions",
    subtitle:
      "IT support contracts and technology projects for businesses of all sizes — from offices to multinationals",
    tiers: [
      {
        name: "Essential",
        desc: "For small and medium businesses",
        features: [
          "Remote support",
          "Monthly preventive maintenance",
          "Ticket management system",
          "Response time defined per contract",
        ],
        cta: "Request proposal",
        highlighted: false,
      },
      {
        name: "Professional",
        desc: "For businesses with critical IT demands",
        features: [
          "Remote + on-site support",
          "Proactive monitoring",
          "Priority response",
          "Monthly IT report",
          "Priority response time",
        ],
        cta: "Request proposal",
        highlighted: true,
      },
      {
        name: "Enterprise",
        desc: "For multinationals and large corporations",
        features: [
          "Dedicated team",
          "24/7 monitoring",
          "Fully customized formal contract",
          "NDA signing available",
          "Monthly alignment meetings",
          "Guaranteed priority response",
        ],
        cta: "Request proposal",
        highlighted: false,
      },
    ],
    note: "All plans include a formal contract. Scope and terms defined to match each client's specific needs.",
  },

  product: {
    badge: "Our Products",
    title: "Only Safe has it.",
    subtitle:
      "Problems no one solved? We turned them into products.",
    items: [
      {
        name: "PorteiroBot",
        tagline: "Digital doorman for condominiums",
        features: [
          "Direct WhatsApp notification to the resident",
          "QR Code at the entrance — no app required",
          "Delivery only with prior authorization",
          "Multi-building panel",
        ],
        cta: "Discover PorteiroBot →",
        url: "https://porteirobot.safevisionbr.com.br",
      },
      {
        name: "Agenda Pra Mim",
        tagline: "Space booking without conflicts",
        features: [
          "Automatically detects occupied time slots",
          "One-tap email approval",
          "Centralized multi-location management",
          "Works on any smartphone",
        ],
        cta: "Discover Agenda Pra Mim →",
        url: "https://agendapramim.safevisionbr.com.br",
      },
      {
        name: "Cota Pra Mim",
        tagline: "Professional quotes by voice with AI",
        features: [
          "Speak the quote and AI builds the PDF",
          "Document ready in under 30 seconds",
          "Share directly via WhatsApp",
          "Free plan to get started",
        ],
        cta: "Discover Cota Pra Mim →",
        url: "https://cotapramim.safevisionbr.com.br",
      },
    ],
  },

  about: {
    title: "You don't just want technology. You want a real partner.",
    subtitle:
      "Years of delivering managed IT solutions with defined SLA for businesses in São Paulo.",
    location: "São Paulo, SP · Since 2020",
    cardTitle1: "Technology that ensures",
    cardTitle2: "operational continuity.",
    cardDesc:
      "We combine technical expertise with corporate-level service to deliver tailored solutions — from structured cabling to fully managed IT support with SLA.",
    features: [
      {
        title: "Guaranteed SLA",
        text: "Response time defined in the contract",
      },
      {
        title: "Certified team",
        text: "Dell, Cisco and Ubiquiti certified technicians",
      },
      {
        title: "Enterprise-grade equipment",
        text: "Industry-leading global brands",
      },
    ],
    statsLabel: "Our numbers",
    stats: [
      { suffix: "+", label: "Businesses served" },
      { suffix: "/7", label: "Support" },
      { suffix: "+", label: "Years in market" },
      { suffix: "%", label: "Satisfaction" },
    ],
    statsCaption: "Consistent results for businesses across Greater São Paulo",
    googleLabel: "Google Reviews",
    googleCaption: "Based on verified customer reviews on Google Maps",
    whatsappTitle: "Corporate proposal",
    whatsappDesc: "Send your project and receive a formal proposal with SLA",
    whatsappCta: "Request proposal →",
  },

  faq: {
    title: "Frequently asked questions",
    subtitle:
      "Key questions about our services. For corporate contracts, our team is available for a meeting.",
    ctaText: "Still have questions? Our team is available.",
    ctaBtn: "Talk to a specialist",
    items: [
      {
        question: "What is your service area?",
        answer:
          "We serve São Paulo and Greater São Paulo, including ABC Paulista, Guarulhos, Osasco, Barueri, and the surrounding area. For corporate contracts with multiple locations or multinationals, we evaluate the structure on a case-by-case basis.",
      },
      {
        question: "Is the quote free?",
        answer:
          "Yes, completely free and no commitment required. For corporate contracts, we prepare a detailed technical proposal after an initial scoping meeting.",
      },
      {
        question: "Do you serve multinationals and large enterprises?",
        answer:
          "Yes. We have experience with corporate contracts for multinationals with offices in São Paulo. We offer formal SLA, periodic reports, and NDA signing when required.",
      },
      {
        question: "Do you offer guaranteed SLA?",
        answer:
          "Yes. Our corporate support contracts include a formal SLA with defined response and resolution times — from 1 to 4 hours depending on the plan. The SLA is built into the contract and can include penalty clauses for non-compliance.",
      },
      {
        question: "How long does installation take?",
        answer:
          "It depends on the project scale. Simple installations are completed the same day. Corporate projects — network infrastructure, CCTV, cabling — are planned in phases with a formal timeline defined in the proposal.",
      },
      {
        question: "What is the warranty on services?",
        answer:
          "All services carry a 12-month warranty on both labor and materials. For support contracts, coverage is continuous for the duration of the active contract.",
      },
      {
        question: "How does the corporate support contract work?",
        answer:
          "Monthly contracts with defined scope: remote and/or on-site support, proactive monitoring, preventive visits, and a monthly report. We offer Essential, Professional, and Enterprise plans, as well as fully custom contracts for large organizations.",
      },
      {
        question: "Do you sign NDAs (non-disclosure agreements)?",
        answer:
          "Yes. For corporate contracts, especially with multinationals, we are accustomed to signing non-disclosure agreements before beginning work or conducting technical assessments.",
      },
      {
        question: "How do I request a corporate proposal?",
        answer:
          "Contact us by email or WhatsApp describing the scope — service type, number of locations/users, and expected SLA. Our team prepares a formal technical proposal within 24 business hours.",
      },
    ],
  },

  contact: {
    title: "Get in Touch",
    subtitle:
      "Talk to our team and receive a customized technical proposal for your corporate project.",
    cards: [
      {
        title: "Phone",
        subtitle: "Direct call or WhatsApp",
        value: "+55 (11) 963561680",
        href: "tel:+5511963561680",
      },
      {
        title: "Corporate email",
        subtitle: "Formal proposals and contracts",
        value: "contato@safevisionbr.com.br",
        href: "mailto:contato@safevisionbr.com.br",
      },
      {
        title: "Response within 24h",
        subtitle: "Guaranteed formal response for businesses",
        value: "For corporate contracts",
        href: null,
      },
    ],
    cta: "Request Corporate Proposal",
  },

  footer: {
    services: [
      "Security Cameras",
      "Corporate Networks",
      "Ambient Sound",
      "24/7 Monitoring",
      "Access Control",
      "Corporate WiFi",
    ],
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    copyright:
      "© 2025 Safe Vision BR – Technology Solutions Ltd. · All rights reserved.",
  },
};
