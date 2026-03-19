import { motion, Variants } from "framer-motion";
import { CLIENT } from "@/config/client";

export default function Manifesto() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col items-center"
        >
          {/* Main heading */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-normal tracking-tight text-[#111] text-center leading-[1.1] mb-10 flex flex-col items-center gap-2">
            <motion.span variants={itemVariants} className="block">Sua beleza em</motion.span>
            <motion.span variants={itemVariants} className="block">cada detalhe</motion.span>
          </h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="max-w-2xl text-center text-[15px] sm:text-base md:text-lg text-[#444] font-medium leading-relaxed mb-10">
            O {CLIENT.nome} é um estúdio de beleza premium para mulheres, oferecendo cuidado especializado para pele, corpo e cabelo. Proporcionamos um atendimento personalizado com tratamentos que atendem de forma precisa as necessidades individuais de cada cliente.
          </motion.p>

          {/* CTA Link */}
          <motion.a
            variants={itemVariants}
            href="#sobre"
            className="text-base md:text-lg font-medium tracking-wider text-[#111] border-b-[1.5px] border-[#111] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            Saiba Mais
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
