# 🎨 Template Landing Page — Estética & Beleza

## Contexto

Este projeto é um **template reutilizável** de landing page para clínicas de estética, salões de beleza e espaços de autocuidado. Ele foi construído com:

- **Vite + React + TypeScript**
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones

### Princípio Fundamental

> **Toda personalização de cliente está centralizada em um ÚNICO arquivo:**
> `src/config/client.ts`
>
> **Não é necessário mexer em nenhum componente.** Todos os componentes leem dados dinamicamente desse arquivo.

---

## Estrutura do Projeto

```
src/
├── config/
│   └── client.ts          ← ÚNICO ARQUIVO QUE DEVE SER EDITADO
├── assets/                ← Imagens do cliente (substituir arquivos)
├── components/
│   ├── pages/             ← Componentes das seções (NÃO MEXER)
│   │   ├── Hero.tsx
│   │   ├── Sobre.tsx
│   │   ├── Manifesto.tsx
│   │   ├── Servicos.tsx
│   │   ├── Galeria.tsx
│   │   ├── Depoimentos.tsx
│   │   ├── Estatisticas.tsx
│   │   ├── AgendamentoFAQ.tsx
│   │   ├── SocialCTA.tsx
│   │   ├── Localizacao.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── BotaoWhatsApp.tsx
│   └── ui/                ← Componentes reutilizáveis de UI (NÃO MEXER)
└── index.css              ← Estilos globais e fontes
```

---

## Como Personalizar para um Novo Cliente

### Passo 1 — Substituir imagens (`src/assets/` e `public/`)

Substitua os seguintes arquivos mantendo os **mesmos nomes** (ou altere os imports no `client.ts`):

| Arquivo | Onde aparece | Tamanho recomendado |
|---|---|---|
| `public/favicon.svg` | Ícone da aba do navegador | Qualquer SVG ou ICO |
| `public/og-image.jpg` | Prévia ao enviar link no WhatsApp/Instagram | 1200×630px, JPG/PNG |
| `src/assets/hero.webp` | Hero (imagem principal) | 1200×1600px, WebP |
| `src/assets/about-salon.avif` | Seção Sobre | 800×1000px, AVIF |
| `src/assets/cta.avif` | Social CTA (banner) | 1200×800px, AVIF |
| `src/assets/numeros.avif` | Seção Estatísticas (fundo) | 1400×600px, AVIF |
| `src/assets/cuidados.avif` | Tab Serviços: Cuidados com a Pele | 800×600px, AVIF |
| `src/assets/rituaiscorporais.avif` | Tab Serviços: Rituais Corporais | 800×600px, AVIF |
| `src/assets/capilares.avif` | Tab Serviços: Tratamentos Capilares | 800×600px, AVIF |
| `src/assets/skin1.avif`, etc. | Galeria: Skin Glow | 800×1000px, AVIF |
| `src/assets/loiro1.avif`, etc. | Galeria: Loiro Perfeito | 800×1000px, AVIF |
| `src/assets/make1.avif`, etc. | Galeria: Make Glamour | 800×1000px, AVIF |
| `src/assets/spa1.avif`, etc. | Galeria: Spa Relax | 800×1000px, AVIF |

> **Dica:** Use formato AVIF ou WebP para melhor performance. As imagens da galeria vêm em grupos de 3 por categoria.

### Passo 2 — Editar `src/config/client.ts`

Abra o arquivo e edite **somente os valores** dentro do objeto `CLIENT`. Abaixo está a referência completa de cada seção:

---

#### 📋 Dados Gerais

```ts
nome: "Studio Bella",              // Nome do negócio (aparece no Header, Footer, Manifesto, título da aba)
slogan: "Realce sua beleza...",     // Slogan (aparece no Footer, meta description)
cidade: "Medianeira, PR",          // Cidade
whatsapp: "5545999999999",         // WhatsApp COM código do país, sem +, sem espaços
instagram: "@studiobella",         // Instagram COM @
facebook: "",                       // Handle do Facebook (deixe "" para ocultar ícone no Footer)
endereco: "Rua das Flores, 123...", // Endereço completo (usado no Google Maps embed)
```

#### 🕐 Horários

```ts
horarios: {
  "Segunda a Sexta": "09h às 19h",
  "Sábado": "09h às 17h",
  "Domingo": "Fechado",
},
```

Pode adicionar ou remover dias livremente.

#### 🖼️ Hero

```ts
hero: {
  linhas: ["Studio", "Bella"],  // Cada item = uma linha do texto gigante no hero
  imagem: heroImage,             // Imagem principal (import no topo do arquivo)
},
```

#### ✨ Manifesto (seção com animação de scroll)

```ts
manifesto: {
  // A frase é precedida automaticamente por CLIENT.nome
  // Ex: "Studio Bella oferece um atendimento..."
  frase: "oferece um atendimento altamente premium...",
  linkTexto: "Conheça o estúdio",
  linkHref: "#sobre",
},
```

#### 📖 Sobre

```ts
sobre: {
  titulos: ["ARTE", "EM CADA", "TRAÇO"],  // Texto vertical grande (1 palavra por linha)
  descricao: "nasceu com o propósito...",   // Precedido automaticamente por CLIENT.nome
  imagem: aboutImage,
  estatisticas: [
    { valor: 8, label: "Anos de\nExperiência" },
    { valor: 500, label: "Projetos\nConcluídos" },
  ],
},
```

#### 💅 Serviços

Dois níveis: a **lista de serviços** e as **categorias** (tabs):

```ts
// Lista completa de serviços
servicos: [
  { icone: "scissors", nome: "Corte", descricao: "Cortes modernos..." },
  { icone: "sparkles", nome: "Coloração", descricao: "Técnicas modernas..." },
  // ... adicione quantos quiser
],

// Categorias (tabs na seção de serviços)
categoriasServicos: [
  {
    id: "rosto",
    label: "Cuidados com a Pele",        // Nome da aba
    title: "Cuidados\ncom a pele",       // Título sobre a imagem (\n = quebra de linha)
    icon: Sparkles,                       // Ícone do Lucide (importar no topo)
    filtro: ["Sobrancelhas", "Maquiagem", "Limpeza de Pele"],  // Deve bater com nomes em servicos[]
    imagem: cuidadosImg,
    descricao: "Realce o que há de mais bonito...",
  },
  // ... adicione mais categorias
],
```

> **Importante:** O `filtro` deve conter exatamente os mesmos nomes que aparecem no campo `nome` dos serviços.

#### 🖼️ Galeria

```ts
galeria: [
  {
    id: "skin",                            // Identificador único
    title: "Skin Glow",                    // Título exibido
    subtitle: "Hidratação Profunda",       // Subtítulo
    images: [skin1, skin2, skin3],         // Exatamente 3 imagens (imports no topo)
    layout: "left",                        // "left" | "right" | "center"
  },
  // ... adicione mais categorias (recomendado: 4 itens)
],
```

#### ⭐ Depoimentos

```ts
depoimentos: [
  {
    nome: "Ana Clara",
    papel: "Cliente Fiel",
    avatar: "https://i.pravatar.cc/150?img=47",  // URL ou import local
    nota: 5,                                       // 1 a 5
    texto: "Encontrar um lugar onde...",
  },
  // Recomendado: 5 depoimentos
],
```

#### 📊 Estatísticas

```ts
estatisticas: {
  imagem: numerosImage,         // Imagem de fundo
  itens: [
    { valor: 8, sufixo: "+", label: "Anos de experiência" },
    { valor: 500, sufixo: "+", label: "Clientes atendidas" },
  ],
},
```

#### ❓ FAQ

```ts
faq: [
  {
    pergunta: "Como funciona a primeira avaliação?",
    resposta: "Realizamos uma análise detalhada...",
  },
  // Adicione quantas perguntas quiser
],
```

#### ⏰ Turnos (opções no formulário de agendamento)

```ts
turnos: [
  "Manhã (09h - 12h)",
  "Tarde (13h - 18h)",
  "Sem preferência específica",   // Último item = padrão selecionado
],
```

#### 📍 Localização

```ts
localizacao: {
  rua: "Rua Salgado Filho, 742",
  complemento: "Centro — Medianeira, PR",
  cep: "CEP 85884-000",
  titulo: "Encontre o melhor espaço para seu autocuidado",
  descricao: "Com este mapa, você pode...",
},
```

> O mapa do Google é gerado automaticamente a partir do `endereco` nos dados gerais.

#### 📱 Social CTA

```ts
socialCTA: {
  titulo: "Pronta para realçar sua beleza única?",
  descricao: "Acompanhe nossa rotina...",
  imagem: ctaImage,
},
```

#### 🦶 Footer

```ts
footerMarcaDagua: "STUDIO",        // Texto gigante no fundo do footer
footerDescricao: "Entregando...",   // Texto descritivo abaixo do nome
```

#### 🔎 SEO e Otimização para Buscas (Google, Redes Sociais)

```ts
seo: {
  siteUrl: "https://studiobella.com.br", // URL final de produção (sem / no final)
  metaDescricao: "Studio Bella em Medianeira...", // Descrição que aparece no Google e Meta tags
  ogImagem: "/og-image.jpg", // Imagem usada quando envia o link (WhatsApp, IG) - arquivo em public/
  geo: {
    latitude: "-25.2969",    // Usado no schema do Google Maps para SEO Local
    longitude: "-54.0943",
  },
  faixaPreco: "$$",
},
```

> **Atenção:** Você também precisa editar o arquivo `public/sitemap.xml` e alterar a `<loc>` interna para a `siteUrl` correspondente do cliente. Esse arquivo avisa o Google de que o site deve ser lido.

#### 🎨 Cores (referência, não alteram automaticamente o tema)

```ts
cores: {
  primaria: "#111",
  secundaria: "#1a1a1a",
  acento: "#f5f5f5",
},
```

### Passo 3 — Testar

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
```

---

## Regras Importantes

1. **NÃO edite componentes** em `src/components/` — eles leem tudo do `client.ts`
2. **NÃO remova ou renomeie** campos do `CLIENT` — os componentes esperam que todos existam
3. **Imagens da galeria** devem vir em **grupos de 3** por categoria
4. Os **nomes dos serviços** no `filtro` das categorias devem bater **exatamente** com o campo `nome` na lista `servicos[]`
5. O campo `facebook` pode ficar vazio `""` — o ícone será ocultado automaticamente
6. Para adicionar **ícones** nas categorias de serviço, importe-os do `lucide-react` no topo do arquivo

---

## Resumo Rápido

| Quero mudar... | Editar em `client.ts`... |
|---|---|
| Nome do negócio | `nome` |
| Foto principal | `hero.imagem` + substituir arquivo em assets |
| Texto do hero | `hero.linhas` |
| Serviços oferecidos | `servicos[]` e `categoriasServicos[]` |
| Fotos da galeria | `galeria[].images` + substituir arquivos em assets |
| Depoimentos | `depoimentos[]` |
| Perguntas do FAQ | `faq[]` |
| Horários de funcionamento | `horarios` |
| Endereço / mapa | `endereco` e `localizacao` |
| Redes sociais | `whatsapp`, `instagram`, `facebook` |
| Números (anos, clientes) | `sobre.estatisticas` e `estatisticas.itens` |
| Texto do footer | `footerMarcaDagua` e `footerDescricao` |
| URL do Site e SEO Local | `seo.siteUrl`, `seo.metaDescricao`, `seo.geo` |
| Favicon da Aba | Substituir arquivo `public/favicon.svg` |
| Imagem de Compartilhamento | `seo.ogImagem` e arquivo `public/og-image.jpg` |
| URL base para indexação | Atualizar manual no `public/sitemap.xml` |