import { Sparkles, Hand, Scissors } from "lucide-react";

// ─── IMAGENS (substitua pelos arquivos reais do cliente) ─────────────────────
import heroImage from "@/assets/hero.webp";
import aboutImage from "@/assets/about-salon.avif";
import ctaImage from "@/assets/cta.avif";
import numerosImage from "@/assets/numeros.avif";

// Serviços — imagens das categorias
import cuidadosImg from "@/assets/cuidados.avif";
import rituaisImg from "@/assets/rituaiscorporais.avif";
import capilaresImg from "@/assets/capilares.avif";

// Galeria
import skin1 from "@/assets/skin1.avif";
import skin2 from "@/assets/skin2.avif";
import skin3 from "@/assets/skin3.avif";
import loiro1 from "@/assets/loiro1.avif";
import loiro2 from "@/assets/loiro2.avif";
import loiro3 from "@/assets/loiro3.avif";
import make1 from "@/assets/make1.avif";
import make2 from "@/assets/make2.avif";
import make3 from "@/assets/make3.avif";
import spa1 from "@/assets/spa1.avif";
import spa2 from "@/assets/spa2.avif";
import spa3 from "@/assets/spa3.avif";

// ─── TIPOS ───────────────────────────────────────────────────────────────────
type GaleriaLayout = "left" | "right" | "center";

interface GaleriaItem {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  layout: GaleriaLayout;
}

// ─── CONFIGURAÇÃO DO CLIENTE ─────────────────────────────────────────────────
// Para personalizar o site para um novo cliente, edite SOMENTE este arquivo.
// Não é necessário mexer em nenhum componente.
// ──────────────────────────────────────────────────────────────────────────────

export const CLIENT = {
  // ── Dados Gerais ──────────────────────────────────────────────────────────
  nome: "Studio Bella",
  slogan: "Realce sua beleza com quem entende do assunto",
  cidade: "Medianeira, PR",
  whatsapp: "5545999999999",
  instagram: "@studiobella",
  facebook: "", // ex: "studiobella" (deixe vazio para ocultar)
  endereco: "Rua das Flores, 123 — Centro, Medianeira - PR",

  horarios: {
    "Segunda a Sexta": "09h às 19h",
    "Sábado": "09h às 17h",
    "Domingo": "Fechado",
  } as Record<string, string>,

  // ── Hero ───────────────────────────────────────────────────────────────────
  // Cada item é uma linha do texto gigante no hero
  hero: {
    linhas: ["Studio", "Bella"],
    imagem: heroImage,
  },

  // ── Manifesto (scroll reveal) ─────────────────────────────────────────────
  manifesto: {
    // A frase usa CLIENT.nome automaticamente: "O {nome} oferece..."
    frase: "oferece um atendimento altamente premium, projetado intencionalmente para lapidar a sua melhor versão.",
    linkTexto: "Conheça o estúdio",
    linkHref: "#sobre",
  },

  // ── Sobre ──────────────────────────────────────────────────────────────────
  sobre: {
    titulos: ["ARTE", "EM CADA", "TRAÇO"],
    descricao:
      "nasceu com o propósito de transformar o cuidado estético, focando em resultados que realçam sua melhor versão. Com um compromisso profundo com o bem-estar e a excelência, criamos uma experiência inesquecível de conforto para cada mulher.",
    // A descrição usa CLIENT.nome automaticamente: "O {nome} nasceu com..."
    imagem: aboutImage,
    estatisticas: [
      { valor: 8, label: "Anos de\nExperiência" },
      { valor: 500, label: "Projetos\nConcluídos" },
    ],
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
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

  categoriasServicos: [
    {
      id: "rosto",
      label: "Cuidados com a Pele",
      title: "Cuidados\ncom a pele",
      icon: Sparkles,
      filtro: ["Sobrancelhas", "Maquiagem", "Limpeza de Pele"],
      imagem: cuidadosImg,
      descricao:
        "Realce o que há de mais bonito em você. Nossos tratamentos faciais combinam técnicas avançadas com produtos selecionados para um resultado luminoso.",
    },
    {
      id: "corpo",
      label: "Rituais Corporais",
      title: "Rituais\ncorporais",
      icon: Hand,
      filtro: ["Manicure", "Massagem Relaxante", "Drenagem Linfática"],
      imagem: rituaisImg,
      descricao:
        "Momentos de pausa e renovação. Rituais pensados para desacelerar, nutrir e conectar corpo e mente de forma profunda.",
    },
    {
      id: "cabelo",
      label: "Tratamentos Capilares",
      title: "Tratamentos\ncapilares",
      icon: Scissors,
      filtro: ["Corte", "Coloração", "Tratamento"],
      imagem: capilaresImg,
      descricao:
        "Fios saudáveis, cortes precisos e cores vibrantes. Cada detalhe é pensado para que seu cabelo conte a sua história.",
    },
  ],

  // ── Galeria ────────────────────────────────────────────────────────────────
  galeria: [
    {
      id: "skin",
      title: "Skin Glow",
      subtitle: "Hidratação Profunda",
      images: [skin1, skin2, skin3],
      layout: "left",
    },
    {
      id: "loiro",
      title: "Loiro Perfeito",
      subtitle: "Mechas e Tonalização",
      images: [loiro1, loiro2, loiro3],
      layout: "right",
    },
    {
      id: "make",
      title: "Make Glamour",
      subtitle: "Maquiagem Social",
      images: [make1, make2, make3],
      layout: "left",
    },
    {
      id: "spa",
      title: "Spa Relax",
      subtitle: "Rituais Aromáticos",
      images: [spa1, spa2, spa3],
      layout: "right",
    },
  ] as GaleriaItem[],

  // ── Depoimentos ────────────────────────────────────────────────────────────
  depoimentos: [
    {
      nome: "Ana Clara",
      papel: "Cliente Fiel",
      avatar: "https://i.pravatar.cc/150?img=47",
      nota: 5,
      texto: "Encontrar um lugar onde eu pudesse confiar de verdade não foi fácil, mas aqui eu achei mais que isso. Me sinto em casa.",
    },
    {
      nome: "Juliana M.",
      papel: "Noiva",
      avatar: "https://i.pravatar.cc/150?img=43",
      nota: 5,
      texto: "Profissionalismo e cuidado em cada detalhe. Super recomendo!",
    },
    {
      nome: "Camila R.",
      papel: "Empresária",
      avatar: "https://i.pravatar.cc/150?img=32",
      nota: 5,
      texto: "É meu refúgio semanal. Eles sabem exatamente o que fazer pra me desconectar da correria do dia a dia.",
    },
    {
      nome: "Beatriz L.",
      papel: "Microempreendedora",
      avatar: "https://i.pravatar.cc/150?img=5",
      nota: 5,
      texto: "As terapeutas são atenciosas e os resultados que tive com a pele foram maravilhosos. O espaço é lindíssimo!",
    },
    {
      nome: "Fernanda S.",
      papel: "Autônoma",
      avatar: "https://i.pravatar.cc/150?img=44",
      nota: 5,
      texto: "Me sinto outra pessoa depois de cada visita. É com certeza o melhor investimento em mim mesma.",
    },
  ],

  // ── Estatísticas (seção de números) ────────────────────────────────────────
  estatisticas: {
    imagem: numerosImage,
    itens: [
      { valor: 8, sufixo: "+", label: "Anos de experiência" },
      { valor: 500, sufixo: "+", label: "Clientes atendidas" },
    ],
  },

  // ── FAQ ─────────────────────────────────────────────────────────────────────
  faq: [
    {
      pergunta: "Como funciona a primeira avaliação?",
      resposta: "Realizamos uma análise detalhada da sua pele e entendemos seus objetivos para criar um protocolo de tratamento 100% personalizado para você.",
    },
    {
      pergunta: "Os procedimentos causam desconforto?",
      resposta: "Nossa prioridade é o seu bem-estar. Utilizamos técnicas avançadas, produtos de alta tecnologia e anestésicos tópicos para garantir uma experiência confortável e relaxante.",
    },
    {
      pergunta: "Em quanto tempo vejo os resultados?",
      resposta: "Muitos de nossos tratamentos oferecem resultados imediatos, como o brilho e a textura após uma limpeza profunda. Outros estímulos de colágeno apresentam resultados progressivos nas semanas seguintes.",
    },
    {
      pergunta: "Quais são as formas de pagamento?",
      resposta: "Aceitamos PIX, cartões de débito e crédito, com possibilidade de parcelamento dependendo do protocolo escolhido.",
    },
    {
      pergunta: "E se eu precisar remarcar meu horário?",
      resposta: "Imprevistos acontecem! Pedimos apenas que nos comunique com pelo menos 24 horas de antecedência para reorganizarmos nossa agenda sem custos adicionais.",
    },
  ],

  // Opções de turno para o formulário de agendamento
  turnos: [
    "Manhã (09h - 12h)",
    "Tarde (13h - 18h)",
    "Sem preferência específica",
  ],

  // ── Localização (detalhe completo) ─────────────────────────────────────────
  localizacao: {
    rua: "Rua Salgado Filho, 742",
    complemento: "Centro — Medianeira, PR",
    cep: "CEP 85884-000",
    descricao: "Com este mapa, você pode facilmente encontrar nossa clínica. Estamos localizados em um ponto de fácil acesso para garantir o seu conforto. Entre em contato ou veja a rota.",
    titulo: "Encontre o melhor espaço para seu autocuidado",
  },

  // ── Social CTA ─────────────────────────────────────────────────────────────
  socialCTA: {
    titulo: "Pronta para realçar sua beleza única?",
    descricao: "Acompanhe nossa rotina, dicas exclusivas de autocuidado e confira em primeira mão os resultados dos nossos tratamentos diretamente pelo Instagram.",
    imagem: ctaImage,
  },

  // ── Footer ─────────────────────────────────────────────────────────────────
  footerMarcaDagua: "STUDIO",
  footerDescricao: "Entregando as melhores experiências para que você se sinta confiante, radiante e em harmonia com você.",

  // ── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    siteUrl: "https://studiobella.com.br", // URL final do site (sem / no final)
    metaDescricao:
      "Studio Bella em Medianeira, PR. Limpeza de pele, design de sobrancelhas, maquiagem, massagem e rituais de bem-estar. Atendimento premium. Agende pelo WhatsApp!",
    ogImagem: "/og-image.jpg", // Imagem 1200×630 em public/
    geo: {
      latitude: "-25.2969",
      longitude: "-54.0943",
    },
    faixaPreco: "$$",
  },

  cores: {
    primaria: "#111",
    secundaria: "#1a1a1a",
    acento: "#f5f5f5",
  },
};
