"use client";

import { createContext, useContext, useState } from "react";
import { pt } from "@/i18n/pt";
import { en } from "@/i18n/en";
import type { Dict } from "@/i18n/types";

export type Locale = "pt" | "en";

interface LanguageContextType {
  locale: Locale;
  t: Dict;
  setLocale: (l: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "pt",
  t: pt,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");
  const t = locale === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
