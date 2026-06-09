"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/Logo Safe Vision-png-menor-branco-03.png"
            alt="Safe Vision BR"
            width={160}
            height={80}
            className="h-14 md:h-20 w-auto"
            style={{ width: "auto" }}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
          {t.footer.services.map((service, i) => (
            <span key={service} className="flex items-center gap-3">
              <span className="text-slate-400 text-sm">{service}</span>
              {i < t.footer.services.length - 1 && (
                <span className="text-slate-700 text-xs">·</span>
              )}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-4">
          <Link
            href="/politica-de-privacidade"
            className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
          >
            {t.footer.privacy}
          </Link>
          <span className="text-slate-700 text-xs">·</span>
          <Link
            href="/termos-de-uso"
            className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
          >
            {t.footer.terms}
          </Link>
        </div>

        <p className="text-slate-600 text-xs">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
