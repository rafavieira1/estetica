import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { CLIENT } from "@/config/client";

// Mapeamento dos serviços base para o layout (em inglês para match exato com o design)
const categorias = [
  {
    id: "rosto",
    title: "CUIDADOS COM A PELE",
    servicesCount: "2 serviços",
    services: CLIENT.servicos.filter(s => ["Sobrancelhas", "Maquiagem"].includes(s.nome)),
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "corpo",
    title: "RITUAIS CORPORAIS",
    servicesCount: "1 serviço",
    services: CLIENT.servicos.filter(s => ["Manicure"].includes(s.nome)),
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cabelo",
    title: "TRATAMENTOS CAPILARES",
    servicesCount: "3 serviços",
    services: CLIENT.servicos.filter(s => ["Corte", "Coloração", "Tratamento"].includes(s.nome)),
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Servicos() {
  const containerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("rosto");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Quando desce 35% do container longo, ativa o modo abas iterativas
    setIsScrolled(latest > 0.35);
  });

  const displayCategories = activeTab === "all" ? categorias : categorias.filter(c => c.id === activeTab);

  return (
    <section ref={containerRef} id="servicos" className="relative h-[250vh] bg-[#fafafa]">
      {/* Container "Grudado" na tela */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-16 sm:pt-24 pb-12 px-4 sm:px-8">
        
        {/* TÍTULO PRINCIPAL */}
        <motion.div layout className="mb-8 lg:mb-12 w-full flex flex-col items-center justify-center text-center shrink-0">
          <motion.p layout="position" className="text-[#777] font-medium tracking-widest text-[11px] sm:text-xs uppercase mb-4 whitespace-nowrap">
            [ O QUE OFERECEMOS ]
          </motion.p>
          <motion.h2 
            layout="position"
            className={`font-black tracking-tighter text-[#111] uppercase whitespace-nowrap overflow-hidden flex flex-wrap justify-center items-center gap-2 sm:gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled 
                ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl" 
                : "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.85]"
            }`}
          >
            {isScrolled ? (
              <>
                <span>NOSSOS</span>
                <span className="text-[10px] sm:text-xs tracking-widest border-2 border-[#111] px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold mx-2 flex-shrink-0 flex items-center h-fit mt-1 sm:mt-2">SERVIÇOS</span>
                <span>SERVIÇOS</span>
              </>
            ) : (
              "NOSSOS SERVIÇOS"
            )}
          </motion.h2>
        </motion.div>

        {/* CARDS GRANDES ou CARROSSEL DE ABAS */}
        <motion.div 
          layout 
          className={`w-full max-w-[1400px] mx-auto flex gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] snap-x snap-mandatory ${
            isScrolled 
              ? "overflow-x-auto pb-4 flex-none h-32 md:h-40 xl:h-48 justify-start py-1 items-center cursor-grab active:cursor-grabbing scrollbar-hide" 
              : "h-[65vh] flex-col md:flex-row justify-center items-stretch"
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Esconder scroll original
        >
          {/* BOTÃO "ALL" - Surge apenas quando scrolar */}
          {isScrolled && (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveTab("all")}
              className={`snap-center relative shrink-0 w-64 md:w-72 h-full border border-[#111] p-4 lg:p-6 flex flex-col justify-end cursor-pointer group transition-colors duration-300 ${
                activeTab === "all" ? "bg-[#111] text-white" : "bg-transparent text-[#111] hover:bg-[#111]/5"
              }`}
            >
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 rounded-full border border-current flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${activeTab === "all" ? "bg-white" : "bg-transparent"}`} />
              </div>
              <h3 className="font-bold text-lg md:text-xl uppercase">TODOS</h3>
              <p className="text-sm opacity-60 mt-1">{CLIENT.servicos.length} serviços</p>
            </motion.div>
          )}

          {/* LISTA DE CARDS */}
          {categorias.map((c) => {
            const isActive = !isScrolled || activeTab === c.id;
            
            return (
              <motion.div 
                layout
                key={c.id}
                onClick={() => {
                  if (isScrolled) setActiveTab(c.id);
                }}
                className={`snap-center relative flex flex-col justify-end overflow-hidden group transition-all duration-500 border border-[#111] ${
                  isScrolled
                    ? `shrink-0 w-64 md:w-72 xl:w-80 h-full p-4 lg:p-6 cursor-pointer ${isActive ? '' : 'bg-transparent text-[#111] hover:bg-[#111]/5'}`
                    : `flex-1 h-full p-8 md:p-10 border-transparent`
                }`}
              >
                 {/* IMAGEM DE FUNDO */}
                 <div 
                   className={`absolute inset-0 transition-opacity duration-500 z-0 ${
                     isScrolled && !isActive ? "opacity-0" : "opacity-100"
                   }`}
                 >
                   <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                   {/* Overlay escura suave para garantir contraste do texto */}
                   <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isScrolled && !isActive ? 'opacity-0' : 'group-hover:opacity-90'}`} />
                 </div>

                 {/* CONTEÚDO TEXTUAL DO CARD */}
                 <motion.div layout="position" className={`relative z-10 transition-colors duration-300 w-full ${isScrolled && !isActive ? "text-[#111]" : "text-white"}`}>
                   <div className="flex justify-between items-end w-full">
                      <div>
                        <h3 className={`font-bold uppercase tracking-wide ${isScrolled ? "text-base md:text-lg" : "text-2xl md:text-3xl lg:text-4xl"}`}>
                          {c.title}
                        </h3>
                        <p className={`mt-0 lg:mt-1 font-medium ${isScrolled ? "text-xs lg:text-sm" : "text-base md:text-lg"} ${isScrolled && !isActive ? "opacity-60" : "opacity-80"}`}>
                          {c.servicesCount}
                        </p>
                      </div>
                      
                      {/* ÍCONE DE STATUS DIREITA */}
                      {isScrolled ? (
                        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-current flex items-center justify-center shrink-0">
                          {isActive ? (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                              <path d="M2 2L10 10M10 2L2 10" />
                            </svg>
                          ) : (
                            <div className="w-4 h-4 flex items-center justify-center">
                              {/* Icone minimalista de janela vertical */}
                              <div className="w-3 h-3 border border-current" />
                            </div>
                          )}
                        </div>
                      ) : (
                         <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                         </div>
                      )}
                   </div>
                 </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ZONA DE DETALHES (Visível apenas após scroll) */}
        <div className={`w-full max-w-[1400px] mx-auto flex-1 mt-6 transition-all duration-700 ease-in-out pb-4 ${isScrolled ? "opacity-100 min-h-0 translate-y-0" : "opacity-0 h-0 pointer-events-none translate-y-10"}`}>
           <div className="flex flex-col md:flex-row gap-8 lg:gap-16 xl:gap-24 h-full">
              
              {/* Coluna da Esquerda (Título + Imagem) */}
              <div className="md:w-1/3 shrink-0 flex flex-col justify-between">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] font-black uppercase tracking-tighter text-[#111] leading-[0.85]">
                  {activeTab === 'all' ? 'TODOS OS SERVIÇOS' : categorias.find(c => c.id === activeTab)?.title}
                </h3>
                
                {/* Imagem do Serviço Ocupando o Espaço Restante */}
                <div className="w-full aspect-[21/9] sm:aspect-video lg:aspect-[4/3] overflow-hidden hidden md:block mt-6 2xl:mt-10">
                  <img 
                    src={activeTab === 'all' 
                      ? "https://images.unsplash.com/photo-1629367305944-ff737b8d4be6?q=80&w=800&auto=format&fit=crop" 
                      : categorias.find(c => c.id === activeTab)?.image} 
                    alt="Categoria de Serviço"
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Lista Descritiva Direita */}
              <div className="md:w-2/3 flex flex-col justify-center">
                 <p className="text-base lg:text-lg xl:text-xl text-[#333] font-medium leading-relaxed max-w-2xl mb-6 lg:mb-8">
                    Inspirados pela natureza, pela luz e pelo ritmo suave do autocuidado, nossos tratamentos são projetados para restaurar o equilíbrio, nutrir profundamente e revelar a sua essência natural. <br/><br/>
                    Seja para buscar um brilho especial antes de um grande evento ou para a saúde diária, cada cuidado é realizado com atenção.
                 </p>
                
                 <div className="h-px w-full bg-[#111]/10 mb-6 lg:mb-8" />

                 {/* Grade de serviços literais puxados do CLIENT config */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 lg:gap-y-8">
                   {displayCategories.flatMap(c => c.services).map(servico => (
                      <div key={servico.nome} className="group cursor-pointer">
                         <h4 className="text-lg lg:text-xl font-bold uppercase tracking-tight text-[#111] mb-1 lg:mb-2 flex items-center justify-between">
                            {servico.nome}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#111] -translate-x-4 group-hover:translate-x-0 duration-300">→</span>
                         </h4>
                         <p className="text-[#555] text-sm leading-relaxed">{servico.descricao}</p>
                      </div>
                   ))}
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}
