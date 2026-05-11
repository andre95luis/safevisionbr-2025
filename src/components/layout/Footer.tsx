import Image from "next/image";
import Link from "next/link";

const services = [
  "Câmeras de Segurança",
  "Redes de Computadores",
  "Sonorização Ambiente",
  "Monitoramento",
  "Central de Alarmes",
  "WiFi Corporativo",
];

export default function Footer() {
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
          {services.map((service, i) => (
            <span key={service} className="flex items-center gap-3">
              <span className="text-slate-400 text-sm">{service}</span>
              {i < services.length - 1 && (
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
            Política de Privacidade
          </Link>
          <span className="text-slate-700 text-xs">·</span>
          <Link
            href="/termos-de-uso"
            className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
          >
            Termos de Uso
          </Link>
        </div>

        <p className="text-slate-600 text-xs">
          © 2025 Safe Vision BR – Soluções de Tecnologia Ltda. · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
