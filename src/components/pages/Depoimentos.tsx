import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
  const getCardClasses = (index: number) => {
    const baseClass = "rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300";
    
    // Card 0: Destacado, escuro, ocupe 2 linhas na esquerda.
    if (index === 0) {
      return `${baseClass} bg-[#111] text-white md:col-span-1 md:row-span-2`;
    }
    
    // Cards largos
    const isWide = index === 2 || index === 3;
    
    // Cards padrão (quadrados)
    const isSquare = index === 1 || index === 4;
    
    return `${baseClass} bg-white text-[#111] ${isWide ? 'md:col-span-2' : ''} ${isSquare ? 'md:col-span-1' : ''} md:row-span-1`;
  };

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* TÍTULO PADRONIZADO */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 lg:mb-24 flex flex-col items-center"
        >
           <div className="flex justify-center mb-6">
              <span className="uppercase tracking-[0.2em] text-xs font-bold border border-[#111] px-4 py-2 rounded-full text-[#111]">
                [ DEPOIMENTOS ]
              </span>
           </div>
           <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-[#111] max-w-4xl mx-auto leading-[1.1]">
             O que dizem sobre nós
           </h2>
        </motion.div>

        {/* BENTO GRID DE DEPOIMENTOS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 relative z-10"
        >
          {CLIENT.depoimentos.map((dep, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={getCardClasses(i)}
            >
              <div className="flex items-center gap-3">
                {/* Avatar (adicionado ao client.ts) */}
                {dep.avatar ? (
                  <img src={dep.avatar} alt={dep.nome} className="w-10 h-10 rounded-full object-cover shrink-0" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" /> // fallback
                )}
                
                {/* Nota */}
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  <span>{dep.nota}.0</span>
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className={`font-normal uppercase tracking-wide text-[10px] md:text-xs ml-0.5 ${i === 0 ? 'opacity-70' : 'opacity-60'}`}>
                    Rating
                  </span>
                </div>
              </div>

              {/* Texto do Depoimento */}
              <p className={`mt-6 lg:mt-8 mb-8 text-lg lg:text-xl xl:text-2xl font-medium leading-normal tracking-tight ${i === 0 ? 'text-white/95' : 'text-[#111]/90'}`}>
                "{dep.texto}"
              </p>

              {/* Nome e Papel (Rodapé do Card) */}
              <div className="mt-auto">
                <p className="font-bold text-sm md:text-base">{dep.nome}</p>
                <p className={`text-xs md:text-sm mt-0.5 ${i === 0 ? 'text-white/50' : 'text-[#111]/50'}`}>
                  {dep.papel || "Cliente"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
