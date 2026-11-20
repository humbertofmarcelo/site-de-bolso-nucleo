/**
 * Catálogo e Definição dos Modelos de Layout do Site de Bolso
 */

export type TemaSecao = "light" | "dark" | "soft" | "primary";

export interface SecaoDef {
  id: string;
  tipo: string;
  variante?: string;
  temaPadrao?: TemaSecao;
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
      { id: "demandas", tipo: "demandas", temaPadrao: "light" },
      { id: "servicos", tipo: "servicos", temaPadrao: "dark" },
      { id: "sobre", tipo: "sobre", temaPadrao: "light" },
      { id: "modalidades", tipo: "modalidades", temaPadrao: "dark" },
      { id: "faq", tipo: "faq", temaPadrao: "light" },
      { id: "contato", tipo: "contato", temaPadrao: "dark" },
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
      { id: "para-quem", tipo: "para-quem-pb", temaPadrao: "light" },
      { id: "servicos", tipo: "servicos-pb", temaPadrao: "soft" },
      { id: "passos", tipo: "passos-pb", temaPadrao: "light" },
      { id: "faq", tipo: "faq-pb", temaPadrao: "soft" },
      { id: "contato", tipo: "contato-pb", temaPadrao: "dark" },
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
      { id: "inicio", tipo: "hero-ludico", temaPadrao: "light" },
      { id: "por-que-terapia", tipo: "por-que-terapia", temaPadrao: "dark" },
      { id: "abordagem", tipo: "abordagem-ludica", temaPadrao: "light" },
      { id: "como-funciona", tipo: "stepper-ludico", temaPadrao: "dark" },
      { id: "mini-cta", tipo: "mini-cta-ludico", temaPadrao: "primary" },
      { id: "faq", tipo: "faq-ludico", temaPadrao: "dark" },
      { id: "contato", tipo: "contato-ludico", temaPadrao: "light" },
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
      { id: "inicio", tipo: "hero-organico", temaPadrao: "light" },
      { id: "apresentacao", tipo: "apresentacao-organica", temaPadrao: "light" },
      { id: "servicos", tipo: "servicos-organicos", temaPadrao: "light" },
      { id: "convite", tipo: "convite-organico", temaPadrao: "dark" },
      { id: "faq", tipo: "faq-organico", temaPadrao: "light" },
      { id: "contato", tipo: "rodape-organico", temaPadrao: "dark" },
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
      { id: "inicio", tipo: "hero-estruturado", temaPadrao: "dark" },
      { id: "motivos", tipo: "motivos-grid", temaPadrao: "light" },
      { id: "sobre", tipo: "sobre-estruturado", temaPadrao: "light" },
      { id: "agendamento", tipo: "agendamento-info", temaPadrao: "dark" },
      { id: "faq", tipo: "faq-estruturado", temaPadrao: "light" },
      { id: "contato", tipo: "contato-estruturado", temaPadrao: "dark" },
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
      { id: "inicio", tipo: "hero-vibrante", temaPadrao: "dark" },
      { id: "como-ajudar", tipo: "como-ajudar-vibrante", temaPadrao: "light" },
      { id: "quando-buscar", tipo: "quando-buscar-vibrante", temaPadrao: "dark" },
      { id: "sobre", tipo: "sobre-vibrante", temaPadrao: "light" },
      { id: "processo", tipo: "processo-vibrante", temaPadrao: "light" },
      { id: "faq", tipo: "faq-vibrante", temaPadrao: "dark" },
      { id: "contato", tipo: "contato-vibrante", temaPadrao: "dark" },
    ],
  },
  "silvia-leticia": {
    id: "silvia-leticia",
    aliases: ["modelo-7", "modelo7", "volpatto-malta"],
    nome: "Silvia & Letícia",
    descricao: "Editorial & Orgânico — Mescla a Hero, Modalidades, FAQ e Contato do modelo Silvia Volpatto com os Serviços e Apresentação do modelo Letícia Malta",
    paletaPadrao: "volpatto",
    colecaoPadrao: "editorial",
    secoes: [
      {
        id: "inicio",
        tipo: "hero-silvia-leticia",
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
      { id: "acolhimento", tipo: "frase-silvia-leticia", temaPadrao: "light" },
      { id: "servicos", tipo: "servicos-silvia-leticia", temaPadrao: "light" },
      { id: "sobre", tipo: "sobre-silvia-leticia", temaPadrao: "light" },
      { id: "modalidades", tipo: "modalidades-silvia-leticia", temaPadrao: "dark" },
      { id: "faq", tipo: "faq-silvia-leticia", temaPadrao: "light" },
      { id: "contato", tipo: "contato-silvia-leticia", temaPadrao: "dark" },
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
