import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

const faviconSvg =
  "data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 100 100%22%3E%3Cdefs%3E%3Cmask id%3D%22segments%22%3E%3Crect width%3D%22100%22 height%3D%22100%22 fill%3D%22white%22%2F%3E%3Cg fill%3D%22black%22%3E%3Cpath d%3D%22M50 10 L60 30 L40 30 Z%22%2F%3E%3Cpath d%3D%22M90 50 L70 40 L70 60 Z%22%2F%3E%3Cpath d%3D%22M50 90 L40 70 L60 70 Z%22%2F%3E%3Cpath d%3D%22M10 50 L30 60 L30 40 Z%22%2F%3E%3Cpath d%3D%22M73 27 L63 37 L83 37 Z%22%2F%3E%3Cpath d%3D%22M73 73 L83 63 L63 63 Z%22%2F%3E%3Cpath d%3D%22M27 73 L37 63 L37 83 Z%22%2F%3E%3Cpath d%3D%22M27 27 L37 37 L17 37 Z%22%2F%3E%3C%2Fg%3E%3C%2Fmask%3E%3C%2Fdefs%3E%3Ccircle cx%3D%2250%22 cy%3D%2250%22 r%3D%2245%22 fill%3D%22%23000%22 mask%3D%22url(%23segments)%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2250%22 r%3D%2220%22 fill%3D%22%23fff%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2250%22 r%3D%2216%22 fill%3D%22%234A90E2%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2250%22 r%3D%228%22 fill%3D%22%23000%22%2F%3E%3Ccircle cx%3D%2253%22 cy%3D%2246%22 r%3D%222%22 fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Safe Vision BR | Segurança Eletrônica, WiFi Mesh e Automação IoT em São Paulo",
    template: "%s | Safe Vision BR",
  },
  description:
    "Especialistas em Cabeamento Estruturado, WiFi Mesh, Segurança Eletrônica, Automação IoT, Suporte de TI e Serviços Elétricos em São Paulo. Atendimento 24h, mais de 100 projetos realizados.",
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
      "Especialistas em Cabeamento Estruturado, WiFi Mesh, Segurança Eletrônica, Automação IoT, Suporte de TI e Serviços Elétricos em São Paulo.",
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
      "Especialistas em Cabeamento Estruturado, WiFi Mesh, Segurança Eletrônica, Automação IoT, Suporte de TI e Serviços Elétricos em São Paulo.",
    images: ["/Logo Safe Vision-png-menor-branco-03.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      {
        url: faviconSvg,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
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
          name: "WiFi Mesh",
          description:
            "Cobertura total de internet sem fio com tecnologia mesh para conectividade perfeita.",
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
          name: "Automação IoT",
          description:
            "Casa e empresa inteligentes com dispositivos conectados para máximo conforto.",
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
