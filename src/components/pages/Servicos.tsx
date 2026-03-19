import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT } from "@/config/client";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Sparkles, Hand, Scissors } from "lucide-react";

const categorias = [
  {
    id: "rosto",
    label: "Cuidados com a Pele",
    title: "Cuidados\ncom a pele",
    icon: Sparkles,
    services: CLIENT.servicos.filter((s) =>
      ["Sobrancelhas", "Maquiagem"].includes(s.nome)
    ),
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=900",
    description:
      "Realce o que há de mais bonito em você. Nossos tratamentos faciais combinam técnicas avançadas com produtos selecionados para um resultado luminoso.",
  },
  {
    id: "corpo",
    label: "Rituais Corporais",
    title: "Rituais\ncorporais",
    icon: Hand,
    services: CLIENT.servicos.filter((s) =>
      ["Manicure"].includes(s.nome)
    ),
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=900",
    description:
      "Momentos de pausa e renovação. Rituais pensados para desacelerar, nutrir e conectar corpo e mente de forma profunda.",
  },
  {
    id: "cabelo",
    label: "Tratamentos Capilares",
    title: "Tratamentos\ncapilares",
    icon: Scissors,
    services: CLIENT.servicos.filter((s) =>
      ["Corte", "Coloração", "Tratamento"].includes(s.nome)
    ),
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=900",
    description:
      "Fios saudáveis, cortes precisos e cores vibrantes. Cada detalhe é pensado para que seu cabelo conte a sua história.",
  },
];

// Preparar itens para o NavBar
const navItems = categorias.map((c) => ({
  name: c.label,
  icon: c.icon,
}));

export default function Servicos() {
  const [activeTab, setActiveTab] = useState(categorias[0].label);
  const active = categorias.find((c) => c.label === activeTab) ?? categorias[0];

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center text-center mb-12 lg:mb-16"
        >
          <p className="text-[#777] font-medium tracking-widest text-[11px] sm:text-xs uppercase mb-4 whitespace-nowrap">
            [ O QUE OFERECEMOS ]
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#111] leading-[1.1]">
            Nossos serviços
          </h2>
        </motion.div>

        {/* ── TAB BAR (Tubelight) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-16 lg:mb-20"
        >
          <NavBar
            items={navItems}
            activeTab={activeTab}
            onTabChange={(name) => setActiveTab(name)}
          />
        </motion.div>

        {/* ── CONTENT AREA ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-stretch"
          >
            {/* LEFT — Image + Category Title */}
            <div className="lg:w-[45%] flex flex-col gap-8">
              {/* Category Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl bg-gray-100">
                <img
                  src={active.image}
                  alt={active.label}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Category title overlaying bottom-left of image */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.1] whitespace-pre-line drop-shadow-lg">
                    {active.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-lg">
                {active.description}
              </p>
            </div>

            {/* RIGHT — Services List */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs font-bold tracking-widest uppercase text-[#777]">
                  {active.services.length}{" "}
                  {active.services.length === 1 ? "serviço" : "serviços"}{" "}
                  disponíveis
                </p>
                <div className="h-px flex-1 bg-gray-200 ml-6" />
              </div>

              <div className="flex flex-col divide-y divide-gray-100">
                {active.services.map((servico, idx) => (
                  <motion.div
                    key={servico.nome}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group py-6 lg:py-8 flex items-start justify-between gap-6 cursor-pointer"
                  >
                    <div className="flex-1">
                      <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-tight text-[#111] mb-2 group-hover:text-[#555] transition-colors duration-300">
                        {servico.nome}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        {servico.descricao}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0 mt-1 group-hover:border-[#111] group-hover:bg-[#111] transition-all duration-300">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400 group-hover:text-white transition-colors duration-300 -rotate-45"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
