import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/resizable-navbar";
import { FlowButton } from "@/components/ui/flow-button";
import { CLIENT } from "@/config/client";

const navItems = [
  { name: "Início", link: "#inicio" },
  { name: "Sobre", link: "#sobre" },
  { name: "Serviços", link: "#servicos" },
  { name: "Galeria", link: "#galeria" },
  { name: "Depoimentos", link: "#depoimentos" },
  { name: "Localização", link: "#localizacao" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Gostaria de agendar um horário.`;

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full">
      <Navbar>
        {/* ── Desktop ── */}
        <NavBody>
          {/* Logo */}
          <a
            href="#inicio"
            className="relative z-20 mr-4 flex items-center px-2 py-1 font-display text-xl font-bold text-black"
          >
            {CLIENT.nome}
          </a>

          {/* Links centralizados */}
          <NavItems items={navItems} />

          {/* CTA */}
          <div className="relative z-20 flex items-center">
            <FlowButton
              text="Agendar agora"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </NavBody>

        {/* ── Mobile ── */}
        <MobileNav>
          <MobileNavHeader>
            {/* Logo */}
            <a
              href="#inicio"
              className="relative z-20 flex items-center px-2 py-1 font-display text-xl font-bold text-black"
            >
              {CLIENT.nome}
            </a>

            {/* Toggle hamburger / X */}
            <MobileNavToggle
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </MobileNavHeader>

          {/* Menu drop-down mobile */}
          <MobileNavMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="w-full text-base font-medium text-neutral-700 hover:text-black transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 w-full">
              <FlowButton
                text="Agendar agora"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
