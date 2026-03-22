import { motion } from "framer-motion";
import { MessageCircle, Home, Sparkles } from "lucide-react";
import { FlowButton } from "@/components/ui/flow-button";
import { BadgeGlass } from "@/components/ui/badge-glass";
import { CLIENT } from "@/config/client";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Localizacao() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Pode me ensinar como chegar no espaço da ${CLIENT.nome}?`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLIENT.endereco)}`;

  return (
    <section id="localizacao" className="py-16 lg:py-32 bg-[#Fbfbfb]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* TÍTULO CENTRALIZADO NO TOPO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center text-center mb-16 lg:mb-24"
        >
          <BadgeGlass className="mb-6">Localização</BadgeGlass>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#111] leading-[1.1]">
            Onde nos encontrar
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-stretch"
        >
          {/* Left Column */}
          <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col pt-0 lg:pr-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#111] leading-[1.1] mb-6">
              Encontre o melhor espaço para seu autocuidado<br className="hidden lg:block" />
            </h3>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mb-12 font-medium">
              Com este mapa, você pode facilmente encontrar nossa clínica. Estamos localizados em um ponto de fácil acesso para garantir o seu conforto. Entre em contato ou veja a rota.
            </p>

            <div className="mb-14 flex flex-row flex-wrap gap-10 sm:gap-16">
              {/* Endereço */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#aaa] mb-3">Endereço</p>
                <p className="text-sm font-medium text-[#111] leading-relaxed">
                  Rua Salgado Filho, 742<br />
                  Centro — Medianeira, PR<br />
                  CEP 85884-000
                </p>
              </div>

              {/* Horários */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#aaa] mb-3">Horários</p>
                <div className="text-sm font-medium text-[#111] leading-relaxed space-y-0.5">
                  <p><span className="text-[#555]">Seg – Sex</span>&nbsp;&nbsp;09h – 19h</p>
                  <p><span className="text-[#555]">Sábado</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09h – 17h</p>
                  <p><span className="text-[#aaa]">Domingo</span>&nbsp;&nbsp;&nbsp;Fechado</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <FlowButton
                text="Falar no WhatsApp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              />
              <FlowButton
                text="Ver no Mapa"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              />
            </div>

{/* Seção movida para o componente Estatisticas.tsx */}
          </motion.div>

          {/* Right Column: Map */}
          <motion.div variants={fadeUp} className="w-full lg:w-1/2 relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] bg-[#f0f0f0] border-8 border-white shadow-2xl">
            <iframe
              title="Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CLIENT.endereco)}&output=embed`}
              className="w-full h-full border-0 pointer-events-auto"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
