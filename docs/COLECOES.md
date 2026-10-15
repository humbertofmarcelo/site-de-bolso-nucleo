# Guia de Coleções e Paletas — Site de Bolso

Este guia orienta como criar e gerenciar coleções visuais, paletas de cores e seções modulares no Site de Bolso.

---

## 1. Como funciona a Arquitetura

O site separa **Conteúdo**, **Identidade Visual** e **Composição**:
- **Conteúdo:** Centralizado em `src/content/cliente.json`.
- **Configuração do Site:** Definida em `src/config/site.json`.
- **Identidade Visual (Paleta e Tipografia):** `src/styles/palettes/` e `src/config/typography.json`.
- **Catálogo de Seções:** `src/components/registry.ts`.
- **Página Principal:** `src/pages/index.astro` (renderiza a lista dinâmica sem imports manuais).

---

## 2. Como Selecionar Coleção e Paleta

No arquivo `src/config/site.json`:
```json
{
  "colecao": "editorial",
  "paleta": "salvia",
  "tipografia": "editorial",
  "secoes": [
    { "id": "inicio", "tipo": "hero" },
    { "id": "sobre", "tipo": "sobre" },
    { "id": "servicos", "tipo": "servicos" },
    { "id": "formacao", "tipo": "formacao" },
    { "id": "faq", "tipo": "faq" },
    { "id": "contato", "tipo": "contato" }
  ]
}
```

---

## 3. Como Criar uma Nova Paleta de Cores

1. Crie um arquivo em `src/styles/palettes/<nome-da-paleta>.css`.
2. Declare exatamente os tokens semânticos obrigatórios no bloco `@theme`:
```css
@theme {
  --color-*: initial;

  --color-primary: #5b7c6f;
  --color-primary-dark: #435d52;
  --color-surface: #1e2e26;
  --color-surface-alt: #f7f9f6;
  --color-surface-card: #e5ece7;
  --color-ink: #182620;
  --color-ink-soft: #4a5c53;
  --color-ink-light: #ffffff;
  --color-ink-light-soft: #d3dfd8;
  --color-line: #d6e0d9;
  --color-line-dark: #32473c;
  --color-white: #ffffff;
}
```
3. Defina o nome da nova paleta em `src/config/site.json` (`"paleta": "<nome-da-paleta>"`).
4. O sistema sincroniza automaticamente o `src/styles/global.css` em tempo de execução e build!

---

## 4. Como Criar uma Nova Coleção Visual

1. Crie os estilos específicos em `src/styles/collections/<nome-da-colecao>.css`.
2. Se a coleção tiver componentes próprios de seção, crie-os em:
   `src/components/sections/<nome-da-colecao>/`
3. Registre os novos componentes em `src/components/registry.ts` dentro do objeto `variantesColecoes`:
```ts
export const variantesColecoes = {
  editorial: {
    hero: HeroEditorial,
    sobre: SobreEditorial,
    servicos: ServicosEditorial,
  },
  minimalista: {
    hero: HeroMinimalista,
  }
};
```
4. Seções não declaradas na coleção utilizam automaticamente as versões padrão de `secoesCompartilhadas`.

---

## 5. Como Adicionar ou Reordenar Seções

Para mudar a ordem ou ligar/desligar seções, basta alterar o array `secoes` em `src/config/site.json`.
Não é necessário alterar nenhum arquivo `.astro`!

---

## 6. Como Criar e Alternar Variantes de Seções (ex.: Hero com Imagem de Fundo)

O catálogo em `src/components/registry.ts` permite que uma mesma seção (como `hero`, `sobre`, `servicos`) possua múltiplos layouts independentes, sem risco de quebrar o projeto:

### Formas de ativar no `src/config/site.json`:
1. **Via propriedade `variante`**:
```json
{ "id": "inicio", "tipo": "hero", "variante": "overlay" }
```
2. **Via tipo composto direto**:
```json
{ "id": "inicio", "tipo": "hero-overlay" }
```
3. **Padrão da coleção atual**:
```json
{ "id": "inicio", "tipo": "hero" }
```

### Variantes de Hero disponíveis:
- `padrao`: Texto vertical minimalista sem foto.
- `editorial`: Layout split grid em duas colunas (foto em card ao lado do texto).
- `overlay`: Layout com imagem de fundo responsiva (suporte a desktop e mobile) com textos e botão sobrepostos.

### Como criar uma nova variante para qualquer seção:
1. Crie o componente em `src/components/sections/<colecao>/<Secao><Variante>.astro` (usando `<Section>` como wrapper).
2. Registre em `src/components/registry.ts` dentro de `variantesSecoes[secao][nomeVariante]`.
3. Ative em `src/config/site.json` definindo `"variante": "<nomeVariante>"`.
