import Header from "@/components/pages/Header";
import Hero from "@/components/pages/Hero";
import Sobre from "@/components/pages/Sobre";
import Servicos from "@/components/pages/Servicos";
import Galeria from "@/components/pages/Galeria";
import Depoimentos from "@/components/pages/Depoimentos";
import Localizacao from "@/components/pages/Localizacao";
import Footer from "@/components/pages/Footer";
import BotaoWhatsApp from "@/components/pages/BotaoWhatsApp";
import { CLIENT } from "@/config/client";

const Index = () => {
  return (
    <>
      <title>{CLIENT.nome} — {CLIENT.slogan}</title>
      <meta name="description" content={`${CLIENT.nome} em ${CLIENT.cidade}. ${CLIENT.slogan}`} />
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Galeria />
        <Depoimentos />
        <Localizacao />
      </main>
      <Footer />
      <BotaoWhatsApp />
    </>
  );
};

export default Index;
