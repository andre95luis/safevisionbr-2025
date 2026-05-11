import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Safe Vision BR",
  description:
    "Saiba como a Safe Vision BR coleta, usa e protege seus dados pessoais em conformidade com a LGPD — Lei Geral de Proteção de Dados.",
  alternates: {
    canonical: "https://safevisionbr.com.br/politica-de-privacidade",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Quem somos",
    content: `A Safe Vision BR — Soluções de Tecnologia Ltda. é uma empresa especializada em segurança eletrônica, cabeamento estruturado, WiFi Mesh e automação IoT, com sede em São Paulo — SP. Para fins desta Política, somos o Controlador dos dados pessoais coletados por meio deste site.

Contato do responsável: contato@safevisionbr.com.br`,
  },
  {
    title: "2. Quais dados coletamos",
    content: `Coletamos apenas os dados estritamente necessários para prestar nossos serviços:

• Dados de contato: nome, telefone e endereço de e-mail fornecidos voluntariamente ao entrar em contato pelo WhatsApp ou e-mail disponíveis no site.
• Dados de navegação: informações técnicas como endereço IP, tipo de navegador, páginas visitadas e tempo de sessão, coletados automaticamente pelo Vercel Speed Insights para fins de performance.

Não mantemos formulários de cadastro nem coletamos dados sensíveis (CPF, dados bancários, dados de saúde, etc.).`,
  },
  {
    title: "3. Como usamos seus dados",
    content: `Os dados coletados são utilizados exclusivamente para:

• Responder às suas solicitações de orçamento ou suporte;
• Enviar informações sobre nossos serviços quando solicitado;
• Analisar a performance técnica do site e melhorar a experiência do usuário (dados de navegação anonimizados).

Não utilizamos seus dados para marketing não solicitado nem os compartilhamos com terceiros para fins comerciais.`,
  },
  {
    title: "4. Base legal (LGPD)",
    content: `O tratamento dos dados pessoais se fundamenta nas seguintes bases legais previstas na Lei nº 13.709/2018 (LGPD):

• Consentimento (Art. 7º, I): ao nos contatar voluntariamente pelo WhatsApp ou e-mail, você consente com o uso dos dados fornecidos para responder à sua solicitação.
• Legítimo interesse (Art. 7º, IX): para análise de performance técnica do site com dados anonimizados.`,
  },
  {
    title: "5. Compartilhamento de dados",
    content: `Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros, exceto:

• Vercel Inc.: plataforma de hospedagem deste site, que processa dados de navegação anonimizados para fins de performance. A Vercel segue políticas de privacidade compatíveis com a LGPD e o GDPR.
• Autoridades competentes: quando exigido por lei ou ordem judicial.`,
  },
  {
    title: "6. Cookies",
    content: `Este site utiliza apenas cookies técnicos essenciais para o funcionamento adequado das páginas e cookies de performance do Vercel Speed Insights (dados anonimizados). Não utilizamos cookies de rastreamento ou publicidade de terceiros.`,
  },
  {
    title: "7. Retenção de dados",
    content: `Os dados de contato fornecidos por você são mantidos apenas pelo tempo necessário para atender à sua solicitação. Dados de navegação anonimizados são retidos conforme as políticas da Vercel.`,
  },
  {
    title: "8. Seus direitos (LGPD)",
    content: `Em conformidade com a LGPD, você tem direito a:

• Confirmar a existência de tratamento dos seus dados;
• Acessar seus dados pessoais;
• Corrigir dados incompletos, inexatos ou desatualizados;
• Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;
• Revogar o consentimento a qualquer momento;
• Obter informações sobre o compartilhamento de dados.

Para exercer qualquer um desses direitos, entre em contato pelo e-mail: contato@safevisionbr.com.br. Responderemos em até 15 dias úteis.`,
  },
  {
    title: "9. Segurança",
    content: `Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida, incluindo o uso de HTTPS e hospedagem em infraestrutura segura da Vercel.`,
  },
  {
    title: "10. Alterações nesta Política",
    content: `Esta Política pode ser atualizada periodicamente. A data de última atualização é exibida abaixo. Recomendamos que você a revise regularmente.`,
  },
  {
    title: "11. Contato",
    content: `Dúvidas, solicitações ou reclamações sobre esta Política ou sobre o tratamento dos seus dados:

E-mail: contato@safevisionbr.com.br
Telefone: +55 (11) 96356-1680
Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd`,
  },
];

export default function PoliticaDePrivacidade() {
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
          Política de Privacidade
        </h1>
        <p className="text-slate-400 text-sm mb-10">
          Última atualização: 11 de maio de 2025
        </p>

        <p className="text-slate-300 mb-10 leading-relaxed">
          Esta Política de Privacidade descreve como a <strong className="text-white">Safe Vision BR</strong> coleta, usa e protege seus dados pessoais, em conformidade com a{" "}
          <strong className="text-white">Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
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
            href="/termos-de-uso"
            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            Ver também: Termos de Uso →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
