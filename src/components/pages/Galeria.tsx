import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

type LayoutType = "center" | "right";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  layout: LayoutType;
}

const galleryItems: GalleryItem[] = [
  {
    id: "skin",
    title: "Skin Glow",
    subtitle: "Hidratação Profunda",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
    layout: "center",
  },
  {
    id: "loiro",
    title: "Loiro Perfeito",
    subtitle: "Mechas e Tonalização",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    layout: "right",
  },
  {
    id: "make",
    title: "Make Glamour",
    subtitle: "Maquiagem Social",
    image: "https://images.unsplash.com/photo-1512496015851-a1fb8dc8a679?w=800&q=80",
    layout: "right",
  },
  {
    id: "spa",
    title: "Spa Relax",
    subtitle: "Rituais Aromáticos",
    image: "https://images.unsplash.com/photo-1608248593842-8d76e3368add?w=800&q=80",
    layout: "center",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Galeria() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#111] leading-[0.85]">
            NOSSO<br />TRABALHO
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
              onClick={() => setLightboxIdx(i)}
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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              {/* RIGHT IMAGE LAYOUT */}
              {item.layout === "right" && (
                <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle gradient to ensure text readability if needed, though reference uses solid cut */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfb] via-transparent to-transparent opacity-50 sm:hidden"></div>
                </div>
              )}

              {/* BOTTOM CONTROLS */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-center justify-between z-20">
                {/* Dots (Decorativos seguindo a imagem) */}
                <div className="flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-[#111] rotate-45 transform transition-transform group-hover:scale-125"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rotate-45"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rotate-45"></div>
                </div>

                {/* Arrows (Decorativas) */}
                <div className="flex gap-4 text-gray-400">
                  <span className="hover:text-[#111] transition-colors"><ChevronLeft strokeWidth={1.5} className="w-5 h-5 sm:w-6 sm:h-6" /></span>
                  <span className="hover:text-[#111] transition-colors"><ChevronRight strokeWidth={1.5} className="w-5 h-5 sm:w-6 sm:h-6" /></span>
                </div>
              </div>

              {/* Overlay Hover Indicando que é Clicável (Expandir) */}
              <div className="absolute inset-0 bg-[#111]/0 group-hover:bg-[#111]/5 transition-colors duration-500 z-10 flex items-center justify-center">
                <Maximize2 strokeWidth={1} className="text-[#111] opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-150 absolute top-1/2 left-[45%] md:left-1/2 -translate-y-1/2 -translate-x-1/2" size={32} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#F9F9F9]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-6 right-6 text-[#111] hover:scale-110 transition-transform"
              onClick={() => setLightboxIdx(null)}
              aria-label="Fechar galeria"
            >
              <X size={40} strokeWidth={1.5} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
              src={galleryItems[lightboxIdx].image}
              alt={galleryItems[lightboxIdx].title}
              className="max-h-[85vh] max-w-[90vw] md:max-w-[70vw] object-contain shadow-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
