import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, MapPin, Instagram, X } from "lucide-react";
import { CLIENT } from "@/config/client";
import { BadgeGlass } from "@/components/ui/badge-glass";

// Skin Glow
import skin1 from "@/assets/skin1.avif";
import skin2 from "@/assets/skin2.avif";
import skin3 from "@/assets/skin3.avif";

// Loiro Perfeito
import loiro1 from "@/assets/loiro1.avif";
import loiro2 from "@/assets/loiro2.avif";
import loiro3 from "@/assets/loiro3.avif";

// Make Glamour
import make1 from "@/assets/make1.avif";
import make2 from "@/assets/make2.avif";
import make3 from "@/assets/make3.avif";

// Spa Relax
import spa1 from "@/assets/spa1.avif";
import spa2 from "@/assets/spa2.avif";
import spa3 from "@/assets/spa3.avif";

type LayoutType = "center" | "right" | "left";

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
    images: [skin1, skin2, skin3],
    layout: "left",
  },
  {
    id: "loiro",
    title: "Loiro Perfeito",
    subtitle: "Mechas e Tonalização",
    images: [loiro1, loiro2, loiro3],
    layout: "right",
  },
  {
    id: "make",
    title: "Make Glamour",
    subtitle: "Maquiagem Social",
    images: [make1, make2, make3],
    layout: "left",
  },
  {
    id: "spa",
    title: "Spa Relax",
    subtitle: "Rituais Aromáticos",
    images: [spa1, spa2, spa3],
    layout: "right",
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
    <section id="galeria" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center text-center mb-16 lg:mb-24"
        >
          <BadgeGlass className="mb-6">Galeria</BadgeGlass>
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
              {/* CORNER TEXT */}
              <div
                className={`absolute top-6 sm:top-8 z-20 pointer-events-none ${item.layout === "left"
                  ? "right-6 sm:right-8 text-right"
                  : "left-6 sm:left-8 text-left"
                  }`}
              >
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

              {/* LEFT IMAGE LAYOUT */}
              {item.layout === "left" && (
                <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[50%] z-0 overflow-hidden">
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
                  <div className="absolute inset-0 bg-gradient-to-l from-[#fbfbfb] via-transparent to-transparent opacity-50 sm:hidden z-10"></div>
                </div>
              )}

              {/* BOTTOM CONTROLS (Dots and Arrows) */}
              <div
                className={`absolute bottom-6 sm:bottom-8 flex items-center gap-5 sm:gap-8 z-30 ${
                  item.layout === "right" ? "left-6 sm:left-8" : "right-6 sm:right-8"
                }`}
              >
                {/* Arrows Funcionais */}
                <div className="flex gap-3 sm:gap-4 text-[#111]">
                  <button
                    onClick={(e) => prevImage(e, i)}
                    className="hover:text-gray-400 transition-colors focus:outline-none"
                    aria-label="Anterior"
                  >
                    <ChevronLeft strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={(e) => nextImage(e, i)}
                    className="hover:text-gray-400 transition-colors focus:outline-none"
                    aria-label="Próxima"
                  >
                    <ChevronRight strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Dots Reativos (Apple Style) */}
                <div className="flex gap-1.5 items-center">
                  {item.images.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndexes[i] === dotIdx ? 'w-4 bg-[#111]' : 'w-1.5 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Retirado o Overlay com botão Expandir */}
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
