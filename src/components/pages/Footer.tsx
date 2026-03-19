import { Instagram, MessageCircle, Facebook, Sparkles } from "lucide-react";
import { CLIENT } from "@/config/client";

const companyLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
];

const serviceLinks = [
  { label: "Nossos Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const contactLinks = [
  { label: "Localização", href: "#localizacao" },
  { label: "WhatsApp", href: `https://wa.me/${CLIENT.whatsapp}` },
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}`;

  return (
    <footer className="relative overflow-hidden bg-[#fafafa] pt-16 lg:pt-24 pb-32 lg:pb-48 flex flex-col justify-end">

      {/* Marca D'Água STUDIO no fundo - renderizada antes para ficar no z-0 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none select-none z-0 w-full overflow-hidden">
        <span className="font-serif text-[25vw] md:text-[22vw] lg:text-[20vw] font-black uppercase tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-gray-200/80 to-[#fafafa] whitespace-nowrap translate-y-[23%] lg:translate-y-[33%]">
          STUDIO
        </span>
      </div>

      {/* Container principal para o card */}
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        {/* Card Branco */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.03)] px-8 py-10 md:px-12 md:py-12 lg:px-16 lg:py-12 border border-gray-100/60">

          {/* Top Section do Card */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-12">

            {/* Left Area - Logo & Descrição */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#111] rounded-lg flex items-center justify-center text-white shadow-sm">
                  <Sparkles size={16} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111]">{CLIENT.nome}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                {CLIENT.slogan} Entregando as melhores experiências para que você se sinta confiante, radiante e em harmonia com você.
              </p>

              {/* Redes Sociais com ícones minimalistas */}
              <div className="flex gap-4">
                <a
                  href={`https://instagram.com/${CLIENT.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111] hover:text-[#6C48F5] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={2.5} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111] hover:text-[#6C48F5] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} strokeWidth={2.5} />
                </a>
                <a
                  href="#"
                  className="text-[#111] hover:text-[#6C48F5] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Right Area - Grid de Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-20">

              {/* Coluna 1 */}
              <div>
                <h4 className="font-bold text-[#111] mb-4 text-sm">Empresa</h4>
                <nav className="flex flex-col gap-3">
                  {companyLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-gray-500 hover:text-[#111] hover:underline transition-all text-xs sm:text-sm font-medium">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Coluna 2 */}
              <div>
                <h4 className="font-bold text-[#111] mb-4 text-sm">Serviços</h4>
                <nav className="flex flex-col gap-3">
                  {serviceLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-gray-500 hover:text-[#111] hover:underline transition-all text-xs sm:text-sm font-medium">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Coluna 3 */}
              <div>
                <h4 className="font-bold text-[#111] mb-4 text-sm">Contato</h4>
                <nav className="flex flex-col gap-3">
                  {contactLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-gray-500 hover:text-[#111] hover:underline transition-all text-xs sm:text-sm font-medium">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

            </div>
          </div>

          {/* Bottom Bar do Card */}
          <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} {CLIENT.nome}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#111] transition-colors underline decoration-transparent hover:decoration-[#111] underline-offset-4">Política de Privacidade</a>
              <a href="#" className="hover:text-[#111] transition-colors underline decoration-transparent hover:decoration-[#111] underline-offset-4">Termos de Serviço</a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
