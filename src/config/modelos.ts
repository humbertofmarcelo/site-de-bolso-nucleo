/**
 * Catálogo e Definição dos Modelos de Layout do Site de Bolso
 */

export interface SecaoDef {
  id: string;
  tipo: string;
  variante?: string;
  [key: string]: any;
}

export interface ModeloDef {
  id: string;
  aliases: string[];
  nome: string;
  descricao: string;
  paletaPadrao: string;
  colecaoPadrao: string;
  secoes: SecaoDef[];
}

export const CATALOGO_MODELOS: Record<string, ModeloDef> = {
  "silvia-volpatto": {
    id: "silvia-volpatto",
    aliases: ["modelo-1", "modelo1", "volpatto", "editorial"],
    nome: "Silvia Volpatto",
    descricao: "Editorial Terroso / Atual — Design elegante com fotografia ampla e seções acolhedoras",
    paletaPadrao: "volpatto",
    colecaoPadrao: "editorial",
    secoes: [
      {
        id: "inicio",
        tipo: "hero",
        variante: "overlay",
        mobile: {
          gradiente: "nenhum",
          tema_texto: "light",
          tema_texto_topo: "dark",
        },
        desktop: {
          fundo: "gradiente",
          direcao_gradiente: "light-para-dark",
          extensao_gradiente: 45,
          gradiente: "nenhum",
          tema_texto: "dark",
        },
      },
      { id: "demandas", tipo: "demandas" },
      { id: "servicos", tipo: "servicos" },
      { id: "sobre", tipo: "sobre" },
      { id: "modalidades", tipo: "modalidades" },
      { id: "faq", tipo: "faq" },
      { id: "contato", tipo: "contato" },
    ],
  },
  "gabriela-alcantara": {
    id: "gabriela-alcantara",
    aliases: ["modelo-2", "modelo2", "mariana-nogueira", "classico-pb"],
    nome: "Gabriela Alcântara",
    descricao: "Editorial P&B / Clássico — Alto contraste, manchete com foto de impacto e passos numerados",
    paletaPadrao: "classico-pb",
    colecaoPadrao: "editorial",
    secoes: [
      {
        id: "inicio",
        tipo: "hero-pb",
        mobile: {
          fundo: "light",
          tema_texto: "dark",
          variante_botao: "dark",
        },
        desktop: {
          fundo: "dark",
          tema_texto: "light",
          variante_botao: "light",
        },
      },
      { id: "para-quem", tipo: "para-quem-pb" },
      { id: "servicos", tipo: "servicos-pb" },
      { id: "passos", tipo: "passos-pb" },
      { id: "faq", tipo: "faq-pb" },
      { id: "contato", tipo: "contato-pb" },
    ],
  },
  "amanda-botelho": {
    id: "amanda-botelho",
    aliases: ["modelo-3", "modelo3", "jaqueline-ramos", "ludico-lilas"],
    nome: "Amanda Botelho",
    descricao: "Lúdico Lilás / Gen-Z — Neo-brutalismo suave com checklist, notas adesivas e timeline de passos",
    paletaPadrao: "ludico-lilas",
    colecaoPadrao: "editorial",
    secoes: [
      { id: "inicio", tipo: "hero-ludico" },
      { id: "por-que-terapia", tipo: "por-que-terapia" },
      { id: "abordagem", tipo: "abordagem-ludica" },
      { id: "como-funciona", tipo: "stepper-ludico" },
      { id: "mini-cta", tipo: "mini-cta-ludico" },
      { id: "faq", tipo: "faq-ludico" },
      { id: "contato", tipo: "contato-ludico" },
    ],
  },
  "leticia-malta": {
    id: "leticia-malta",
    aliases: ["modelo-4", "modelo4", "minimal-sereno", "organico-salvia"],
    nome: "Letícia Malta",
    descricao: "Orgânico Sálvia / Minimalista — Tons de areia e sálvia, fotografia de paisagem e ícones orgânicos",
    paletaPadrao: "salvia",
    colecaoPadrao: "editorial",
    secoes: [
      { id: "inicio", tipo: "hero-organico" },
      { id: "apresentacao", tipo: "apresentacao-organica" },
      { id: "servicos", tipo: "servicos-organicos" },
      { id: "convite", tipo: "convite-organico" },
      { id: "faq", tipo: "faq-organico" },
      { id: "contato", tipo: "rodape-organico" },
    ],
  },
  "ricardo-costa": {
    id: "ricardo-costa",
    aliases: ["modelo-5", "modelo5", "eduardo-sousa", "azul-confiante"],
    nome: "Ricardo Costa",
    descricao: "Estruturado Azul / TCC — Masculino corporativo, grade com 8 motivos e informações de agendamento",
    paletaPadrao: "azul-confiante",
    colecaoPadrao: "editorial",
    secoes: [
      { id: "inicio", tipo: "hero-estruturado" },
      { id: "motivos", tipo: "motivos-grid" },
      { id: "sobre", tipo: "sobre-estruturado" },
      { id: "agendamento", tipo: "agendamento-info" },
      { id: "faq", tipo: "faq-estruturado" },
      { id: "contato", tipo: "contato-estruturado" },
    ],
  },
  "bruno-freitas": {
    id: "bruno-freitas",
    aliases: ["modelo-6", "modelo6", "lucas-santos", "vibrante-roxo"],
    nome: "Bruno Freitas",
    descricao: "Vibrante Roxo & Laranja — Design de alta energia com cartões acolhedores e chamada calorosa",
    paletaPadrao: "vibrante-roxo",
    colecaoPadrao: "editorial",
    secoes: [
      { id: "inicio", tipo: "hero-vibrante" },
      { id: "como-ajudar", tipo: "como-ajudar-vibrante" },
      { id: "quando-buscar", tipo: "quando-buscar-vibrante" },
      { id: "sobre", tipo: "sobre-vibrante" },
      { id: "processo", tipo: "processo-vibrante" },
      { id: "faq", tipo: "faq-vibrante" },
      { id: "contato", tipo: "contato-vibrante" },
    ],
  },
};

/**
 * Resolve o modelo a partir do identificador ou alias
 */
export function resolverModelo(idOuAlias?: string): ModeloDef {
  const chave = (idOuAlias || "silvia-volpatto").toLowerCase().trim();

  if (CATALOGO_MODELOS[chave]) {
    return CATALOGO_MODELOS[chave];
  }

  for (const modelo of Object.values(CATALOGO_MODELOS)) {
    if (modelo.aliases.includes(chave)) {
      return modelo;
    }
  }

  return CATALOGO_MODELOS["silvia-volpatto"];
}

