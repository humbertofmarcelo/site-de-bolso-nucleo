import typographyConfig from "./typography.json";

export interface ArquivoFonte {
  peso: number;
  estilo?: string;
  caminho: string;
}

export interface FamiliaFonte {
  nome: string;
  tipo: "sans" | "serif" | "display";
  origem: "npm" | "local";
  pesos?: number[];
  arquivos?: ArquivoFonte[];
}

export interface PapelFonte {
  familia: string;
  peso: number;
  tamanho: string;
}

export interface TypographyConfig {
  colecao: string;
  familias: Record<string, FamiliaFonte>;
  papeis: {
    titulo: PapelFonte;
    subtitulo: PapelFonte;
    corpo: PapelFonte;
    legenda: PapelFonte;
  };
}

export const typography = typographyConfig as unknown as TypographyConfig;

/**
 * Gera os blocos @font-face e variáveis CSS globais (:root) para títulos e corpo
 */
export function gerarCssTipografia(): string {
  let css = "";

  // 1. Gera @font-face para fontes locais cadastradas
  for (const [, fam] of Object.entries(typography.familias || {})) {
    if (fam.origem === "local" && fam.arquivos) {
      for (const arq of fam.arquivos) {
        css += `
@font-face {
  font-family: "${fam.nome}";
  src: url("${arq.caminho}") format("woff2");
  font-weight: ${arq.peso};
  font-style: ${arq.estilo || "normal"};
  font-display: swap;
}`;
      }
    }
  }

  // 2. Resolve as famílias para títulos e corpo
  const familiaTitulo = typography.familias?.[typography.papeis?.titulo?.familia];
  const familiaCorpo = typography.familias?.[typography.papeis?.corpo?.familia];

  const fontTituloVal = familiaTitulo
    ? `"${familiaTitulo.nome}", ${familiaTitulo.tipo === "serif" ? "serif" : "sans-serif"}`
    : "var(--font-sans)";

  const fontCorpoVal = familiaCorpo
    ? `"${familiaCorpo.nome}", ${familiaCorpo.tipo === "serif" ? "serif" : "sans-serif"}`
    : "var(--font-sans)";

  css += `
:root {
  --font-titulos: ${fontTituloVal};
  --font-corpo: ${fontCorpoVal};
  --font-sans: ${fontCorpoVal};
}
body {
  font-family: var(--font-corpo);
}
`;

  return css;
}

/**
 * Retorna caminhos de fontes locais críticas que devem receber <link rel="preload">
 */
export function obterPreloadsFontes(): string[] {
  const preloads: string[] = [];
  const papelTitulo = typography.papeis?.titulo;
  if (!papelTitulo) return preloads;

  const familiaTitulo = typography.familias?.[papelTitulo.familia];
  if (familiaTitulo?.origem === "local" && familiaTitulo.arquivos) {
    const arq = familiaTitulo.arquivos.find((a) => a.peso === papelTitulo.peso) || familiaTitulo.arquivos[0];
    if (arq?.caminho) {
      preloads.push(arq.caminho);
    }
  }

  return preloads;
}
