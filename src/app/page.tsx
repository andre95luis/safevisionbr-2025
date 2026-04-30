import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <AboutSection />
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
