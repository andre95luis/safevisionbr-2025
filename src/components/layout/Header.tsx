"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, LifeBuoy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_LINK } from "@/lib/data";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Locale } from "@/providers/LanguageProvider";

function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const flags: { code: Locale; flag: string; label: string }[] = [
    { code: "pt", flag: "🇧🇷", label: "PT" },
    { code: "en", flag: "🇺🇸", label: "EN" },
  ];

  return (
    <div className="flex items-center gap-0.5 bg-slate-800/60 border border-slate-700/50 rounded-full px-1 py-1">
      {flags.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full transition-all duration-200 ${
            locale === code
              ? "bg-cyan-500 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
          aria-label={`Switch to ${label}`}
        >
          <span className="text-sm leading-none">{flag}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Navegação principal">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center"
            aria-label="Ir para o início"
          >
            <Image
              src="/Logo Safe Vision-png-menor-branco-03.png"
              alt="Safe Vision BR"
              width={200}
              height={64}
              className="h-8 md:h-16 w-auto"
              style={{ width: "auto" }}
              priority
            />
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {t.header.nav.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-white hover:text-cyan-400 transition-colors text-sm"
              >
                {label}
              </button>
            ))}
            <a
              href="https://meajuda.safevisionbr.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 text-sm transition-colors whitespace-nowrap"
            >
              <LifeBuoy className="w-4 h-4" />
              {t.header.ticket}
            </a>
            <LanguageSwitcher />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-cyan-500/20 whitespace-nowrap"
            >
              {t.header.cta}
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-slate-800 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-4 pt-4 pb-4">
                {t.header.nav.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-white hover:text-cyan-400 transition-colors text-left"
                  >
                    {label}
                  </button>
                ))}
                <a
                  href="https://meajuda.safevisionbr.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 text-sm transition-colors"
                >
                  <LifeBuoy className="w-4 h-4" />
                  {t.header.ticket}
                </a>
                <div className="pt-1">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
