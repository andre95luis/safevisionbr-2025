import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/providers/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://safevisionbr.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Safe Vision BR | Segurança Eletrônica, WiFi Mesh e Automação IoT em São Paulo",
    template: "%s | Safe Vision BR",
  },
  description:
    "Câmeras de segurança, cabeamento estruturado, WiFi Mesh e automação IoT em São Paulo. Mais de 100 projetos realizados. Atendimento em até 2h. Solicite seu orçamento gratuito.",
  keywords: [
    "segurança eletrônica São Paulo",
    "cabeamento estruturado",
    "wifi mesh empresarial",
    "automação IoT",
    "suporte TI São Paulo",
    "câmeras de segurança",
    "alarmes residenciais",
    "monitoramento 24h",
    "instalação CFTV",
    "redes corporativas",
    "SafeVisionBR",
    "segurança eletrônica empresa",
  ],
  authors: [{ name: "SafeVisionBR", url: siteUrl }],
  creator: "SafeVisionBR",
  publisher: "SafeVisionBR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Safe Vision BR",
    title:
      "Safe Vision BR | Segurança Eletrônica, WiFi Mesh e Automação IoT em São Paulo",
    description:
      "Câmeras de segurança, cabeamento estruturado, WiFi Mesh e automação IoT em São Paulo. Mais de 100 projetos realizados. Solicite seu orçamento gratuito.",
    images: [
      {
        url: "/Logo Safe Vision-png-menor-branco-03.png",
        width: 400,
        height: 160,
        alt: "Safe Vision BR - Segurança Eletrônica e Automação IoT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Vision BR | Segurança Eletrônica e Automação IoT em São Paulo",
    description:
      "Câmeras de segurança, cabeamento estruturado, WiFi Mesh e automação IoT em São Paulo. Mais de 100 projetos. Atendimento em até 2h.",
    images: ["/Logo Safe Vision-png-menor-branco-03.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "Safe Vision BR",
  description:
    "Especialistas em Cabeamento Estruturado, WiFi Mesh, Segurança Eletrônica, Automação IoT, Suporte de TI e Serviços Elétricos em São Paulo.",
  url: siteUrl,
  telephone: "+55-11-96356-1680",
  email: "contato@safevisionbr.com.br",
  image: `${siteUrl}/Logo Safe Vision-png-menor-branco-03.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: ["https://api.whatsapp.com/send/?phone=5511963561680"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Tecnologia e Segurança",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cabeamento Estruturado",
          description:
            "Infraestrutura de rede profissional para empresas e residências com padrões internacionais.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WiFi Mesh e Automação IoT",
          description:
            "Cobertura sem fio total com tecnologia mesh e dispositivos conectados para ambientes inteligentes e eficientes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Segurança Eletrônica",
          description:
            "Sistemas completos de câmeras, alarmes e monitoramento 24h.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Projetos de Sonorização",
          description:
            "Manutenção, readequações e projetos de sonorização para igrejas, lojas e grandes eventos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Suporte de TI",
          description:
            "Contratos de suporte técnico especializado para manter sua tecnologia sempre funcionando.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Serviços Elétricos",
          description:
            "Instalação e manutenção elétrica predial e residencial com equipe certificada.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
