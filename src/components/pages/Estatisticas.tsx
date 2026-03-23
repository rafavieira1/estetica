import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { BadgeGlass } from "@/components/ui/badge-glass";
import { CLIENT } from "@/config/client";

function AnimatedCounter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = Math.round(value).toString() + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [from, to, duration, suffix, inView]);

  return <span ref={ref}>{from}{suffix}</span>;
}

export default function Estatisticas() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[600px] flex items-center bg-[#111] overflow-hidden py-16 lg:py-32">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <img
          src={CLIENT.estatisticas.imagem}
          alt="Dark Aesthetic Texture"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Gradient for subtle fading */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111]/60 via-[#111]/20 to-[#111]/60 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">

          {/* Text Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-last w-full lg:w-2/5 flex flex-col items-start lg:pl-12 xl:pl-20"
          >
            <BadgeGlass variant="dark" className="mb-2 sm:mb-6">Números</BadgeGlass>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
              Resultados Impressionantes
            </h2>
          </motion.div>

          {/* Numbers Area */}
          <div className="order-last lg:order-first flex flex-col sm:flex-row gap-12 sm:gap-20 w-full lg:w-3/5">
            {CLIENT.estatisticas.itens.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col"
              >
                <span className="font-['Libre_Caslon_Display'] font-normal text-[60px] sm:text-[80px] md:text-[100px] lg:text-[130px] leading-none text-white tracking-tighter mb-2">
                  <AnimatedCounter from={0} to={stat.valor} suffix={stat.sufixo} />
                </span>
                <p className="text-white/70 font-medium text-lg lg:text-xl tracking-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
