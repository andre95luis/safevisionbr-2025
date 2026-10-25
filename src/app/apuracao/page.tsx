import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ElectionResults from "@/components/ElectionResults";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import EnterpriseSection from "@/components/sections/EnterpriseSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductSection from "@/components/sections/ProductSection";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Apuração ao vivo — 2º turno 2026",
  description:
    "Acompanhe ao vivo a apuração do 2º turno das eleições presidenciais de 2026, com dados oficiais do TSE. Enquanto isso, conheça as soluções da Safe Vision BR.",
  robots: { index: false },
};

export default function ApuracaoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Header />
      <main>
        <ElectionResults />
        <TrustBar />
        <ServicesSection />
        <EnterpriseSection />
        <AboutSection />
        <ProductSection />
        <ProjectsCarousel />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
