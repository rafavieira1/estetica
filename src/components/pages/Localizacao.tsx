import { motion } from "framer-motion";
import { MessageCircle, Home, Sparkles } from "lucide-react";
import { CLIENT } from "@/config/client";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Localizacao() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Pode me ensinar como chegar no espaço da ${CLIENT.nome}?`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLIENT.endereco)}`;

  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-[#Fbfbfb]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* TÍTULO CENTRALIZADO NO TOPO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center text-center mb-16 lg:mb-24"
        >
          <p className="text-[#777] font-medium tracking-widest text-[11px] sm:text-xs uppercase mb-4 whitespace-nowrap">
            [ LOCALIZAÇÃO ]
          </p>
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

            <div className="mb-14">
              <p className="text-xs font-bold text-[#111] mb-4">FALAREMOS EM BREVE</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111] text-white px-6 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#111]/80 transition-colors shadow-lg"
                >
                  <MessageCircle size={18} fill="currentColor" className="text-white" />
                  Falar no WhatsApp
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-200 text-[#111] px-6 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  Ver no Mapa
                </a>
              </div>
            </div>

            {/* Stats Pill Bar */}
            <div className="bg-[#f4f4f4] rounded-[2.5rem] py-6 px-8 flex items-center justify-between w-full max-w-[28rem] mt-auto">
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Home size={16} className="text-[#111] shrink-0" strokeWidth={2.5} />
                  <span className="font-extrabold text-xl md:text-2xl text-[#111]">8+</span>
                </div>
                <span className="text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-wider">Anos</span>
              </div>

              <div className="w-px h-10 bg-gray-300 mx-2" />

              <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <MessageCircle size={16} className="text-[#111] shrink-0" strokeWidth={2.5} fill="currentColor" />
                  <span className="font-extrabold text-xl md:text-2xl text-[#111]">500+</span>
                </div>
                <span className="text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-wider">Clientes</span>
              </div>

              <div className="w-px h-10 bg-gray-300 mx-2" />

              <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={16} className="text-[#111] shrink-0" strokeWidth={2.5} />
                  <span className="font-extrabold text-xl md:text-2xl text-[#111]">100%</span>
                </div>
                <span className="text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-wider">Beleza</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div variants={fadeUp} className="w-full lg:w-1/2 relative h-[500px] lg:h-[650px] overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] bg-[#f0f0f0] border-8 border-white shadow-2xl">
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
