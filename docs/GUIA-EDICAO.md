# Guia de Edição Autônoma e Instrução de IA — Site de Bolso

Este guia ensina como você pode alterar **textos**, **cores**, **fontes**, **imagens** e **seções** sozinho, além de fornecer um **template de script pronto** para orientar uma IA sempre que você quiser criar uma nova seção com design exclusivo.

---

## Índice
1. [Textos e Conteúdo do Cliente](#1-textos-e-conteúdo-do-cliente)
   - [Configurar Botão de Agendamento: WhatsApp ou Link/Formulário](#11-configurar-botão-de-agendamento-whatsapp-ou-linkformulário)
2. [Identidade Visual e Cores (Paletas)](#2-identidade-visual-e-cores-paletas)
   - [Personalização da Seção Hero (Gradiente, Textos Light/Dark e Botão Dinâmico)](#21-personalização-da-seção-hero-gradiente-textos-lightdark-e-botão-dinâmico)
3. [Tipografia e Fontes Locais](#3-tipografia-e-fontes-locais)
4. [Imagens e Dimensões Recomendadas](#4-imagens-e-dimensões-recomendadas)
5. [Ordem e Seleção de Seções](#5-ordem-e-seleção-de-seções)
6. [Cuidados Críticos: SEO e CFP](#6-cuidados-críticos-seo-e-cfp)
7. [Script Guia para Solicitar Novas Seções à IA](#7-script-guia-para-solicitar-novas-seções-à-ia)
8. [Comandos de Validação](#8-comandos-de-validação)

---

## 1. Textos e Conteúdo do Cliente

Tudo o que é texto está em um único arquivo:  
📁 **[`src/content/cliente.json`](file:///c:/Users/user/Documents/git-documents/sites/marcellegoncalves/src/content/cliente.json)**

* **Dados cadastrais:** `"nome"`, `"profissao"`, `"crp"`, `"cidade"`, `"uf"`, `"bairro"`, `"endereco"`, `"email"`.
* **Hero (Topo):** `"titulo_hero"` (título de impacto) e `"subtitulo_hero"` (frase de apoio).
* **Demandas (Sintomas):** `"demandas_titulo"`, `"demandas_subtitulo"`, `"demandas"` (lista entre colchetes) e `"demandas_reflexao"`.
* **Serviços:** Lista de blocos com `"titulo"` e `"descricao"`.
* **Sobre:** `"bio"` (apresentação principal) e `"bio_complementar"` (convite à consulta).
* **Modalidades:** Informações de atendimento presencial e online em `"modalidades_info"`.
* **FAQ:** Lista com `"pergunta"` e `"resposta"`.
* **WhatsApp e Redes:** `"whatsapp"` (apenas números: `55 + DDD + número`), `"whatsapp_mensagem"` e `"instagram"`.

### 1.1. Configurar Botão de Agendamento: WhatsApp ou Link/Formulário

Você pode escolher com uma única linha se o botão de **"Agendar um atendimento"** levará o paciente diretamente para o WhatsApp ou para um link avulso (como formulário do Google Forms, Typeform, Calendly, Doctoralia, etc.).

Essa configuração fica dentro de 📁 **[`src/content/cliente.json`](file:///c:/Users/user/Documents/git-documents/sites/marcellegoncalves/src/content/cliente.json)** e reflete **instantaneamente em todos os botões do site**:

#### Cenário 1: Botão direcionando para o WhatsApp (Padrão)
Selecione `"tipo_agendamento": "whatsapp"`:
```json
{
  "tipo_agendamento": "whatsapp",
  "whatsapp": "551199999999",
  "whatsapp_mensagem": "Olá! Vim pelo site e gostaria de agendar um atendimento."
}
```
* **Comportamento:** Ao clicar no botão, o paciente é direcionado ao WhatsApp com a mensagem personalizada pronta para envio.

#### Cenário 2: Botão direcionando para um Link Avulso / Formulário
Selecione `"tipo_agendamento": "link"` e informe a URL no `"link_agendamento"`:
```json
{
  "tipo_agendamento": "link",
  "link_agendamento": "https://forms.gle/SEU_FORMULARIO_AQUI",
  "whatsapp": "551199999999",
  "whatsapp_mensagem": "Olá! Vim pelo site e gostaria de agendar um atendimento."
}
```
* **Comportamento:** Ao clicar no botão, o link abre o formulário ou página de agendamento em uma nova aba com total segurança (`target="_blank"` e `rel="noopener noreferrer"`).
* **Segurança:** O script de checagem do projeto (`npm run check`) avisará caso você defina `"link"` mas esqueça de preencher o `"link_agendamento"`.

> [!TIP]  
> Você não precisa alterar nenhum arquivo de layout ou componente `.astro`. Toda a estrutura de botões do site (`<BotaoWhatsapp />` ou `<BotaoAgendamento />`) se adapta automaticamente à opção definida no `cliente.json`.

---

## 2. Identidade Visual e Cores (Paletas)

As cores do site são 100% desacopladas dos componentes. Elas ficam em:  
📁 **`src/styles/palettes/<nome-da-paleta>.css`**

### Paletas já prontas no projeto:
* `purpura.css`: Malva suave + ameixa profunda e acolhedora + detalhe em tom rosé da marca.
* `salvia.css`: Verde-sálvia elegante + creme suave + fundo escuro verde floresta.
* `mare-serena.css`: Azul mineral sereno + névoa azulada + azul profundo e acolhedor.
* `volpatto.css`: Terroso escuro café + creme linho + botão caramelo quente.
* `terracota.css`: Terracota aconchegante + areia quente + fundo marrom profundo.

### O que cada token de cor controla:
```css
@theme {
  --color-*: initial;

  --color-primary: #865F94;          /* Cor dos botões principais de CTA */
  --color-primary-dark: #6D4A7A;     /* Cor de hover do botão */
  --color-surface: #43324A;          /* Fundo das seções escuras */
  --color-surface-alt: #FAF6FB;      /* Fundo das seções claras */
  --color-surface-card: #E6D7EA;     /* Fundo de cartões em seções claras */
  --color-ink: #2E2230;              /* Texto principal em seções claras (tema dark de texto) */
  --color-ink-soft: #6B5A6C;         /* Texto secundário em seções claras */
  --color-ink-light: #ffffff;        /* Texto principal em seções escuras (tema light de texto) */
  --color-ink-light-soft: #E6D7EA;   /* Texto secundário em seções escuras */
  --color-line: #D3C3D8;             /* Linhas e bordas em seções claras */
  --color-line-dark: #5E4A66;        /* Linhas e bordas em seções escuras */
  --color-white: #ffffff;
}
```

### Como trocar a cor do site inteiro:
1. Abra [`src/config/site.json`](file:///c:/Users/user/Documents/git-documents/sites/marcellegoncalves/src/config/site.json) e mude `"paleta": "purpura"` para `"salvia"`, `"mare-serena"`, `"volpatto"` ou `"terracota"`.
2. **Pronto!** O sistema sincroniza automaticamente o `src/styles/global.css` em tempo de desenvolvimento (com Hot Reload) e no build de produção. Não é mais necessário editar o CSS manualmente.

### 2.1. Personalização da Seção Hero (Estilos Independentes para Mobile e Desktop)

A seção Hero (na variante `overlay`) permite definir **de forma completamente independente** os estilos para celulares (**Mobile**) e computadores (**Desktop**).

Isso é fundamental porque, no celular, a imagem é vertical e o texto precisa de um gradiente escuro de leitura na base com texto claro (`light`); enquanto no computador (desktop), a tela é panorâmica e o texto pode ficar sobre uma área clara da foto com texto escuro (`dark`) e o fundo do container estendendo o degradê até as laterais da tela.

Toda personalização é feita diretamente no arquivo 📁 **[`src/config/site.json`](file:///c:/Users/user/Documents/git-documents/sites/marcellegoncalves/src/config/site.json)** dentro do objeto da seção `hero`, separando as opções nos blocos `"mobile"` e `"desktop"`:

```json
{
  "id": "inicio",
  "tipo": "hero",
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
```

---

#### 1. Opções para Celulares (`mobile`)
* **`fundo`:** `"dark"` (fundo escuro `bg-surface`) ou `"light"` (fundo claro `bg-surface-alt`).
* **`gradiente` (máscara vertical na base da foto):**
  * `"dark"`: Aplica uma suave máscara gradiente escura de baixo para cima para dar contraste ao texto.
  * `"light"`: Aplica máscara clara de baixo para cima.
  * `"nenhum"`: Desativa a máscara no celular.
* **`tema_texto`:** `"light"` (textos brancos/claros da paleta: `text-ink-light` e `text-ink-light-soft`) ou `"dark"` (textos escuros da paleta: `text-ink` e `text-ink-soft`).
  * *Ajuste fino individual (opcional):* `"tema_texto_topo"`, `"tema_texto_titulo"`, `"tema_texto_subtitulo"`.
* **`variante_botao`:** Opcional (`"light"`, `"dark"` ou `"normal"`). Por padrão, assume o oposto do gradiente mobile (ex.: botão claro sobre a base escura).

---

#### 2. Opções para Computadores (`desktop`)
* **`fundo`:**
  * `"gradiente"`: Ativa o gradiente linear contínuo no desktop, preenchendo as laterais da tela com as cores da paleta de forma contínua com a imagem.
  * `"solido"`: Fundo com cor sólida (`bg-surface` ou `bg-surface-alt`).
* **`direcao_gradiente`:**
  * `"light-para-dark"`: Inicia claro na esquerda (`--color-surface-alt`) e transiciona para escuro (`--color-surface`) na direita.
  * `"dark-para-light"`: Inicia escuro na esquerda (`--color-surface`) e transiciona para claro (`--color-surface-alt`) na direita.
* **`extensao_gradiente`:** Percentual onde ocorre a transição horizontal na tela (ex.: `45`, `50`, `60`).
* **`gradiente` (máscara horizontal na foto):**
  * `"nenhum"`: **Recomendado quando a foto do desktop já possui gradiente.** Não adiciona nenhuma máscara sobre a foto.
  * `"dark"` ou `"light"`: Aplica uma máscara horizontal caso queira reforçar o contraste.
* **`tema_texto`:** `"dark"` (textos escuros: `text-ink`) ou `"light"` (textos claros: `text-ink-light`).
  * *Ajuste fino individual (opcional):* `"tema_texto_topo"`, `"tema_texto_titulo"`, `"tema_texto_subtitulo"`.
* **`variante_botao`:** Opcional (`"dark"`, `"light"` ou `"normal"`). Por padrão, assume o oposto da área de leitura do desktop (ex.: botão escuro sobre o lado claro).

---

#### Exemplos Práticos:

* **Configuração Ideal para Fotos com Degradê no Desktop e Fundo Escuro no Mobile:**
  ```json
  {
    "id": "inicio",
    "tipo": "hero",
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
  ```

* **Configuração 100% Noturna (Escuro tanto no Mobile quanto no Desktop):**
  ```json
  {
    "id": "inicio",
    "tipo": "hero",
    "variante": "overlay",
    "mobile": {
      "fundo": "dark",
      "gradiente": "dark",
      "tema_texto": "light"
    },
    "desktop": {
      "fundo": "solido",
      "gradiente": "dark",
      "tema_texto": "light"
    }
  }
  ```

* **Configuração 100% Diurna (Claro tanto no Mobile quanto no Desktop):**
  ```json
  {
    "id": "inicio",
    "tipo": "hero",
    "variante": "overlay",
    "mobile": {
      "fundo": "light",
      "gradiente": "light",
      "tema_texto": "dark"
    },
    "desktop": {
      "fundo": "solido",
      "gradiente": "light",
      "tema_texto": "dark"
    }
  }
  ```

---

## 3. Tipografia e Fontes Locais

O site usa fontes locais no formato `.woff2` (sem depender de Google Fonts online, o que deixa o site ultrarrápido).

### Onde colocar os arquivos de fontes:
📁 **[`public/fonts/`](file:///C:/Users/user/Documents/git-documents/sites/cileideferreira/public/fonts)**

### Como cadastrar no [`src/config/typography.json`](file:///C:/Users/user/Documents/git-documents/sites/cileideferreira/src/config/typography.json):
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
* O layout gera as regras de `@font-face` e `preload` automaticamente.
* Os componentes consomem `.texto-titulo`, `.texto-subtitulo`, `.texto-corpo` e `.texto-legenda`.

---

## 4. Imagens e Dimensões Recomendadas

📁 Pasta: **[`public/images/`](file:///C:/Users/user/Documents/git-documents/sites/cileideferreira/public/images)**

| Imagem | Localização | Proporção / Tamanho Ideal | Função |
| :--- | :--- | :--- | :--- |
| **`hero-desktop.jpg`** | `public/images/hero-desktop.jpg` | 1920x630 px (ou 1920x1080) | Imagem de fundo panorâmica da Hero para computadores |
| **`hero-mobile.jpg`** | `public/images/hero-mobile.jpg` | 767x838 px (ou vertical 3:4) | Imagem de fundo da Hero para celulares |
| **`hero.jpg`** | `public/images/hero.jpg` | 3:4 (ex.: 900x1200 px) | Imagem padrão única de fallback da Hero |
| **`sobre.jpg`** | `public/images/sobre.jpg` | 3:4 (ex.: 900x1200 px) | Retrato profissional da seção Sobre |
| **`og.jpg`** | `public/og.jpg` | 1200x630 px (exato) | Miniatura que aparece no link do WhatsApp e Google |
| **`favicon.svg`** | `public/favicon.svg` | Vetorial / Ícone quadrado | Ícone da aba do navegador |

> [!TIP]  
> Quando você usa a Hero Overlay, pode cadastrar no `cliente.json` imagens separadas para desktop e mobile:
> ```json
> "hero": {
>   "desktop": "/images/hero-desktop.jpg",
>   "mobile": "/images/hero-mobile.jpg",
>   "arquivo": "/images/hero.jpg",
>   "alt": "Retrato de Cileide Ferreira, Psicóloga Clínica"
> }
> ```

---

## 5. Ordem, Seleção e Variantes de Seções

No arquivo 📁 **[`src/config/site.json`](file:///C:/Users/user/Documents/git-documents/sites/cileideferreira/src/config/site.json)**:
```json
"secoes": [
  { "id": "inicio", "tipo": "hero", "variante": "overlay" },
  { "id": "demandas", "tipo": "demandas" },
  { "id": "servicos", "tipo": "servicos" },
  { "id": "sobre", "tipo": "sobre" },
  { "id": "modalidades", "tipo": "modalidades" },
  { "id": "faq", "tipo": "faq" },
  { "id": "contato", "tipo": "contato" }
]
```

* **Alternar o estilo da Hero:** Basta mudar o campo `"variante"` no bloco da seção `hero`:
  * `"variante": "overlay"`: Novo layout com foto de fundo (desktop 1920x630 e mobile 767x838) e texto sobreposto.
  * `"variante": "editorial"`: Layout clássico em grid de 2 colunas lado a lado.
  * `"variante": "padrao"`: Layout vertical minimalista sem foto.
* **Alterar a ordem:** Basta mover o objeto para cima ou para baixo.
* **Ocultar uma seção:** Basta deletar ou comentar o objeto no array.

---

## 6. Cuidados Críticos: SEO e CFP

### Regras de SEO (Google):
* **`descricao_seo`:** Escreva um texto de **130 a 160 caracteres** com o nome, profissão, especialidade, bairro e cidade.
* **Texto `alt`:** No `cliente.json`, preencha o campo `"alt"` descrevendo o que está na foto (o Google usa para indexar no Google Imagens e leitores de tela para deficientes visuais).

### Regras do CFP (Conselho Federal de Psicologia):
* Proibido prometer cura ou resultados rápidos.
* Proibido depoimentos de pacientes ou "antes e depois".
* O número do CRP deve estar sempre visível.

---

## 7. Script Guia para Solicitar Novas Seções à IA

Sempre que você quiser que uma IA (ou eu) crie uma **nova seção com design exclusivo**, basta copiar o template abaixo, preencher e colar no chat:

```markdown
### SOLICITAÇÃO DE NOVA SEÇÃO NO SITE DE BOLSO

Por favor, crie uma nova seção para o projeto respeitando rigorosamente a arquitetura existente (AGENTS.md, catálogo em registry.ts, tokens sem valores arbitrários e wrapper Section).

1. Identificação da Seção:
   - Nome do componente: [Ex.: DepoimentosMetodologia.astro / FormacaoAcademica.astro]
   - Tipo de seção no site.json: "[nome-do-tipo]"
   - ID da âncora: "[nome-do-id]"
   - Posição na página: [Ex.: Logo após a seção 'sobre' e antes de 'servicos']

2. Estilo Visual e Tom:
   - Tom de fundo: [base (escuro terroso) OU alt (creme claro)]
   - Largura do container: [padrao (max-w-xl) OU ampla (max-w-4xl)]
   - Elementos gráficos: [Ex.: cartões em grid de 3 colunas / lista com ícones / foto lateral]

3. Dados e Textos (a serem incluídos em cliente.json):
   - Campos novos:
     {
       "titulo_secao": "...",
       "itens": [
         { "titulo": "...", "descricao": "..." }
       ]
     }

4. Regras Obrigatórias que a IA deve seguir:
   - Criar o componente em src/components/sections/editorial/[Nome].astro.
   - Usar <Section id="..." tom="..." largura="..."> como wrapper.
   - Consumir textos exclusivamente de cliente.json.
   - Usar apenas tokens semânticos (ex: texto-subtitulo, text-ink, border-line, rounded-card). Proibido classes com colchetes ou hexadecimais.
   - Registrar no catálogo src/components/registry.ts e ativar em src/config/site.json.
   - Executar npm run check e npm run build para garantir 100% de integridade.
```

---

## 8. Comandos de Validação

Após qualquer edição manual, abra o terminal na pasta do projeto e rode:

```bash
# 1. Verifica se não há erros de sintaxe, tokens proibidos ou links quebrados
npm run check

# 2. Testa a compilação completa para a Cloudflare Workers
npm run build

# 3. Inicia o site no seu navegador em http://localhost:4321
npm run dev
```
Se o `npm run check` retornar `check ok` e o `npm run build` retornar `Complete!`, o site está perfeito!
