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
    title: "1. Identificação do Controlador",
    content: `Safe Vision BR — Soluções de Tecnologia Ltda.
CNPJ: 57.340.706/0001-10
Sede: conforme registro no CNPJ junto à Receita Federal
E-mail: contato@safevisionbr.com.br
Telefone: +55 (11) 96356-1680

Para fins desta Política, somos o Controlador dos dados pessoais coletados por meio deste site, nos termos do Art. 5º, VI da LGPD.

Encarregado pelo Tratamento de Dados (DPO):
O Encarregado responsável pelo tratamento de dados pessoais pode ser contactado pelo e-mail: contato@safevisionbr.com.br, com o assunto "LGPD — Encarregado de Dados".`,
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

• Execução de contrato ou procedimentos preliminares (Art. 7º, V): quando você nos contata pelo WhatsApp ou e-mail solicitando orçamento ou suporte, o tratamento dos dados fornecidos é necessário para atender à sua solicitação — configurando procedimento pré-contratual a pedido do titular.
• Legítimo interesse (Art. 7º, IX): para análise de performance técnica do site com dados anonimizados, visando melhorar a experiência do usuário sem impacto desproporcional sobre sua privacidade.`,
  },
  {
    title: "5. Compartilhamento e Transferência Internacional de Dados",
    content: `Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins comerciais, exceto:

• Vercel Inc. (EUA): plataforma de hospedagem deste site. Dados de navegação anonimizados são processados em servidores localizados nos Estados Unidos, configurando transferência internacional de dados nos termos dos Arts. 33-36 da LGPD. A Vercel adota cláusulas contratuais padrão e está em conformidade com o GDPR, garantindo nível de proteção equivalente ao exigido pela legislação brasileira.
• Autoridades competentes: quando exigido por lei, regulamento ou ordem judicial, nos limites estritamente necessários.`,
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
    title: "8. Seus Direitos como Titular (LGPD — Art. 18)",
    content: `Em conformidade com o Art. 18 da LGPD, você tem direito a:

• Confirmação da existência de tratamento dos seus dados;
• Acesso aos dados pessoais que mantemos sobre você;
• Correção de dados incompletos, inexatos ou desatualizados;
• Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a LGPD;
• Portabilidade dos dados a outro fornecedor de serviço ou produto (Art. 18, V);
• Eliminação dos dados pessoais tratados com base no consentimento;
• Informação sobre entidades públicas e privadas com as quais compartilhamos dados;
• Informação sobre a possibilidade de não fornecer consentimento e as consequências disso;
• Revisão de decisões tomadas unicamente com base em tratamento automatizado (Art. 20).

Para exercer qualquer um desses direitos, entre em contato com nosso Encarregado pelo e-mail: contato@safevisionbr.com.br com o assunto "LGPD — Direitos do Titular". Responderemos em até 15 dias úteis.`,
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
