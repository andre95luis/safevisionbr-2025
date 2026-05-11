import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso | Safe Vision BR",
  description:
    "Leia os Termos de Uso do site safevisionbr.com.br. Ao navegar, você concorda com as condições de uso estabelecidas pela Safe Vision BR.",
  alternates: {
    canonical: "https://safevisionbr.com.br/termos-de-uso",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao acessar e utilizar o site safevisionbr.com.br, você concorda com estes Termos de Uso. Caso não concorde com alguma disposição, recomendamos que não utilize este site.

Estes termos são regidos pela legislação brasileira, em especial pelo Código de Defesa do Consumidor (Lei nº 8.078/1990), pelo Marco Civil da Internet (Lei nº 12.965/2014) e pela LGPD (Lei nº 13.709/2018).`,
  },
  {
    title: "2. Sobre o Site e os Serviços",
    content: `Este site é operado pela Safe Vision BR — Soluções de Tecnologia Ltda., empresa especializada em:

• Segurança eletrônica (câmeras CFTV, alarmes e monitoramento)
• Cabeamento estruturado e infraestrutura de redes
• WiFi Mesh corporativo e residencial
• Automação IoT
• Suporte de TI e serviços elétricos

As informações publicadas têm caráter exclusivamente informativo e não constituem contrato de prestação de serviços. O estabelecimento de qualquer relação contratual depende de proposta formal aceita por ambas as partes.`,
  },
  {
    title: "3. Uso Adequado",
    content: `Ao utilizar este site, você se compromete a:

• Não utilizar o site para fins ilícitos ou que violem direitos de terceiros;
• Não tentar acessar áreas restritas ou realizar ataques ao sistema;
• Não reproduzir, distribuir ou modificar o conteúdo sem autorização prévia e por escrito;
• Fornecer informações verdadeiras ao entrar em contato conosco.`,
  },
  {
    title: "4. Propriedade Intelectual",
    content: `Todo o conteúdo deste site — incluindo textos, imagens, logotipos, marcas, layout e código-fonte — é de propriedade exclusiva da Safe Vision BR ou de seus licenciantes, estando protegido pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 9.279/1996 (Propriedade Industrial).

É vedada qualquer reprodução, cópia ou uso comercial sem autorização expressa e por escrito.`,
  },
  {
    title: "5. Links Externos",
    content: `Este site pode conter links para sites de terceiros (como WhatsApp e Instagram). A Safe Vision BR não se responsabiliza pelo conteúdo, políticas ou práticas desses sites externos, e recomenda que você leia os termos e políticas de cada plataforma antes de utilizá-la.`,
  },
  {
    title: "6. Limitação de Responsabilidade",
    content: `A Safe Vision BR empenha-se em manter as informações do site precisas e atualizadas, mas não garante a ausência de erros ou a disponibilidade ininterrupta do site.

Não nos responsabilizamos por:
• Danos decorrentes do uso ou impossibilidade de uso do site;
• Decisões tomadas com base exclusivamente nas informações publicadas;
• Falhas técnicas, interrupções ou indisponibilidades causadas por terceiros (provedores de internet, infraestrutura de hospedagem, etc.).`,
  },
  {
    title: "7. Privacidade e Dados Pessoais",
    content: `O tratamento de dados pessoais coletados por meio deste site é regido pela nossa Política de Privacidade, disponível em safevisionbr.com.br/politica-de-privacidade, em conformidade com a LGPD.`,
  },
  {
    title: "8. Alterações nos Termos",
    content: `Estes Termos podem ser atualizados a qualquer momento. A versão vigente estará sempre disponível nesta página, com a data de última atualização indicada abaixo. O uso continuado do site após alterações constitui aceite das novas condições.`,
  },
  {
    title: "9. Foro e Legislação Aplicável",
    content: `Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir qualquer controvérsia decorrente deste instrumento, fica eleito o foro da Comarca de São Paulo — SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`,
  },
  {
    title: "10. Contato",
    content: `Para dúvidas ou solicitações relacionadas a estes Termos:

E-mail: contato@safevisionbr.com.br
Telefone: +55 (11) 96356-1680`,
  },
];

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="container mx-auto px-6 py-24 max-w-3xl">
        <div className="mb-10">
          <Link
            href="/"
            className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Termos de Uso
        </h1>
        <p className="text-slate-400 text-sm mb-10">
          Última atualização: 11 de maio de 2025
        </p>

        <p className="text-slate-300 mb-10 leading-relaxed">
          Estes Termos de Uso regulam o acesso e a utilização do site{" "}
          <strong className="text-white">safevisionbr.com.br</strong>, operado pela{" "}
          <strong className="text-white">Safe Vision BR — Soluções de Tecnologia Ltda.</strong>, com sede em São Paulo — SP.
        </p>

        <div className="space-y-10">
          {sections.map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
              <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                {content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <Link
            href="/politica-de-privacidade"
            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            Ver também: Política de Privacidade →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
