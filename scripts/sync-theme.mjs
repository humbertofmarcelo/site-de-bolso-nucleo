import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Garante que src/styles/global.css importe exatamente a paleta e coleção configuradas em src/config/site.json.
 */
export function sincronizarTema(root = process.cwd()) {
  const sitePath = join(root, "src/config/site.json");
  const globalCssPath = join(root, "src/styles/global.css");

  if (!existsSync(sitePath) || !existsSync(globalCssPath)) return false;

  const site = JSON.parse(readFileSync(sitePath, "utf8"));
  let css = readFileSync(globalCssPath, "utf8");
  let alterado = false;

  // 1. Sincroniza paleta
  if (site.paleta) {
    const importPaleta = `@import "./palettes/${site.paleta}.css";`;
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
  if (site.colecao) {
    const importColecao = `@import "./collections/${site.colecao}.css";`;
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
    console.log(`[tema] global.css sincronizado com site.json: paleta="${site.paleta}", colecao="${site.colecao}"`);
    return true;
  }

  return false;
}
