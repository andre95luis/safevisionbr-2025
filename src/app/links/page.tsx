import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Star, ExternalLink, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "SafeVisionBR — Links",
  description:
    "Câmeras, alarmes, redes e TI com nota 5.0 no Google. Fale agora com a SafeVisionBR.",
  robots: { index: false },
};

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511963561680&text=Ol%C3%A1!%20Vim%20pelo%20cart%C3%A3o%20de%20visita%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.&type=phone_number&app_absent=0";

// ⚠️ Substitua pelo link direto do Google Meu Negócio / Google Maps da empresa
const GOOGLE_REVIEWS =
  "https://www.google.com/maps/search/safevisionbr+sao+paulo";

const socialLinks = [
  {
    label: "Instagram",
    sublabel: "Veja projetos reais — @safevisionbr",
    href: "https://instagram.com/safevisionbr",
    border: "border-pink-500/30 hover:border-pink-400/60",
    bg: "hover:bg-pink-500/10",
    iconBg: "bg-gradient-to-br from-pink-500/20 to-orange-500/20",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    sublabel: "Novidades e promoções",
    href: "https://facebook.com/safevisionbr",
    border: "border-blue-500/30 hover:border-blue-400/60",
    bg: "hover:bg-blue-500/10",
    iconBg: "bg-blue-500/20",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-400">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Avaliações no Google",
    sublabel: "Por que clientes recomendam a SafeVisionBR",
    href: GOOGLE_REVIEWS,
    border: "border-yellow-500/30 hover:border-yellow-400/60",
    bg: "hover:bg-yellow-500/10",
    iconBg: "bg-yellow-500/20",
    external: true,
    icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />,
  },
  {
    label: "+55 (11) 96356-1680",
    sublabel: "Toque para ligar",
    href: "tel:+5511963561680",
    border: "border-slate-600/40 hover:border-slate-400/60",
    bg: "hover:bg-slate-700/30",
    iconBg: "bg-slate-700/50",
    external: false,
    icon: <Phone className="w-6 h-6 text-slate-300" />,
  },
  {
    label: "contato@safevisionbr.com.br",
    sublabel: "Para orçamentos e propostas",
    href: "mailto:contato@safevisionbr.com.br",
    border: "border-slate-600/40 hover:border-slate-400/60",
    bg: "hover:bg-slate-700/30",
    iconBg: "bg-slate-700/50",
    external: false,
    icon: <Mail className="w-6 h-6 text-slate-300" />,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-sm flex flex-col items-center gap-5">

        {/* Logo */}
        <Image
          src="/Logo Safe Vision-png-menor-branco-03.png"
          alt="Safe Vision BR"
          width={280}
          height={100}
          className="h-20 w-auto"
          style={{ width: "auto" }}
          priority
        />

        {/* Tagline */}
        <div className="text-center">
          <p className="text-white font-bold text-base leading-snug mb-1">
            A empresa que resolve tudo em tecnologia.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Câmeras, alarmes, redes, elétrica e suporte de TI —
            do residencial ao corporativo. Fale agora e resolva hoje.
          </p>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full px-3 py-1.5 text-xs text-slate-300">
            <span className="text-yellow-400">★★★★★</span>
            <span>Nota 5.0 no Google</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full px-3 py-1.5 text-xs text-slate-300">
            <MapPin className="w-3 h-3 text-cyan-400" />
            <span>São Paulo e Grande SP</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full px-3 py-1.5 text-xs text-slate-300">
            <Clock className="w-3 h-3 text-green-400" />
            <span>Resposta em minutos</span>
          </div>
        </div>

        {/* WhatsApp — botão hero */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center gap-4 rounded-2xl bg-green-500 hover:bg-green-400 px-5 py-4 transition-all duration-200 active:scale-95 shadow-lg shadow-green-500/20"
        >
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.594z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Falar pelo WhatsApp</p>
            <p className="text-green-100/80 text-xs">Respondemos em minutos · Clique aqui</p>
          </div>
          <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors shrink-0" />
        </a>

        {/* Divisor */}
        <div className="flex items-center gap-3 w-full">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-slate-600 text-xs">ou acesse</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* Links secundários */}
        <div className="w-full flex flex-col gap-3">
          {socialLinks.map(({ label, sublabel, href, border, bg, iconBg, external, icon }) => (
            <a
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`group flex items-center gap-4 w-full rounded-2xl border ${border} ${bg} bg-slate-800/30 px-4 py-4 transition-all duration-200 active:scale-95`}
            >
              <div className={`${iconBg} w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm truncate">{label}</p>
                <p className="text-slate-500 text-xs truncate">{sublabel}</p>
              </div>
              {external && (
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors shrink-0" />
              )}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-2 flex flex-col items-center gap-1">
          <a
            href="https://safevisionbr.com.br"
            className="text-slate-600 text-xs hover:text-slate-400 transition-colors"
          >
            safevisionbr.com.br
          </a>
        </div>

      </div>
    </main>
  );
}
