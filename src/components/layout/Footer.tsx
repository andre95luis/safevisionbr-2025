import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-2">
      <div className="container mx-auto px-2 text-center">
        <div className="flex items-center justify-center mb-2">
          <Image
            src="/Logo Safe Vision-png-menor-branco-03.png"
            alt="Safe Vision BR"
            width={160}
            height={80}
            className="h-14 md:h-20 w-auto"
            style={{ width: "auto" }}
          />
        </div>
        <p className="text-slate-400 text-sm mb-2">
          Soluções de tecnologia para um futuro mais seguro e conectado.
        </p>
        <p className="text-slate-500 text-sm">
          © 2025 SafeVisionBR. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
