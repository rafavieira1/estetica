import { motion } from "framer-motion";
import { Scissors, Sparkles, Hand, Eye, Zap, Star } from "lucide-react";
import { CLIENT } from "@/config/client";

const iconMap: Record<string, React.ElementType> = {
  scissors: Scissors,
  sparkles: Sparkles,
  hand: Hand,
  eye: Eye,
  zap: Zap,
  star: Star,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Servicos() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Gostaria de agendar um horário.`;

  return (
    <section id="servicos" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            O que oferecemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">
            Nossos Serviços
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {CLIENT.servicos.map((servico) => {
            const Icon = iconMap[servico.icone] || Star;
            return (
              <motion.div
                key={servico.nome}
                variants={fadeUp}
                className="group bg-card rounded-2xl p-8 border border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary mb-2">
                  {servico.nome}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {servico.descricao}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Agendar meu horário
          </a>
        </motion.div>
      </div>
    </section>
  );
}
