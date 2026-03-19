import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CLIENT } from "@/config/client";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);

  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Gostaria de agendar um horário.`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-display text-2xl font-bold text-secondary">
          {CLIENT.nome}
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Agendar agora
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-secondary/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-card shadow-2xl p-8 flex flex-col animate-fade-up">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-8 text-foreground"
              aria-label="Fechar menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-xl text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-full text-center font-semibold"
              >
                Agendar agora
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
