import { motion } from "framer-motion";
import { CLIENT } from "@/config/client";
import aboutImage from "@/assets/about-salon.jpg";

const stats = [
  { number: "500+", label: "Clientes Atendidos" },
  { number: "8", label: "Anos de Experiência" },
  { number: "4.9 ★", label: "Avaliação Google" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Image */}
          <motion.div variants={fadeUp} className="flex-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl" />
              <img
                src={aboutImage}
                alt={`Sobre ${CLIENT.nome}`}
                className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <motion.p variants={fadeUp} className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Sobre nós
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-secondary mb-6">
              Conheça o {CLIENT.nome}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-10">
              Há mais de 8 anos transformando a autoestima de nossas clientes em {CLIENT.cidade}.
              Nosso espaço foi pensado para oferecer conforto, qualidade e resultados que encantam.
              Com profissionais experientes e produtos de primeira linha, cada visita é uma experiência
              de cuidado e renovação.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-primary/40 rounded-xl p-4 text-center hover:border-primary transition-colors"
                >
                  <p className="font-display text-2xl md:text-3xl font-bold text-secondary">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
