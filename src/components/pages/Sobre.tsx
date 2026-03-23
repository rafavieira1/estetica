import { motion, Variants } from "framer-motion";
import { CLIENT } from "@/config/client";
import { FlowButton } from "@/components/ui/flow-button";
import { BadgeGlass } from "@/components/ui/badge-glass";

export default function Sobre() {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="sobre" className="bg-white py-24 md:py-32 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex justify-center mb-16"
        >
          <BadgeGlass>Sobre Nós</BadgeGlass>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row lg:items-stretch justify-between gap-10 lg:gap-8"
        >
          {/* Left: Titles */}
          <motion.div variants={fadeUp} className="flex-1 w-full lg:text-right relative mt-0 flex flex-col justify-center gap-2">
            <h2 className="text-[14vw] sm:text-[11vw] lg:text-5xl xl:text-6xl 2xl:text-[6.5rem] font-normal leading-[1.1] tracking-tight text-[#111] flex flex-col">
              {CLIENT.sobre.titulos.map((titulo, i) => (
                <span key={i}>{titulo}</span>
              ))}
            </h2>
          </motion.div>

          {/* Middle: Image */}
          <motion.div variants={fadeUp} className="w-full sm:w-[80%] mx-auto lg:w-[320px] xl:w-[420px] shrink-0">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={CLIENT.sobre.imagem}
                alt={`Sobre ${CLIENT.nome}`}
                className="w-full h-full object-cover shadow-sm bg-gray-100"
              />
            </div>
          </motion.div>

          {/* Right: Content & Stats */}
          <motion.div variants={fadeUp} className="flex-1 w-full mx-auto max-w-xl lg:max-w-md xl:max-w-lg flex flex-col lg:justify-between items-start lg:pl-4 xl:pl-8">
            <div className="flex flex-col items-start w-full">
              <p className="text-[15px] sm:text-base text-[#444] font-medium leading-relaxed mb-10 text-justify sm:text-left">
                O {CLIENT.nome} {CLIENT.sobre.descricao}
              </p>

              <FlowButton text="Quem Somos" href="#servicos" className="mb-6 lg:mb-0 w-fit" />
            </div>

            {/* Stats inline */}
            <div className="flex items-center gap-10 sm:gap-14 w-full mt-6 lg:mt-0">
              {CLIENT.sobre.estatisticas.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl xl:text-[5rem] font-black tracking-tighter text-[#111] leading-none">
                    {stat.valor}
                  </span>
                  <span
                    className="text-[9px] md:text-[10px] text-[#555] font-semibold uppercase leading-tight tracking-[0.2em] whitespace-pre-line"
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
