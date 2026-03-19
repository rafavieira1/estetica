export const CLIENT = {
  nome: "Studio Bella",
  slogan: "Realce sua beleza com quem entende do assunto",
  cidade: "Medianeira, PR",
  whatsapp: "5545999999999",
  instagram: "@studiobella",
  endereco: "Rua das Flores, 123 — Centro, Medianeira - PR",
  horarios: {
    "Segunda a Sexta": "09h às 19h",
    "Sábado": "09h às 17h",
    "Domingo": "Fechado",
  } as Record<string, string>,
  cores: {
    primaria: "#C9A96E",
    secundaria: "#1a1a1a",
    acento: "#f5f0ea",
  },
  servicos: [
    { icone: "scissors", nome: "Corte", descricao: "Cortes modernos e clássicos para todos os estilos" },
    { icone: "sparkles", nome: "Coloração", descricao: "Técnicas modernas com produtos de alta qualidade" },
    { icone: "hand", nome: "Manicure", descricao: "Unhas impecáveis com acabamento profissional" },
    { icone: "eye", nome: "Sobrancelhas", descricao: "Design que valoriza o seu olhar" },
    { icone: "zap", nome: "Tratamento", descricao: "Hidratação e reconstrução para cabelos saudáveis" },
    { icone: "star", nome: "Maquiagem", descricao: "Make para eventos, festas e dia a dia" },
  ],
  depoimentos: [
    { nome: "Ana Clara", nota: 5, texto: "Melhor salão da cidade! Atendimento incrível e resultado perfeito." },
    { nome: "Juliana M.", nota: 5, texto: "Profissionalismo e cuidado em cada detalhe. Super recomendo!" },
    { nome: "Fernanda S.", nota: 5, texto: "Me sinto outra pessoa depois de cada visita. Adorei!" },
  ],
};
