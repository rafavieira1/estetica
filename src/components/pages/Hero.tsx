import { motion } from "framer-motion";
import { CLIENT } from "@/config/client";
import heroImage from "@/assets/hero-salon.jpg";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Gostaria de agendar um horário.`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-accent">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 pt-28 pb-16 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-4"
            >
              {CLIENT.cidade}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-secondary leading-[1.1] mb-6"
            >
              {CLIENT.slogan}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8"
            >
              No {CLIENT.nome}, cada detalhe é pensado para você se sentir única. Agende seu horário e viva a experiência.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors inline-flex items-center justify-center"
              >
                Nossos Serviços
              </a>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative max-w-md lg:max-w-lg"
          >
            {/* Decorative shape behind image */}
            <div className="absolute -top-8 -right-8 w-full h-full rounded-3xl bg-primary/20 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/30 -z-10" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10" />
              <img
                src={heroImage}
                alt={CLIENT.nome}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
