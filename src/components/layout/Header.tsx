"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

const navLinks = [
  { label: "Início", id: "home" },
  { label: "Serviços", id: "services" },
  { label: "Sobre", id: "about" },
  { label: "FAQ", id: "faq" },
  { label: "Contato", id: "contact" },
];

export default function Header() {
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

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-cyan-500/20 whitespace-nowrap"
            >
              Solicitar orçamento →
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

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-white hover:text-cyan-400 transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
