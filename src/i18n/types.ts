export interface NavItem {
  label: string;
  id: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface EnterpriseTier {
  name: string;
  desc: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface ProductStep {
  label: string;
  description: string;
}

export interface AboutFeature {
  title: string;
  text: string;
}

export interface AboutStat {
  suffix: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactCard {
  title: string;
  subtitle: string;
  value: string;
  href: string | null;
}

export interface Dict {
  header: {
    nav: NavItem[];
    ticket: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    subheadline: string;
    trustPoints: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    scrollLabel: string;
  };
  trustBar: {
    label: string;
  };
  services: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    items: ServiceItem[];
  };
  enterprise: {
    badge: string;
    title: string;
    subtitle: string;
    tiers: EnterpriseTier[];
    note: string;
  };
  product: {
    badge: string;
    title: string;
    subtitle: string;
    whyTitle: string;
    howTitle: string;
    cta: string;
    features: string[];
    steps: ProductStep[];
  };
  about: {
    title: string;
    subtitle: string;
    location: string;
    cardTitle1: string;
    cardTitle2: string;
    cardDesc: string;
    features: AboutFeature[];
    statsLabel: string;
    stats: AboutStat[];
    statsCaption: string;
    googleLabel: string;
    googleCaption: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappCta: string;
  };
  faq: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaBtn: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    cards: ContactCard[];
    cta: string;
  };
  footer: {
    services: string[];
    privacy: string;
    terms: string;
    copyright: string;
  };
}
