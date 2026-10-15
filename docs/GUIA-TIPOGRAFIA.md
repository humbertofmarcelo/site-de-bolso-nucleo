# Guia de Tipografia e Fontes Locais — Site de Bolso

O Site de Bolso suporta fontes locais (formato `.woff2`) sem dependência de serviços externos, garantindo máxima performance, privacidade e controle de layout.

---

## 1. Onde colocar os arquivos de fontes

Coloque os arquivos `.woff2` na pasta:
`public/fonts/`

Exemplo:
- `public/fonts/minha-fonte-regular.woff2`
- `public/fonts/minha-fonte-bold.woff2`

---

## 2. Como cadastrar no `typography.json`

No arquivo `src/config/typography.json`:

```json
{
  "colecao": "editorial",
  "familias": {
    "inter": {
      "nome": "Inter Variable",
      "tipo": "sans",
      "origem": "npm"
    },
    "cormorant": {
      "nome": "Cormorant Garamond",
      "tipo": "serif",
      "origem": "local",
      "arquivos": [
        {
          "peso": 600,
          "estilo": "normal",
          "caminho": "/fonts/cormorant-garamond-600.woff2"
        }
      ]
    }
  },
  "papeis": {
    "titulo": {
      "familia": "cormorant",
      "peso": 600,
      "tamanho": "text-3xl"
    },
    "subtitulo": {
      "familia": "cormorant",
      "peso": 600,
      "tamanho": "text-2xl"
    },
    "corpo": {
      "familia": "inter",
      "peso": 400,
      "tamanho": "text-base"
    },
    "legenda": {
      "familia": "inter",
      "peso": 400,
      "tamanho": "text-sm"
    }
  }
}
```

---

## 3. Como o carregamento funciona automaticamente

1. **`@font-face` Dinâmico:** O layout `Base.astro` gera automaticamente as regras `@font-face` para qualquer família marcada como `"origem": "local"`.
2. **Preload Crítico:** A fonte utilizada para o papel `titulo` recebe `<link rel="preload">` no cabeçalho HTML automaticamente para evitar FOUT (*Flash of Unstyled Text*).
3. **Variáveis Semânticas:** O sistema injeta `--font-titulos` e `--font-corpo` no `:root`.
4. **Classes Semânticas:**
   - `.texto-titulo`
   - `.texto-subtitulo`
   - `.texto-corpo`
   - `.texto-legenda`

Dessa forma, trocar a tipografia de um site não exige alterar nenhum componente Astro!
