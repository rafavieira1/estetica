import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const images = [
  "https://picsum.photos/id/64/600/800",
  "https://picsum.photos/id/96/600/600",
  "https://picsum.photos/id/177/600/900",
  "https://picsum.photos/id/192/600/700",
  "https://picsum.photos/id/237/600/600",
  "https://picsum.photos/id/239/600/800",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Galeria() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Nosso trabalho
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">
            Galeria
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={src}
                alt={`Galeria ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <Maximize2 className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-6 right-6 text-accent hover:text-primary transition-colors"
              onClick={() => setLightboxIdx(null)}
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[lightboxIdx]}
              alt="Galeria ampliada"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
