import { motion } from "framer-motion";
import { CLIENT } from "@/config/client";
import { FlowButton } from "@/components/ui/flow-button";
import { BadgeGlass } from "@/components/ui/badge-glass";

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
          className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row bg-[#111] shadow-2xl"
        >
          {/* Coluna Esquerda: Texto */}
          <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-center items-start text-left py-12 px-8 sm:py-16 sm:px-12 lg:py-24 lg:pl-16 lg:pr-12 xl:pl-20 xl:pr-16">
            {/* Tag */}
            <div className="flex justify-start mb-6">
              <BadgeGlass variant="dark">Fique Por Dentro</BadgeGlass>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-tight text-white leading-[1.1] mb-6">
              Pronta para realçar sua<br className="hidden sm:block" /> beleza única?
            </h2>

            <p className="text-base sm:text-lg text-white/80 mb-10 max-w-lg font-light leading-relaxed">
              Acompanhe nossa rotina, dicas exclusivas de autocuidado e confira em primeira mão os resultados dos nossos tratamentos diretamente pelo Instagram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <FlowButton
                text="Siga no Instagram"
                variant="light"
                href={`https://instagram.com/${CLIENT.instagram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-[240px] md:w-[260px]"
              />

              <FlowButton
                text="Fale no WhatsApp"
                variant="light"
                href={`https://wa.me/${CLIENT.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-[240px] md:w-[260px]"
              />
            </div>
          </div>

          {/* Coluna Direita: Imagem/Ilustração */}
          <div className="relative w-full lg:w-[45%] h-[350px] sm:h-[450px] lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500917129638-ca7e13bc30f3?q=80&w=1170&auto=format&fit=crop"
              alt="Aesthetic Texture"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradiente para suavizar a transição (vertical no mobile, horizontal no desktop) */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#111] lg:from-0% via-[#111]/50 lg:via-[35%] to-transparent lg:to-[55%] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
