"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/providers/LanguageProvider";

const brands = [
  "Dell", "Lenovo", "ThinkPad", "Unifi", "Axis", "Dahua", "Hikvision",
  "Ubiquiti", "Hilook", "D-Link", "Huawei", "Motorola Security", "Asus IoT",
  "Ezaka", "JL Protec", "Condutti", "Furukawa", "Deko", "Xelpon", "TWG",
  "Morey", "Haiz", "Daisa", "Tramontina", "Steck", "WEG", "Schneider",
  "Sil", "Prysmian", "Elgin", "Baterias Moura", "Margirius",
];

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-slate-800/60 bg-slate-900/30 py-6 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-400 text-xs font-medium tracking-widest uppercase mb-5">
          {t.trustBar.label}
        </p>

        <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-10 shrink-0 pr-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-slate-500 font-semibold text-sm whitespace-nowrap tracking-wide hover:text-slate-300 transition-colors"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
