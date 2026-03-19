import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle, Map } from "lucide-react";
import { CLIENT } from "@/config/client";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Localizacao() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Gostaria de saber mais informações.`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLIENT.endereco)}`;

  return (
    <section id="localizacao" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Onde estamos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">
            Localização
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Info */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-secondary mb-1">Endereço</h3>
                <p className="text-muted-foreground">{CLIENT.endereco}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-secondary mb-1">Horários</h3>
                <table className="text-muted-foreground">
                  <tbody>
                    {Object.entries(CLIENT.horarios).map(([dia, horario]) => (
                      <tr key={dia}>
                        <td className="pr-6 py-1 font-medium text-foreground">{dia}</td>
                        <td className="py-1">{horario}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Map size={20} />
                Abrir no Maps
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-xl min-h-[400px]">
            <iframe
              title="Localização"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CLIENT.endereco)}&output=embed`}
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
