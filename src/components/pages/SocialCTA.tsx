import { motion } from "framer-motion";
import { CLIENT } from "@/config/client";
import { Instagram, MessageCircle } from "lucide-react";

export default function SocialCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Banner/Card Largo inspirado na referência */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-center py-10 sm:py-16 px-6 lg:px-12 bg-[#111] shadow-2xl"
        >
          {/* Overlay de Imagem Suave como na referência (Spa/Aesthetics texture no lugar de nuvens/céu) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop" 
              alt="Aesthetic Texture" 
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-[#111]/30 pointer-events-none" />
          </div>

          {/* Conteúdo Centralizado */}
          <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
            
            {/* Tag opcional do projeto */}
            <div className="flex justify-center mb-4">
               <span className="uppercase tracking-[0.2em] text-xs font-bold border border-white/20 px-4 py-2 rounded-full text-white/80">
                 [ FIQUE POR DENTRO ]
               </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1] mb-6">
              Pronta para realçar sua<br className="hidden sm:block" />
              beleza única?
            </h2>
            
            <p className="text-base sm:text-xl text-white/80 mb-8 max-w-3xl font-light">
              Acompanhe nossa rotina, dicas exclusivas de autocuidado e confira em primeira mão os resultados dos nossos tratamentos diretamente pelo Instagram.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <a 
                 href={`https://instagram.com/${CLIENT.instagram.replace('@', '')}`}
                 target="_blank"
                 rel="noreferrer"
                 className="bg-white text-[#111] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 group shadow-xl shadow-white/10"
               >
                 <Instagram size={22} className="group-hover:-rotate-12 transition-transform duration-300" />
                 Siga nosso Instagram
               </a>

               <a 
                 href={`https://wa.me/${CLIENT.whatsapp}`}
                 target="_blank"
                 rel="noreferrer"
                 className="bg-[#25D366]/10 backdrop-blur-md border border-[#25D366]/30 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#25D366]/20 transition-colors duration-300"
               >
                 <MessageCircle size={22} className="text-[#25D366]" />
                 Fale no WhatsApp
               </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
