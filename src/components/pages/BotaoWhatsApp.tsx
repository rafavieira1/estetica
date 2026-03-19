import { MessageCircle } from "lucide-react";
import { CLIENT } from "@/config/client";

export default function BotaoWhatsApp() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Gostaria de mais informações.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco
      </span>
      <div
        className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        style={{ animation: "whatsapp-pulse 2s infinite" }}
      >
        <MessageCircle className="text-primary-foreground" size={30} />
      </div>
    </a>
  );
}
