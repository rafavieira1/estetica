import { motion } from "framer-motion";
import { CLIENT } from "@/config/client";
import heroImage from "@/assets/hero.png";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-white">

      {/* Huge Background Text */}
      <div className="absolute top-[20%] sm:top-[12%] left-0 w-full flex justify-between px-4 sm:px-12 z-0 pb-16">
        <h1 className="font-serif w-full flex justify-between text-[16vw] xl:text-[14vw] font-black leading-none tracking-tighter text-[#111] uppercase select-none pointer-events-none">
          <span className="-ml-[2vw] sm:-ml-[0vw]">Studi<span className="tracking-tight">o</span></span>
          <span className="-mr-[2vw] sm:-mr-[0vw]">B<span className="tracking-tight">ell</span>a</span>
        </h1>
      </div>

      {/* Main Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] xl:max-w-[1200px] h-[60vh] sm:h-[75vh] z-10 flex items-end justify-center pointer-events-none">
        <div
          className="relative w-full h-full"
          style={{
            maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
          }}
        >
          <img
            src={heroImage}
            alt={CLIENT.nome}
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </div>

      {/* Bottom Interface */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center md:items-end w-full px-6 sm:px-12 pb-12 gap-8 md:gap-4 mx-auto max-w-[1400px]">


      </div>
    </section>
  );
}
