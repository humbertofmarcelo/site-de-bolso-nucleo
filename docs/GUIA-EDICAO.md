# Guia de Edição Autônoma e Instrução de IA — Site de Bolso

Este guia ensina como você pode alterar **modelos de layout**, **textos**, **cores**, **fontes**, **imagens** e **seções** de forma simples e rápida, permitindo configurar um site completo para um novo cliente em questão de segundos.

---

## Índice
1. [Como Trocar de Modelo em Segundos](#1-como-trocar-de-modelo-em-segundos)
2. [Identidade Visual e Cores (Paletas)](#2-identidade-visual-e-cores-paletas)
3. [Textos e Conteúdo do Cliente](#3-textos-e-conteúdo-do-cliente)
   - [Configurar Botão de Agendamento: WhatsApp ou Link/Formulário](#31-configurar-botão-de-agendamento-whatsapp-ou-linkformulário)
   - [Campos Específicos por Modelo](#32-campos-específicos-por-modelo)
4. [Tipografia e Fontes Locais](#4-tipografia-e-fontes-locais)
5. [Imagens e Dimensões Recomendadas](#5-imagens-e-dimensões-recomendadas)
6. [Personalização da Seção Hero (Gradiente, Textos Light/Dark)](#6-personalização-da-seção-hero-modelo-1)
7. [Cuidados Críticos: SEO e CFP](#7-cuidados-críticos-seo-e-cfp)
8. [Comandos de Validação e Teste](#8-comandos-de-validação-e-teste)

---

## 1. Como Trocar de Modelo em Segundos

O projeto conta com **6 modelos completos de layout** implementados no mesmo repositório. Para trocar o modelo do site inteiro, basta abrir 📁 **`src/content/cliente.json`** e alterar o campo `"modelo"`:

```json
{
  "modelo": "leticia-malta"
}
```

### Catálogo dos 6 Modelos:

| Identificador no JSON | Alias | Nome de Referência | Estilo Visual | Paleta Automática |
| :--- | :--- | :--- | :--- | :--- |
| `"silvia-volpatto"` | `"modelo-1"` | **Silvia Volpatto** | Editorial Terroso / Atual — Design amplo com foto em destaque | `volpatto` |
| `"gabriela-alcantara"` | `"modelo-2"` | **Gabriela Alcântara** | Editorial P&B / Clássico — Alto contraste, foto lendo livro e passos 01, 02, 03 | `classico-pb` |
| `"amanda-botelho"` | `"modelo-3"` | **Amanda Botelho** | Lúdico Lilás / Gen-Z — Neo-brutalismo suave com checklist, notas e stepper | `ludico-lilas` |
| `"leticia-malta"` | `"modelo-4"` | **Letícia Malta** | Orgânico Sálvia / Minimalista — Conexão com a natureza, paisagens e ícones | `salvia` |
| `"ricardo-costa"` | `"modelo-5"` | **Ricardo Costa** | Estruturado Azul / TCC — Corporativo, grid com 8 motivos e agendamento | `azul-confiante` |
| `"bruno-freitas"` | `"modelo-6"` | **Bruno Freitas** | Vibrante Roxo & Laranja — Alta energia, cartões acolhedores e chamada calorosa | `vibrante-roxo` |

> [!TIP]
> Ao mudar o `"modelo"`, o sistema automaticamente ativa a paleta correspondente e a estrutura de seções ideal. Você não precisa editar arquivos de layout `.astro`.

---

## 2. Identidade Visual e Cores (Paletas)

As cores são 100% desacopladas dos componentes e ficam centralizadas em:  
📁 **`src/styles/palettes/<nome-da-paleta>.css`**

### Como trocar a cor do site:
No arquivo 📁 **`src/content/cliente.json`**, basta adicionar ou alterar o campo `"paleta"`:

```json
{
  "modelo": "silvia-volpatto",
  "paleta": "salvia"
}
```

*(Se o campo `"paleta"` não for informado, o site usará automaticamente a paleta padrão do modelo escolhido).*

### Paletas Disponíveis:
* `volpatto`: Marrom café terroso + linho + caramelo quente.
* `classico-pb`: Preto profundo de alto contraste + branco limpo + cinzas suaves.
* `ludico-lilas`: Roxo ameixa + lilás pastel + botão amarelo ouro de alto contraste.
* `salvia`: Verde sálvia elegante + creme linho + verde floresta.
* `azul-confiante`: Azul marinho clássico + azul suave de cartões + azul corporativo.
* `vibrante-roxo`: Roxo ultravioleta + lavanda + botão laranja caloroso.
* `terracota`: Terracota aconchegante + areia quente + marrom profundo.
* `purpura`: Malva suave + ameixa profunda + rosé.
* `mare-serena`: Azul mineral sereno + névoa azulada + azul escuro.

> [!NOTE]
> O arquivo `src/styles/global.css` é sincronizado automaticamente pelo Vite toda vez que você altera o `cliente.json`. Não é necessário mexer no CSS.

---

## 3. Textos e Conteúdo do Cliente

Tudo o que é texto e informação cadastral fica centralizado em:  
📁 **`src/content/cliente.json`**

### 3.1. Configurar Botão de Agendamento: WhatsApp ou Link/Formulário

Todos os botões de agendamento do site obedecem a uma única configuração no `cliente.json`:

#### Opção A: Direcionar para o WhatsApp (Padrão)
```json
{
  "tipo_agendamento": "whatsapp",
  "whatsapp": "5511999999999",
  "whatsapp_mensagem": "Olá! Gostaria de agendar uma consulta."
}
```

#### Opção B: Direcionar para Link Externo (Google Forms, Doctoralia, etc.)
```json
{
  "tipo_agendamento": "link",
  "link_agendamento": "https://forms.gle/SEU_LINK_AQUI",
  "whatsapp": "5511999999999"
}
```

---

### 3.2. Campos Específicos por Modelo

Se o modelo escolhido tiver blocos especiais, você pode preencher os seguintes campos opcionais no `cliente.json`:

* **Modelo 2 (Gabriela Alcântara — P&B):**
  * `demandas`: Lista de sintomas para a coluna "Para quem é a terapia?".
  * `passos_processo`: Lista com `{ numero, titulo, descricao }` para os passos 01, 02, 03.
* **Modelo 3 (Amanda Botelho — Lúdico):**
  * `motivos_checklist`: Itens do checklist de tiques verdes (`[✓]`).
  * `passos_timeline`: Lista com `{ titulo, descricao }` para o stepper vertical.
* **Modelo 4 (Letícia Malta — Orgânico):**
  * `frase_acolhimento`: Citação poética que abre a apresentação pessoal.
  * `imagens.paisagem`: Imagem horizontal de natureza/mar no topo.
  * `imagens.paisagem_rodape`: Imagem horizontal de bosque no rodapé.
* **Modelo 5 (Ricardo Costa — Estruturado):**
  * `grid_motivos`: Lista de 8 cards com `{ rotulo, icone }` (ex.: `"ansiedade"`, `"depressao"`).
  * `formacao_itens`: Lista de tópicos para o card de qualificações.
  * `informacoes_agendamento`: Objeto com `{ particular, modalidade, horarios }`.
* **Modelo 6 (Bruno Freitas — Vibrante):**
  * `itens_ajuda`: Lista com `{ icone, titulo, descricao }` na seção "Como posso ajudar?".
  * `quando_buscar`: Lista de alertas/sinais para o card roxo.
  * `passos_sessao`: Lista com `{ icone, titulo, descricao }` para o processo terapêutico.

---

## 4. Tipografia e Fontes Locais

As fontes são carregadas localmente no formato `.woff2` para garantir máxima velocidade e privacidade:
📁 Pasta: **`public/fonts/`**  
📁 Configuração: **`src/config/typography.json`**

O sistema gera automaticamente os `@font-face` e injeta as variáveis `--font-titulos` e `--font-corpo`. Para alterar a tipografia, consulte o [`GUIA-TIPOGRAFIA.md`](./GUIA-TIPOGRAFIA.md).

---

## 5. Imagens e Dimensões Recomendadas

📁 Pasta: **`public/images/`**

| Imagem | Localização | Proporção / Tamanho Ideal | Função |
| :--- | :--- | :--- | :--- |
| **`sobre.webp`** ou **`hero.webp`** | `public/images/` | 3:4 (ex.: 900x1200 px) | Retrato vertical do psicólogo |
| **`hero-desktop.webp`** | `public/images/` | 1920x630 px | Foto panorâmica para Hero Overlay (Modelo 1) |
| **`hero-mobile.webp`** | `public/images/` | 767x838 px | Foto vertical para Hero Overlay (Modelo 1) |
| **`og.jpg`** | `public/og.jpg` | 1200x630 px (exato) | Miniatura que aparece no link do WhatsApp e Google |
| **`favicon.svg`** | `public/favicon.svg` | Vetorial / Quadrado | Ícone da aba do navegador |

---

## 6. Personalização Avançada da Seção Hero em TODOS os Modelos

Você tem **liberdade total** para personalizar o comportamento visual da Hero em **qualquer um dos 6 modelos** (não apenas no Modelo 1).

Essa configuração pode ser feita diretamente no `cliente.json` através do bloco `"hero"`:

```json
{
  "modelo": "ricardo-costa",
  "hero": {
    "variante": "overlay",
    "mobile": {
      "fundo": "dark",
      "gradiente": "dark",
      "tema_texto": "light"
    },
    "desktop": {
      "fundo": "gradiente",
      "direcao_gradiente": "light-para-dark",
      "extensao_gradiente": 45,
      "gradiente": "nenhum",
      "tema_texto": "dark"
    }
  }
}
```

### O que você pode controlar:

1. **Ativar o Layout de Imagem de Fundo (Hero Overlay) em qualquer modelo:**
   - Adicione `"variante": "overlay"` dentro do bloco `"hero"` (ou no item da seção em `secoes`).
   - O site automaticamente usará a foto panorâmica com a paleta do modelo ativo (`classico-pb`, `azul-confiante`, `salvia`, `ludico-lilas`, etc.).

2. **Opções para Celulares (`mobile`):**
   - `"fundo"`: `"dark"` (fundo escuro da paleta) ou `"light"` (fundo claro da paleta).
   - `"gradiente"`: `"dark"` (máscara suave na base para leitura), `"light"` ou `"nenhum"`.
   - `"tema_texto"`: `"light"` (textos claros) ou `"dark"` (textos escuros).
   - `"variante_botao"`: `"normal"`, `"light"` ou `"dark"`.

3. **Opções para Computadores (`desktop`):**
   - `"fundo"`: `"gradiente"` (gradiente contínuo estendendo as cores da paleta pelas laterais da tela) ou `"solido"`.
   - `"direcao_gradiente"`: `"light-para-dark"` ou `"dark-para-light"`.
   - `"extensao_gradiente"`: Percentual onde ocorre a transição (ex.: `45`, `50`, `60`).
   - `"gradiente"`: `"nenhum"` (ideal se a foto já possui degradê), `"dark"` ou `"light"`.
   - `"tema_texto"`: `"dark"` ou `"light"`.
   - `"variante_botao"`: `"normal"`, `"light"` ou `"dark"`.

4. **Responsividade Desktop nos Layouts Nativos:**
   - Se você mantiver o layout nativo do modelo (sem ativar overlay), todos os modelos já contam com **design split responsivo em 2 colunas** no desktop (`md:grid md:grid-cols-2 md:gap-12 md:items-center`), com fotografia destacada de um lado e tipografia balanceada com botão de ação do outro, além de seções de serviços e passos distribuídas em grades de 3 colunas.

---

## 7. Cuidados Críticos: SEO e CFP

### Regras do CFP (Conselho Federal de Psicologia):
* Proibido prometer cura ou resultados garantidos.
* Proibido publicar depoimentos de pacientes ou comparações de "antes e depois".
* O número de CRP do profissional deve estar visível e correto.

### Regras de SEO (Google):
* O campo `"descricao_seo"` deve conter entre **130 e 160 caracteres**, mencionando o nome, profissão, abordagem e cidade.

---

## 8. Comandos de Validação e Teste

Abra o terminal na pasta do projeto e execute:

```bash
# 1. Verifica se não há tokens proibidos ou links quebrados
npm run check

# 2. Testa a compilação completa para Cloudflare Workers
npm run build

# 3. Testa a compilação automática de todos os 6 modelos de uma vez só
npm run test:modelos

# 4. Inicia o servidor local para você conferir o resultado
npm run dev
```

Se `npm run check` retornar `check ok`, o site está 100% pronto para publicação!
