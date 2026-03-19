import { motion, Variants } from "framer-motion";
import { CLIENT } from "@/config/client";
import aboutImage from "@/assets/about-salon.jpg";

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
          <span className="text-[#777] font-medium tracking-widest text-[11px] sm:text-xs uppercase whitespace-nowrap">
            [ SOBRE NÓS ]
          </span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row lg:items-stretch justify-between gap-16 lg:gap-8"
        >
          {/* Left: Titles */}
          <motion.div variants={fadeUp} className="flex-1 w-full lg:text-right relative mt-0 flex flex-col justify-center gap-2">
            <h2 className="text-[14vw] sm:text-[11vw] lg:text-5xl xl:text-6xl 2xl:text-[6.5rem] font-black leading-[0.85] tracking-tighter text-[#111] uppercase flex flex-col">
              <span>Arte</span>
              <span>em cada</span>
              <span>traço</span>
            </h2>
          </motion.div>

          {/* Middle: Image */}
          <motion.div variants={fadeUp} className="w-full sm:w-[80%] mx-auto lg:w-[320px] xl:w-[420px] shrink-0">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={aboutImage}
                alt={`Sobre ${CLIENT.nome}`}
                className="w-full h-full object-cover shadow-sm bg-gray-100"
              />
            </div>
          </motion.div>

          {/* Right: Content & Stats */}
          <motion.div variants={fadeUp} className="flex-1 w-full mx-auto max-w-xl lg:max-w-md xl:max-w-lg flex flex-col lg:justify-between items-start lg:pl-4 xl:pl-8">
            <div className="flex flex-col items-start w-full">
              <p className="text-[15px] sm:text-base text-[#444] font-medium leading-relaxed mb-10 text-justify sm:text-left">
                O {CLIENT.nome} nasceu com o propósito de transformar o cuidado estético, focando em resultados que realçam sua melhor versão. Com um compromisso profundo com o bem-estar e a excelência, criamos uma experiência inesquecível de conforto para cada mulher.
              </p>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-4 px-6 py-3 border border-[#111] text-[#111] text-[13px] font-bold tracking-widest hover:bg-[#111] hover:text-white transition-colors uppercase mb-16 lg:mb-0"
              >
                Quem Somos <span className="text-xl leading-none mt-[-2px]">↗</span>
              </a>
            </div>

            {/* Stats inline */}
            <div className="flex items-center gap-10 sm:gap-14 w-full mt-10 lg:mt-0">
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl xl:text-[5rem] font-black tracking-tighter text-[#111] leading-none">
                  8
                </span>
                <span className="text-[9px] md:text-[10px] text-[#555] font-semibold uppercase leading-tight tracking-[0.2em]">
                  Anos de<br />Experiência
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl xl:text-[5rem] font-black tracking-tighter text-[#111] leading-none">
                  500
                </span>
                <span className="text-[9px] md:text-[10px] text-[#555] font-semibold uppercase leading-tight tracking-[0.2em]">
                  Projetos<br />Concluídos
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
