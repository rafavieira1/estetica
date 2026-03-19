import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

type LayoutType = "center" | "right";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  layout: LayoutType;
}

const galleryItems: GalleryItem[] = [
  {
    id: "skin",
    title: "Skin Glow",
    subtitle: "Hidratação Profunda",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800",
    ],
    layout: "center",
  },
  {
    id: "loiro",
    title: "Loiro Perfeito",
    subtitle: "Mechas e Tonalização",
    images: [
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
    ],
    layout: "right",
  },
  {
    id: "make",
    title: "Make Glamour",
    subtitle: "Maquiagem Social",
    images: [
      "https://images.unsplash.com/photo-1516975080665-22d7d8e64bdf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    ],
    layout: "right",
  },
  {
    id: "spa",
    title: "Spa Relax",
    subtitle: "Rituais Aromáticos",
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600334129128-68505382c674?auto=format&fit=crop&q=80&w=800",
    ],
    layout: "center",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Galeria() {
  // Indices independentes para cara card (0 a 3)
  const [activeIndexes, setActiveIndexes] = useState<number[]>([0, 0, 0, 0]);

  // Estado do lightbox: qual categoria está aberta e qual index de imagem
  const [lightboxState, setLightboxState] = useState<{ categoryIdx: number; imageIdx: number } | null>(null);

  // Navegação num Card Individual
  const nextImage = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setActiveIndexes((prev) => {
      const next = [...prev];
      next[idx] = (next[idx] + 1) % galleryItems[idx].images.length;
      return next;
    });
  };

  const prevImage = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setActiveIndexes((prev) => {
      const next = [...prev];
      const max = galleryItems[idx].images.length;
      next[idx] = next[idx] === 0 ? max - 1 : next[idx] - 1;
      return next;
    });
  };

  // Navegação no Lightbox
  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxState) return;
    const { categoryIdx, imageIdx } = lightboxState;
    const max = galleryItems[categoryIdx].images.length;
    setLightboxState({ categoryIdx, imageIdx: (imageIdx + 1) % max });
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxState) return;
    const { categoryIdx, imageIdx } = lightboxState;
    const max = galleryItems[categoryIdx].images.length;
    setLightboxState({ categoryIdx, imageIdx: imageIdx === 0 ? max - 1 : imageIdx - 1 });
  };

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center text-center mb-16 lg:mb-24"
        >
          <p className="text-[#777] font-medium tracking-widest text-[11px] sm:text-xs uppercase mb-4 whitespace-nowrap">
            [ GALERIA ]
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#111] leading-[1.1]">
            Nosso Trabalho
          </h2>
        </motion.div>

        {/* 2x2 GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-gray-200 border border-gray-200 shadow-sm"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="relative aspect-square sm:aspect-[4/3] bg-[#fbfbfb] flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => setLightboxState({ categoryIdx: i, imageIdx: activeIndexes[i] })}
            >
              {/* TOP LEFT (TEXT) */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 pointer-events-none">
                <h3 className="font-display font-bold tracking-tight text-xl sm:text-2xl text-[#111] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#777] font-medium text-[11px] sm:text-xs tracking-wide">
                  {item.subtitle}
                </p>
              </div>

              {/* CENTER IMAGE LAYOUT */}
              {item.layout === "center" && (
                <div className="absolute inset-0 flex items-center justify-center p-12 sm:p-20 z-0">
                  <motion.img
                    key={activeIndexes[i]}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={item.images[activeIndexes[i]]}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              {/* RIGHT IMAGE LAYOUT */}
              {item.layout === "right" && (
                <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] z-0 overflow-hidden">
                  <motion.img
                    key={activeIndexes[i]}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={item.images[activeIndexes[i]]}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle gradient to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfb] via-transparent to-transparent opacity-50 sm:hidden z-10"></div>
                </div>
              )}

              {/* BOTTOM CONTROLS (Dots and Arrows) */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-center justify-between z-30">
                {/* Dots Reativos */}
                <div className="flex gap-1.5 items-center">
                  {item.images.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`w-1.5 h-1.5 rotate-45 transform transition-all duration-300 ${activeIndexes[i] === dotIdx ? 'bg-[#111] scale-[1.3]' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>

                {/* Arrows Funcionais */}
                <div className="flex gap-4 text-gray-400">
                  <button
                    onClick={(e) => prevImage(e, i)}
                    className="hover:text-[#111] transition-colors focus:outline-none bg-white/50 backdrop-blur-sm p-1 rounded-full group-hover:bg-white"
                    aria-label="Anterior"
                  >
                    <ChevronLeft strokeWidth={2} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={(e) => nextImage(e, i)}
                    className="hover:text-[#111] transition-colors focus:outline-none bg-white/50 backdrop-blur-sm p-1 rounded-full group-hover:bg-white"
                    aria-label="Próxima"
                  >
                    <ChevronRight strokeWidth={2} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Overlay Hover Indicando que é Clicável (Expandir) */}
              <div className="absolute inset-0 bg-[#111]/0 group-hover:bg-[#111]/5 transition-colors duration-500 z-10 flex items-center justify-center pointer-events-none">
                <Maximize2 strokeWidth={1} className="text-[#111] opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-150 absolute top-1/2 left-[45%] md:left-1/2 -translate-y-1/2 -translate-x-1/2" size={32} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {lightboxState !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#F9F9F9]/98 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxState(null)}
          >
            <button
              className="absolute top-6 right-6 text-[#111] hover:scale-110 transition-transform z-50 p-2 bg-white/50 rounded-full"
              onClick={() => setLightboxState(null)}
              aria-label="Fechar galeria"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* Setas do Lightbox */}
            <button
              className="absolute left-2 sm:left-12 top-1/2 -translate-y-1/2 text-[#111] hover:scale-110 transition-transform z-50 p-3 bg-white/50 backdrop-blur-md rounded-full"
              onClick={prevLightboxImage}
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>

            <button
              className="absolute right-2 sm:right-12 top-1/2 -translate-y-1/2 text-[#111] hover:scale-110 transition-transform z-50 p-3 bg-white/50 backdrop-blur-md rounded-full"
              onClick={nextLightboxImage}
              aria-label="Próxima imagem"
            >
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxState.imageIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                src={galleryItems[lightboxState.categoryIdx].images[lightboxState.imageIdx]}
                alt={galleryItems[lightboxState.categoryIdx].title}
                className="max-h-[80vh] max-w-[85vw] md:max-w-[70vw] object-contain shadow-2xl bg-white p-2"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Título e Subtítulo no Lightbox */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <h3 className="font-display font-bold text-2xl text-[#111] mb-1">
                {galleryItems[lightboxState.categoryIdx].title}
              </h3>
              <p className="text-[#555] font-medium text-sm">
                {galleryItems[lightboxState.categoryIdx].subtitle} &mdash; {lightboxState.imageIdx + 1} de {galleryItems[lightboxState.categoryIdx].images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
