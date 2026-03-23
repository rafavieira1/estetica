import Header from "@/components/pages/Header";
import Hero from "@/components/pages/Hero";
import Manifesto from "@/components/pages/Manifesto";
import Sobre from "@/components/pages/Sobre";
import Servicos from "@/components/pages/Servicos";
import Galeria from "@/components/pages/Galeria";
import Depoimentos from "@/components/pages/Depoimentos";
import Estatisticas from "@/components/pages/Estatisticas";
import AgendamentoFAQ from "@/components/pages/AgendamentoFAQ";
import SocialCTA from "@/components/pages/SocialCTA";
import Localizacao from "@/components/pages/Localizacao";
import Footer from "@/components/pages/Footer";
import BotaoWhatsApp from "@/components/pages/BotaoWhatsApp";
import { CLIENT } from "@/config/client";

// ── JSON-LD Schema (BeautySalon / LocalBusiness) ─────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": CLIENT.nome,
  "description": CLIENT.seo.metaDescricao,
  "url": CLIENT.seo.siteUrl,
  "telephone": `+${CLIENT.whatsapp}`,
  "image": `${CLIENT.seo.siteUrl}${CLIENT.seo.ogImagem}`,
  "priceRange": CLIENT.seo.faixaPreco,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": CLIENT.localizacao.rua,
    "addressLocality": CLIENT.cidade.split(",")[0].trim(),
    "addressRegion": CLIENT.cidade.split(",")[1]?.trim() || "",
    "postalCode": CLIENT.localizacao.cep.replace("CEP ", ""),
    "addressCountry": "BR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": CLIENT.seo.geo.latitude,
    "longitude": CLIENT.seo.geo.longitude,
  },
  "openingHoursSpecification": Object.entries(CLIENT.horarios)
    .filter(([, hora]) => hora !== "Fechado")
    .map(([dia, hora]) => {
      const diasMap: Record<string, string[]> = {
        "Segunda a Sexta": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "Segunda": ["Monday"],
        "Terça": ["Tuesday"],
        "Quarta": ["Wednesday"],
        "Quinta": ["Thursday"],
        "Sexta": ["Friday"],
        "Sábado": ["Saturday"],
        "Domingo": ["Sunday"],
      };
      const opens = hora.match(/(\d{2})h/)?.[1] + ":00" || "09:00";
      const closes = hora.match(/às\s*(\d{2})h/)?.[1] + ":00" || "18:00";
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": diasMap[dia] || [dia],
        opens,
        closes,
      };
    }),
  "sameAs": [
    `https://instagram.com/${CLIENT.instagram.replace("@", "")}`,
    ...(CLIENT.facebook ? [`https://facebook.com/${CLIENT.facebook}`] : []),
  ],
};

// ── FAQ Schema ───────────────────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": CLIENT.faq.map((item) => ({
    "@type": "Question",
    "name": item.pergunta,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.resposta,
    },
  })),
};

const Index = () => {
  const pageTitle = `${CLIENT.nome} | Estética e Bem-estar em ${CLIENT.cidade}`;

  return (
    <>
      {/* SEO Meta Tags (sobrescrevem os do index.html) */}
      <title>{pageTitle}</title>
      <meta name="description" content={CLIENT.seo.metaDescricao} />
      <link rel="canonical" href={`${CLIENT.seo.siteUrl}/`} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={CLIENT.slogan} />
      <meta property="og:image" content={`${CLIENT.seo.siteUrl}${CLIENT.seo.ogImagem}`} />
      <meta property="og:url" content={`${CLIENT.seo.siteUrl}/`} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={CLIENT.slogan} />
      <meta name="twitter:image" content={`${CLIENT.seo.siteUrl}${CLIENT.seo.ogImagem}`} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Sobre />
        <Servicos />
        <Galeria />
        <Depoimentos />
        <Estatisticas />
        <AgendamentoFAQ />
        <SocialCTA />
        <Localizacao />
      </main>
      <Footer />
      <BotaoWhatsApp />
    </>
  );
};

export default Index;
