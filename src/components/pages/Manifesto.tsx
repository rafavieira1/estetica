import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CLIENT } from "@/config/client";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  // A palavra vai de 15% de opacidade até 100%
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
};

export default function Manifesto() {
  const textContainer = useRef<HTMLDivElement>(null);

  // Mapeia o progresso do scroll diretamente no bloco de texto
  // Inicia quando o topo do texto alcança os últimos 15% (85%) da tela de baixo para cima
  // Termina quando a base de todo o texto cruza a metade da tela (50%)
  const { scrollYProgress } = useScroll({
    target: textContainer,
    offset: ["start 85%", "end 50%"],
  });

  const titleWords = CLIENT.nome.split(" ");
  const phrase = `O ${CLIENT.nome} oferece um atendimento altamente premium, projetado intencionalmente para lapidar a sua melhor versão.`;
  const subtitleWords = phrase.split(" ");
  const totalWords = titleWords.length + subtitleWords.length;

  return (
    <section
      id="manifesto"
      className="bg-white py-20 md:py-32 lg:py-48 px-4 sm:px-6 min-h-[60vh] flex flex-col justify-center items-center overflow-hidden border-t border-gray-100"
    >
      <div ref={textContainer} className="max-w-[1400px] mx-auto flex flex-col items-center justify-center w-full">
        {/* Title */}
        <h2
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-serif font-normal tracking-tighter text-[#111] leading-[0.9] text-center mb-6 md:mb-10 flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-6 justify-center"
        >
          {titleWords.map((word, i) => {
            const start = i / totalWords;
            const end = start + (1 / totalWords);
            return (
              <Word key={`title-${i}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>

        {/* Cinematic Scroll Subtitle */}
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-medium tracking-tight text-[#111] leading-[1.25] text-center max-w-5xl mx-auto w-full">
          {subtitleWords.map((word, i) => {
            const start = (titleWords.length + i) / totalWords;
            const end = start + (1 / totalWords);

            return (
              <span key={`sub-${i}`}>
                <Word progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
                {i < subtitleWords.length - 1 && " "}
              </span>
            );
          })}
        </p>

        {/* Action Call */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-24 w-full flex justify-center"
        >
          <a
            href="#sobre"
            className="text-sm md:text-base font-semibold tracking-wider text-[#999] border-b-[1.5px] border-[#999] pb-1 hover:text-[#111] hover:border-[#111] transition-colors uppercase"
          >
            Conheça o estúdio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
