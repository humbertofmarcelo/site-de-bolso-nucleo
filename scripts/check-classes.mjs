import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { sincronizarTema } from "./sync-theme.mjs";

// Garante que global.css reflita site.json antes da checagem
sincronizarTema();

const bad = [];

// 1. Validação de Contratos de Configuração (site.json, typography.json, cliente.json)
try {
  const siteRaw = readFileSync("src/config/site.json", "utf8");
  const site = JSON.parse(siteRaw);

  // Paleta
  const paletaPath = join("src/styles/palettes", `${site.paleta}.css`);
  if (!existsSync(paletaPath)) {
    bad.push(`Paleta configurada "${site.paleta}" não encontrada em ${paletaPath}`);
  }

  // Coleção
  const colecaoPath = join("src/styles/collections", `${site.colecao}.css`);
  if (!existsSync(colecaoPath)) {
    bad.push(`Coleção configurada "${site.colecao}" não encontrada em ${colecaoPath}`);
  }

  // Tipografia
  if (!existsSync("src/config/typography.json")) {
    bad.push("Arquivo src/config/typography.json ausente.");
  } else {
    try {
      const typoRaw = readFileSync("src/config/typography.json", "utf8");
      const typo = JSON.parse(typoRaw);
      for (const [chave, fam] of Object.entries(typo.familias || {})) {
        if (fam.origem === "local" && fam.arquivos) {
          for (const arq of fam.arquivos) {
            const caminhoLocal = arq.caminho.startsWith("/") ? join("public", arq.caminho) : arq.caminho;
            if (!existsSync(caminhoLocal)) {
              bad.push(`Arquivo de fonte "${arq.caminho}" (${chave}) não encontrado em ${caminhoLocal}`);
            }
          }
        }
      }
    } catch (e) {
      bad.push(`Erro ao validar typography.json: ${e.message}`);
    }
  }

  // Imagens do cliente
  const clienteRaw = readFileSync("src/content/cliente.json", "utf8");
  const cliente = JSON.parse(clienteRaw);
  // Agendamento do cliente
  if (cliente.tipo_agendamento === "link" && !cliente.link_agendamento) {
    bad.push("cliente.json: tipo_agendamento está definido como 'link', mas link_agendamento está vazio.");
  }

  if (cliente.imagens) {
    for (const [chave, img] of Object.entries(cliente.imagens)) {
      if (img.obrigatoria && !img.arquivo && !img.desktop && !img.mobile) {
        bad.push(`Imagem obrigatória "${chave}" declarada no cliente.json, mas sem arquivo definido.`);
      }
      const caminhos = [img.arquivo, img.desktop, img.mobile].filter(Boolean);
      for (const cam of caminhos) {
        const caminhoLocal = cam.startsWith("/") ? join("public", cam) : cam;
        if (!existsSync(caminhoLocal)) {
          bad.push(`Arquivo de imagem "${cam}" (${chave}) não encontrado em ${caminhoLocal}`);
        }
      }
    }
  }
} catch (err) {
  bad.push(`Erro ao validar arquivos de configuração JSON: ${err.message}`);
}

// 2. Validação dos arquivos .astro
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".astro")) {
      const text = readFileSync(p, "utf8");
      const lines = text.split("\n");

      // Frontmatter: arquivo com import ou comentário de tokens precisa abrir e fechar com ---
      const temJs = /^\s*(import\s|\/\/ Tokens)/m.test(text);
      if (temJs) {
        const fences = lines.filter((l) => l.trim() === "---").length;
        if (!text.trimStart().startsWith("---") || fences < 2)
          bad.push(`${p}: frontmatter ausente ou incompleto (abrir e fechar com ---)`);
      }

      // Valores arbitrários de Tailwind e cores soltas
      lines.forEach((line, i) => {
        if (/\b[\w:-]+-\[[^\]]+\]/.test(line) || /#[0-9a-fA-F]{3,8}\b/.test(line))
          bad.push(`${p}:${i + 1}  ${line.trim()}`);
      });

      // Seções precisam usar o wrapper <Section>
      const isento = ["Section.astro", "BotaoWhatsapp.astro", "BotaoAgendamento.astro"];
      if (p.includes("components") && !isento.includes(name) && !text.includes("<Section"))
        bad.push(`${p}: seção sem <Section> (corpo ausente?)`);
    }
  }
}

walk("src");

if (bad.length) {
  console.error("Problemas encontrados:\n" + bad.join("\n"));
  process.exit(1);
}
console.log("check ok");