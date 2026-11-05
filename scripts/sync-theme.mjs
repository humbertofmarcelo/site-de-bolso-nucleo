import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ALIASES_MODELOS = {
  "modelo-1": "silvia-volpatto",
  "modelo1": "silvia-volpatto",
  "volpatto": "silvia-volpatto",
  "modelo-2": "gabriela-alcantara",
  "modelo2": "gabriela-alcantara",
  "mariana-nogueira": "gabriela-alcantara",
  "modelo-3": "amanda-botelho",
  "modelo3": "amanda-botelho",
  "jaqueline-ramos": "amanda-botelho",
  "modelo-4": "leticia-malta",
  "modelo4": "leticia-malta",
  "minimal-sereno": "leticia-malta",
  "modelo-5": "ricardo-costa",
  "modelo5": "ricardo-costa",
  "eduardo-sousa": "ricardo-costa",
  "modelo-6": "bruno-freitas",
  "modelo6": "bruno-freitas",
  "lucas-santos": "bruno-freitas",
};

const PALETAS_PADRAO_MODELO = {
  "silvia-volpatto": "volpatto",
  "gabriela-alcantara": "classico-pb",
  "amanda-botelho": "ludico-lilas",
  "leticia-malta": "salvia",
  "ricardo-costa": "azul-confiante",
  "bruno-freitas": "vibrante-roxo",
};

/**
 * Garante que src/styles/global.css importe exatamente a paleta e coleção configuradas.
 * Prioridade:
 * 1. cliente.json (paleta explícita)
 * 2. cliente.json (paleta padrão do modelo definido)
 * 3. site.json (paleta)
 * 4. Fallback: "volpatto"
 */
export function sincronizarTema(root = process.cwd()) {
  const sitePath = join(root, "src/config/site.json");
  const clientePath = join(root, "src/content/cliente.json");
  const globalCssPath = join(root, "src/styles/global.css");

  if (!existsSync(globalCssPath)) return false;

  let site = {};
  if (existsSync(sitePath)) {
    try {
      site = JSON.parse(readFileSync(sitePath, "utf8"));
    } catch {}
  }

  let cliente = {};
  if (existsSync(clientePath)) {
    try {
      cliente = JSON.parse(readFileSync(clientePath, "utf8"));
    } catch {}
  }

  let paleta = cliente.paleta;
  if (!paleta && cliente.modelo) {
    const modeloKey = (cliente.modelo || "").toLowerCase().trim();
    const modeloId = ALIASES_MODELOS[modeloKey] || modeloKey;
    paleta = PALETAS_PADRAO_MODELO[modeloId];
  }
  if (!paleta) {
    paleta = site.paleta || "volpatto";
  }

  const colecao = cliente.colecao || site.colecao || "editorial";

  let css = readFileSync(globalCssPath, "utf8");
  let alterado = false;

  // 1. Sincroniza paleta
  if (paleta) {
    const importPaleta = `@import "./palettes/${paleta}.css";`;
    const regexPaleta = /@import\s+["']\.\/palettes\/[^"']+\.css["'];?/;
    if (regexPaleta.test(css)) {
      const match = css.match(regexPaleta);
      if (match && match[0] !== importPaleta) {
        css = css.replace(regexPaleta, importPaleta);
        alterado = true;
      }
    }
  }

  // 2. Sincroniza coleção
  if (colecao) {
    const importColecao = `@import "./collections/${colecao}.css";`;
    const regexColecao = /@import\s+["']\.\/collections\/[^"']+\.css["'];?/;
    if (regexColecao.test(css)) {
      const match = css.match(regexColecao);
      if (match && match[0] !== importColecao) {
        css = css.replace(regexColecao, importColecao);
        alterado = true;
      }
    }
  }

  if (alterado) {
    writeFileSync(globalCssPath, css, "utf8");
    console.log(`[tema] global.css sincronizado: paleta="${paleta}", colecao="${colecao}"`);
    return true;
  }

  return false;
}
