import { cn } from "@/lib/utils";

interface BadgeGlassProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string; // Para posições customizadas como absolute, mb-4, etc.
}

export function BadgeGlass({ children, variant = "light", className }: BadgeGlassProps) {
  return (
    <div className={cn(
      "relative group inline-flex overflow-hidden rounded-full p-[1px] cursor-default transition-shadow duration-700",
      variant === "light" 
        ? "bg-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
        : "bg-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
      className
    )}>
      {/* Linha luminosa giratória na borda */}
      <span className={cn(
        "absolute inset-[-1000%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700",
        variant === "light"
          ? "bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#a1a1aa_50%,transparent_100%)]"
          : "bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#fafafa_50%,transparent_100%)]"
      )} />
      
      {/* Badge interno vítreo e volumétrico (Claymorphism) */}
      <span className={cn(
        "relative z-10 inline-flex items-center justify-center px-5 py-2 rounded-full backdrop-blur-md font-medium tracking-widest text-[10px] sm:text-[11px] uppercase whitespace-nowrap transition-colors duration-700",
        variant === "light"
          ? "bg-gradient-to-b from-white to-gray-50/80 border border-white text-[#333] shadow-[inset_0_-3px_5px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(255,255,255,0.4)]"
          : "bg-gradient-to-b from-[#222] to-[#111]/80 border border-[#333] text-white/90 group-hover:text-white shadow-[inset_0_-3px_5px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.05)]"
      )}>
        {children}
      </span>
    </div>
  );
}
