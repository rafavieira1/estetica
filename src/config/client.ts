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
    primaria: "#111",
    secundaria: "#1a1a1a",
    acento: "#f5f5f5",
  },
  servicos: [
    { icone: "scissors", nome: "Corte", descricao: "Cortes modernos e clássicos para todos os estilos" },
    { icone: "sparkles", nome: "Coloração", descricao: "Técnicas modernas com produtos de alta qualidade" },
    { icone: "hand", nome: "Manicure", descricao: "Unhas impecáveis com acabamento profissional" },
    { icone: "eye", nome: "Sobrancelhas", descricao: "Design que valoriza o seu olhar" },
    { icone: "zap", nome: "Tratamento", descricao: "Hidratação e reconstrução para cabelos saudáveis" },
    { icone: "star", nome: "Maquiagem", descricao: "Make para eventos, festas e dia a dia" },
    { icone: "sparkles", nome: "Limpeza de Pele", descricao: "Renovação celular e remoção de impurezas profundas" },
    { icone: "wind", nome: "Massagem Relaxante", descricao: "Alívio de tensões e relaxamento corporal completo" },
    { icone: "droplets", nome: "Drenagem Linfática", descricao: "Redução de inchaços e melhora da circulação" },
  ],
  depoimentos: [
    { 
      nome: "Ana Clara", 
      papel: "Cliente Fiel",
      avatar: "https://i.pravatar.cc/150?img=47",
      nota: 5, 
      texto: "Encontrar um lugar onde eu pudesse confiar de verdade não foi fácil, mas aqui eu achei mais que isso. Me sinto em casa." 
    },
    { 
      nome: "Juliana M.", 
      papel: "Noiva",
      avatar: "https://i.pravatar.cc/150?img=43",
      nota: 5, 
      texto: "Profissionalismo e cuidado em cada detalhe. Super recomendo!" 
    },
    { 
      nome: "Camila R.", 
      papel: "Empresária",
      avatar: "https://i.pravatar.cc/150?img=32",
      nota: 5, 
      texto: "É meu refúgio semanal. Eles sabem exatamente o que fazer pra me desconectar da correria do dia a dia." 
    },
    { 
      nome: "Beatriz L.", 
      papel: "Microempreendedora",
      avatar: "https://i.pravatar.cc/150?img=5",
      nota: 5, 
      texto: "As terapeutas são atenciosas e os resultados que tive com a pele foram maravilhosos. O espaço é lindíssimo!" 
    },
    { 
      nome: "Fernanda S.", 
      papel: "Autônoma",
      avatar: "https://i.pravatar.cc/150?img=44",
      nota: 5, 
      texto: "Me sinto outra pessoa depois de cada visita. É com certeza o melhor investimento em mim mesma." 
    },
  ],
};
// Força a invalidação do cache do Vite para garantir que todos os 5 depoimentos sejam lidos.
