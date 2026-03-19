import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { CLIENT } from "@/config/client";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            O que dizem sobre nós
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">
            Depoimentos
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CLIENT.depoimentos.map((dep, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <Quote className="text-primary/30 mb-4" size={36} />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{dep.texto}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-lg font-bold text-secondary">
                  {dep.nome}
                </p>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: dep.nota }).map((_, j) => (
                    <Star key={j} className="text-primary fill-primary" size={16} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
