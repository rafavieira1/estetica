import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle, Map } from "lucide-react";
import { CLIENT } from "@/config/client";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Localizacao() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Pode me ensinar como chegar no espaço da ${CLIENT.nome}?`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLIENT.endereco)}`;

  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-[#F6F4EE]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* TÍTULO PADRONIZADO CENTRALIZADO NO TOPO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24 flex flex-col items-center"
        >
          <div className="flex justify-center mb-6">
            <span className="uppercase tracking-[0.2em] text-xs font-bold border border-[#111] px-4 py-2 rounded-full text-[#111]">
              [ LOCALIZAÇÃO ]
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl uppercase font-black tracking-tighter text-[#111] leading-[0.9]">
            ONDE NOS ENCONTRAR
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24"
        >
          {/* Info */}
          <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col justify-center space-y-12">
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full border border-[#111]/20 bg-white flex items-center justify-center shrink-0">
                <MapPin className="text-[#111]" size={24} />
              </div>
              <div className="pt-1">
                <h3 className="text-2xl font-bold text-[#111] mb-2 tracking-tight">Endereço</h3>
                <p className="text-[#555] text-lg lg:text-xl leading-relaxed max-w-sm">{CLIENT.endereco}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full border border-[#111]/20 bg-white flex items-center justify-center shrink-0">
                <Clock className="text-[#111]" size={24} />
              </div>
              <div className="pt-1">
                <h3 className="text-2xl font-bold text-[#111] mb-2 tracking-tight">Horários de Atendimento</h3>
                <table className="text-[#555] text-lg">
                  <tbody>
                    {Object.entries(CLIENT.horarios).map(([dia, horario]) => (
                      <tr key={dia} className="border-b border-transparent">
                        <td className="pr-8 py-1.5 font-medium">{dia}</td>
                        <td className="py-1.5">{horario}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#111] text-white px-8 py-5 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#111]/20"
              >
                <MessageCircle size={22} />
                Falar com Atendimento
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white border border-[#111]/10 text-[#111] px-8 py-5 rounded-full font-bold hover:bg-[#111]/5 transition-colors duration-300"
              >
                <Map size={22} />
                Como Chegar
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div variants={fadeUp} className="w-full lg:w-1/2 p-[2px] rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br from-[#E2D4C3] via-[#F8F4EE] to-[#D4C3AC] shadow-xl shadow-[#111]/5">
            <div className="bg-white rounded-[calc(2rem-2px)] lg:rounded-[calc(3rem-2px)] p-4 flex w-full relative h-[400px] lg:h-[500px]">
              <iframe
                title="Google Maps Localização"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CLIENT.endereco)}&output=embed`}
                className="w-full h-full rounded-[1.5rem] lg:rounded-[2.5rem] border-0 select-none pointer-events-auto"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
