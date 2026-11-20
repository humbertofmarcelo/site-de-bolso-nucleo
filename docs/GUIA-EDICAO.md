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

O projeto conta com **7 modelos completos de layout** implementados no mesmo repositório. Para trocar o modelo do site inteiro, basta abrir 📁 **`src/content/cliente.json`** e alterar o campo `"modelo"`:

```json
{
  "modelo": "leticia-malta"
}
```

### Catálogo dos 7 Modelos:

| Identificador no JSON | Alias | Nome de Referência | Estilo Visual | Paleta Automática |
| :--- | :--- | :--- | :--- | :--- |
| `"silvia-volpatto"` | `"modelo-1"` | **Silvia Volpatto** | Editorial Terroso / Atual — Design amplo com foto em destaque | `volpatto` |
| `"gabriela-alcantara"` | `"modelo-2"` | **Gabriela Alcântara** | Editorial P&B / Clássico — Alto contraste, foto lendo livro e passos 01, 02, 03 | `classico-pb` |
| `"amanda-botelho"` | `"modelo-3"` | **Amanda Botelho** | Lúdico Lilás / Gen-Z — Neo-brutalismo suave com checklist, notas e stepper | `ludico-lilas` |
| `"leticia-malta"` | `"modelo-4"` | **Letícia Malta** | Orgânico Sálvia / Minimalista — Conexão com a natureza, paisagens e ícones | `salvia` |
| `"ricardo-costa"` | `"modelo-5"` | **Ricardo Costa** | Estruturado Azul / TCC — Corporativo, grid com 8 motivos e agendamento | `azul-confiante` |
| `"bruno-freitas"` | `"modelo-6"` | **Bruno Freitas** | Vibrante Roxo & Laranja — Alta energia, cartões acolhedores e chamada calorosa | `vibrante-roxo` |
| `"silvia-leticia"` | `"modelo-7"` | **Silvia & Letícia** | Editorial & Orgânico — Mescla a Hero, Modalidades, FAQ e Contato de `silvia-volpatto` com os Serviços e Apresentação de `leticia-malta` | `volpatto` |

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
  * `saudacao_hero`: Frase cursiva exibida no topo, interrompendo a linha superior da moldura (ex.: `"Olá, sou a"` ou `"Olá, sou Fernanda"`).
  * `tags_hero`: Lista de palavras-chave ou abordagens exibidas na base do card tracejado (ex.: `["🌈 Autocuidado", "🌸 Fenomenologia"]`).
  * `hero_card_offset`: Controla o quanto o card tracejado à frente sobe por cima da foto (`"minimo"`, `"pequeno"`, `"medio"`, `"grande"` ou `"extra"`).
  * `hero_card_altura`: Controla a altura/espaçamento interno do card tracejado à frente da foto (`"compacto"`, `"normal"`, `"amplo"` ou `"extra"`).
  * `hero_foto_altura`: Controla a altura da foto dentro da moldura (`"compacta"`, `"normal"` ou `"alta"`).
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
* **Modelo 7 (Silvia & Letícia — `silvia-leticia`):**
  * `servicos`: Lista com `{ titulo, descricao, icone? }` (usa os cards com ícones orgânicos do modelo `leticia-malta`).
  * `frase_acolhimento`: Citação em destaque no topo da seção "Sobre mim" (`ApresentacaoOrganica.astro` do modelo `leticia-malta`), além de `bio`, `bio_complementar` e `imagens.sobre`.
  * `modalidades_info`: Lista com `{ titulo, descricao }` exibida na seção "Formas de atendimento" (`ModalidadesEditorial.astro` do modelo `silvia-volpatto`).

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
| **`hero-desktop.webp`** | `public/images/` | 1920x600 px | Foto panorâmica para Hero Overlay (Modelos 1 e 7) |
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

1. **Escolher a Variante da Hero Separadamente para Celular (`mobile.variante`) e Computador (`desktop.variante`):**
   Nos modelos **`"silvia-volpatto"`** e **`"silvia-leticia"`**, você pode definir uma `"variante"` diferente dentro de `"mobile"` e dentro de `"desktop"`:
   - **`"overlay"`** *(padrão)*: A foto preenche todo o fundo da seção com os textos e botão sobrepostos.
   - **`"nenhum"`** (ou `"sem-foto"`): Desativa a foto da Hero naquele dispositivo, exibindo apenas o fundo da paleta (sólido `"light"`, `"dark"` ou `"gradiente"`) com o cabeçalho Nome/CRP, título, subtítulo e botão.
   - **`"editorial"`** (ou `"card"`): Exibe a foto em um card separado (acima do texto no celular ou ao lado direito do texto em 2 colunas no computador), sem sobrepor texto em cima da imagem.

   **Exemplo prático (`"overlay"` no celular e `"nenhum"` no computador):**
   ```json
   {
     "modelo": "silvia-leticia",
     "hero": {
       "mobile": {
         "variante": "overlay",
         "gradiente": "nenhum",
         "tema_texto": "light",
         "tema_texto_topo": "dark"
       },
       "desktop": {
         "variante": "nenhum",
         "fundo": "light",
         "tema_texto": "dark"
       }
     }
   }
   ```

   **Outro exemplo (`"overlay"` no celular e `"editorial"` com foto em card ao lado no computador):**
   ```json
   {
     "modelo": "silvia-volpatto",
     "hero": {
       "mobile": {
         "variante": "overlay"
       },
       "desktop": {
         "variante": "editorial",
         "fundo": "dark",
         "tema_texto": "light"
       }
     }
   }
   ```

2. **Opções para Celulares (`mobile`):**
   - `"variante"`: `"overlay"`, `"editorial"` ou `"nenhum"`.
   - `"fundo"`: `"dark"` (fundo escuro da paleta) ou `"light"` (fundo claro da paleta).
   - `"gradiente"`: `"dark"` (máscara suave na base para leitura), `"light"` ou `"nenhum"`.
   - `"tema_texto"`: `"light"` (textos claros) ou `"dark"` (textos escuros).
   - `"tema_texto_topo"`: `"light"` ou `"dark"` (controla especificamente a cor do Nome e CRP no topo).
   - `"variante_botao"`: `"normal"`, `"light"` ou `"dark"`.

3. **Opções para Computadores (`desktop`):**
   - `"variante"`: `"overlay"`, `"editorial"` ou `"nenhum"`.
   - `"fundo"`: `"light"`, `"dark"`, `"solido"` ou `"gradiente"` (gradiente contínuo estendendo as cores da paleta pelas laterais da tela).
   - `"direcao_gradiente"`: `"light-para-dark"` ou `"dark-para-light"`.
   - `"extensao_gradiente"`: Percentual onde ocorre a transição (ex.: `45`, `50`, `60`).
   - `"gradiente"`: `"nenhum"` (ideal se a foto já possui degradê), `"dark"` ou `"light"`.
   - `"tema_texto"`: `"dark"` ou `"light"`.
   - `"tema_texto_topo"`: `"dark"` ou `"light"`.
   - `"variante_botao"`: `"normal"`, `"light"` ou `"dark"`.

4. **Responsividade Desktop nos Layouts Nativos:**
   - Se você mantiver o layout nativo do modelo (sem ativar overlay), todos os modelos já contam com **design split responsivo em 2 colunas** no desktop (`md:grid md:grid-cols-2 md:gap-12 md:items-center`), com fotografia destacada de um lado e tipografia balanceada com botão de ação do outro, além de seções de serviços e passos distribuídas em grades de 3 colunas.

---

### 6.1. Comportamento Mobile vs Desktop, Camadas, Offset e Caixas de Texto na Hero do Modelo `amanda-botelho`

No modelo **`amanda-botelho`** ([`HeroLudico.astro`](../src/components/modelos/amanda-botelho/HeroLudico.astro)), a seção Hero adapta sua estrutura de forma inteligente entre celular e computador, sem duplicar títulos (`<h1>`) e mantendo a leitura ideal em cada tela:

#### 1. Como funciona no Celular (`mobile`):
- **Moldura Vertical em Camadas**:
  1. **Moldura externa colorida** ao fundo;
  2. **Saudação no topo** (*"Olá, sou a..."*) centralizada sobre a linha superior da moldura;
  3. **Foto central** dentro da moldura;
  4. **Card tracejado de identificação** posicionado **à frente** (`z-10`) da foto e da linha inferior da moldura, subindo sobre a base da imagem (controlado por `hero_card_offset`);
  5. **Botão `"AGENDE SUA SESSÃO"`** centralizado abaixo do card tracejado.
- **Caixa Única de Biografia**:
  - Abaixo do botão, os textos de `"bio"` e `"bio_complementar"` aparecem **juntos dentro de uma única caixa de texto** (`bg-surface-card`), evitando excesso de blocos empilhados no celular.

#### 2. Como funciona no Computador (`desktop`):
- **Moldura Horizontal Ampla (2 Colunas Internas)**:
  1. A moldura externa colorida expande horizontalmente envolvendo toda a largura da seção;
  2. **Saudação no topo esquerdo**: o texto *"Olá, sou a..."* fica sobreposto à linha superior da moldura do lado esquerdo;
  3. **Coluna Esquerda da Moldura**: exibe o **Card tracejado de identificação** centralizado na área esquerda;
  4. **Coluna Direita da Moldura**: a **Foto** ocupa toda a lateral direita interna da moldura, encostando nas bordas superior, direita e inferior;
  5. **Botão na Linha Inferior Esquerda**: o botão `"AGENDE SUA SESSÃO"` fica posicionado exatamente sobre a linha inferior da moldura do lado esquerdo, interrompendo o traço da borda.
- **Separação Automática em 2 Caixas de Biografia Lado a Lado**:
  - Abaixo da moldura horizontal, os textos se dividem automaticamente em **duas caixas independentes lado a lado** (`md:grid-cols-2`):
    - **Caixa da Esquerda**: exibe o texto do campo `"bio"`;
    - **Caixa da Direita**: exibe o texto do campo `"bio_complementar"` *(se `"bio_complementar"` estiver vazio no `cliente.json`, apenas a primeira caixa é exibida)*.

#### 3. Como configurar no `src/content/cliente.json`:

```json
{
  "modelo": "amanda-botelho",
  "saudacao_hero": "Olá, sou a",
  "tags_hero": ["Terapia Cognitivo-Comportamental", "presencial", "online"],
  "hero_card_offset": "medio",
  "hero_card_altura": "normal",
  "hero_foto_altura": "normal",
  "bio": "Texto que aparece na primeira caixa (e no topo da caixa única do celular).",
  "bio_complementar": "Texto que aparece separado na segunda caixa ao lado no desktop (e junto na mesma caixa no celular)."
}
```

*(Você também pode colocar as opções visuais dentro do objeto `"hero": { "saudacao": "...", "tags": [...], "card_offset": "medio", "card_altura": "normal", "foto_altura": "normal" }`).*

#### Tabela de Valores Disponíveis:

| Propriedade no `cliente.json` | Valores Aceitos | O que faz na prática |
| :--- | :--- | :--- |
| **`hero_card_offset`** | `"minimo"` (`-40px`)<br>`"pequeno"` (`-56px`)<br>`"medio"` (`-80px` — **padrão**)<br>`"grande"` (`-96px`)<br>`"extra"` (`-128px`) | Define **o quanto o card tracejado sobe por cima da foto no celular** (no desktop, o card fica automaticamente centralizado na coluna esquerda da moldura). |
| **`hero_card_altura`** | `"compacto"`<br>`"normal"` (**padrão**)<br>`"amplo"`<br>`"extra"` | Controla a **altura (espaçamento vertical interno)** do card tracejado de identificação. |
| **`hero_foto_altura`** | `"compacta"` (`256px` mob / `320px` desk)<br>`"normal"` (`320px` mob / `384px` desk — **padrão**)<br>`"alta"` (`384px` mob / `100%` desk) | Ajusta a **altura da foto** dentro da moldura. |
| **`saudacao_hero`** | Texto livre (ex.: `"Olá, sou a"`, `"Olá, sou Fernanda"`) | Altera o texto que fica sobreposto à linha superior da moldura. |
| **`tags_hero`** | Lista de textos (ex.: `["🌈 Autocuidado", "🌸 Fenomenologia"]`) | Exibe as especialidades/palavras-chave separadas por `\|` na base do card tracejado. |
| **`bio`** e **`bio_complementar`** | Textos livres | No **celular**, aparecem juntos dentro de **1 única caixa**. No **desktop**, separam-se automaticamente em **2 caixas lado a lado** abaixo da moldura. |

---

### 6.2. Controle de Cantos Arredondados (`arredondado`) e Borda Tracejada (`tracejado`) em Todos os Blocos de Texto do Modelo `amanda-botelho`

No modelo **`amanda-botelho`**, **todos os blocos de texto do site** podem ser configurados individualmente (ou de uma só vez) diretamente no arquivo 📁 **`src/content/cliente.json`** através do objeto `"blocos_texto"`.

Para cada bloco, você controla duas propriedades booleanas (`true` ou `false`):
- **`"arredondado"`**:
  - `true` → Aplica cantos arredondados (`rounded-card`).
  - `false` → Deixa os cantos **retos/quadrados** (sem arredondamento).
- **`"tracejado"`**:
  - `true` → Aplica **borda tracejada** (`border-2 border-dashed`).
  - `false` → Aplica **borda contínua/sólida** (`border`).

#### 1. Exemplo Completo no `src/content/cliente.json`:

```json
{
  "modelo": "amanda-botelho",
  "blocos_texto": {
    "hero_identificacao": { "arredondado": false, "tracejado": true },
    "hero_bio_1": { "arredondado": true, "tracejado": false },
    "hero_bio_2": { "arredondado": true, "tracejado": false },
    "por_que_checklist": { "arredondado": true, "tracejado": false },
    "por_que_reflexao": { "arredondado": false, "tracejado": true },
    "abordagem_citacao": { "arredondado": false, "tracejado": true },
    "abordagem_nota": { "arredondado": true, "tracejado": false },
    "como_funciona_passos": { "arredondado": false, "tracejado": true },
    "mini_cta_balao": { "arredondado": false, "tracejado": true },
    "faq_itens": { "arredondado": true, "tracejado": false },
    "contato_card": { "arredondado": true, "tracejado": false }
  }
}
```

#### 2. Mapa de Todos os Blocos de Texto Editáveis:

| Chave em `"blocos_texto"` | Seção / Componente | Qual bloco de texto controla | Padrão Sugerido |
| :--- | :--- | :--- | :--- |
| **`"padrao"`** *(opcional)* | **Site Inteiro** | Define o padrão global para todos os blocos que não tiverem configuração própria especificada abaixo. | — |
| **`"hero_identificacao"`** | Hero (`HeroLudico.astro`) | Card de identificação com Nome, Profissão, CRP e Tags sobreposto à foto. | `arredondado: false, tracejado: true` |
| **`"hero_bio_1"`** | Hero (`HeroLudico.astro`) | Primeira caixa de biografia (`bio` no desktop; `bio` + `bio_complementar` unificados no mobile). | `arredondado: true, tracejado: false` |
| **`"hero_bio_2"`** | Hero (`HeroLudico.astro`) | Segunda caixa de biografia ao lado no desktop (`bio_complementar`). *(Dica: você também pode usar `"hero_bio"` para aplicar o mesmo estilo às duas caixas de uma vez).* | `arredondado: true, tracejado: false` |
| **`"por_que_checklist"`** | Por que fazer terapia? (`PorQueTerapia.astro`) | Card 1 com a lista de benefícios / checklist (`[✓]`). | `arredondado: true, tracejado: false` |
| **`"por_que_reflexao"`** | Por que fazer terapia? (`PorQueTerapia.astro`) | Card 2 com o texto de reflexão (ex.: *"A ideia de que 'só quem está mal precisa de terapia'..."*). | `arredondado: false, tracejado: true` |
| **`"abordagem_citacao"`** | A abordagem importa? (`AbordagemLudica.astro`) | Card 1 com a explicação / citação sobre a abordagem. | `arredondado: false, tracejado: true` |
| **`"abordagem_nota"`** | A abordagem importa? (`AbordagemLudica.astro`) | Card 2 complementar (*"O que realmente faz a diferença"*). | `arredondado: true, tracejado: false` |
| **`"como_funciona_passos"`** | Como funciona? (`StepperLudico.astro`) | Todos os cards dos passos (*1. Agendamento*, *2. Primeira Sessão*, *3. A Sessão Contínua*). | `arredondado: false, tracejado: true` |
| **`"mini_cta_balao"`** | Chamada Rápida (`MiniCtaLudico.astro`) | Retângulo branco com a frase de convite ao lado da foto. | `arredondado: false, tracejado: true` |
| **`"faq_itens"`** | Perguntas Frequentes (`FaqLudico.astro`) | Todos os blocos retráteis de perguntas e respostas. | `arredondado: true, tracejado: false` |
| **`"contato_card"`** | Contato / Rodapé (`ContatoLudico.astro`) | Card principal de encerramento com dados da psicóloga e links. | `arredondado: true, tracejado: false` |

#### 3. Personalização Individual por Item (Passos ou FAQ):
Se dentro de uma lista você quiser que **um passo específico** (em `passos_timeline`) ou **uma pergunta específica** (em `faq`) tenha um formato diferente dos demais, basta adicionar `"arredondado"` e/ou `"tracejado"` diretamente naquele item do `cliente.json`:

```json
"passos_timeline": [
  {
    "titulo": "1. Agendamento",
    "descricao": "Você entra em contato comigo e agendamos dia e horário.",
    "arredondado": false,
    "tracejado": true
  },
  {
    "titulo": "2. Primeira Sessão",
    "descricao": "Nosso primeiro encontro para nos conhecermos.",
    "arredondado": true,
    "tracejado": false
  }
]
```

---

### 6.3. Estrutura e Especificidades do Modelo Híbrido `silvia-leticia`

O modelo **`"silvia-leticia"`** (ou alias `"modelo-7"`) possui todos os seus componentes isolados na pasta própria 📁 **`src/components/modelos/silvia-leticia/`**, permitindo que você edite qualquer seção dele sem impactar os modelos `"silvia-volpatto"` ou `"leticia-malta"`:

| Ordem | Seção | Arquivo em `src/components/modelos/silvia-leticia/` | Campos Consumidos do `cliente.json` |
| :--- | :--- | :--- | :--- |
| **1. Hero** (`id="inicio"`) | `hero-silvia-leticia` | [`HeroSilviaLeticia.astro`](../src/components/modelos/silvia-leticia/HeroSilviaLeticia.astro) | `nome`, `crp`, `profissao`, `cidade`, `titulo_hero`, `subtitulo_hero`, `imagens.hero` (`desktop`, `mobile`, `arquivo`, `alt`) e objeto `hero` (`mobile` / `desktop`). |
| **1b. Frase de Acolhimento** (`id="acolhimento"`) | `frase-silvia-leticia` | [`FraseSilviaLeticia.astro`](../src/components/modelos/silvia-leticia/FraseSilviaLeticia.astro) | `frase_acolhimento`: exibida em destaque com respiro vertical logo abaixo da Hero e antes da seção de Serviços. |
| **2. Serviços** (`id="servicos"`) | `servicos-silvia-leticia` | [`ServicosSilviaLeticia.astro`](../src/components/modelos/silvia-leticia/ServicosSilviaLeticia.astro) | `servicos`: lista de `{ titulo, descricao, icone? }` (se `icone` não for informado no item, alterna automaticamente entre `"planta"`, `"coracao"`, `"ansiedade"` e `"estrela"`). |
| **3. Sobre mim** (`id="sobre"`) | `sobre-silvia-leticia` | [`SobreSilviaLeticia.astro`](../src/components/modelos/silvia-leticia/SobreSilviaLeticia.astro) | `nome`, `bio`, `bio_complementar` e `imagens.sobre.arquivo`. |
| **4. Formas de atendimento** (`id="modalidades"`) | `modalidades-silvia-leticia` | [`ModalidadesSilviaLeticia.astro`](../src/components/modelos/silvia-leticia/ModalidadesSilviaLeticia.astro) | `modalidades_info`: lista de `{ titulo, descricao }` + botão de agendamento. |
| **5. Perguntas Frequentes** (`id="faq"`) | `faq-silvia-leticia` | [`FaqSilviaLeticia.astro`](../src/components/modelos/silvia-leticia/FaqSilviaLeticia.astro) | `faq`: lista de `{ pergunta, resposta }`. |
| **6. Rodapé / Contato** (`id="contato"`) | `contato-silvia-leticia` | [`ContatoSilviaLeticia.astro`](../src/components/modelos/silvia-leticia/ContatoSilviaLeticia.astro) | `nome`, `crp`, `email`, `endereco` (opcional) e `instagram`. |

#### Como ativar e personalizar no `src/content/cliente.json`:

```json
{
  "modelo": "silvia-leticia",
  "paleta": "volpatto",
  "frase_acolhimento": "Se você sente que precisa de um espaço seguro para cuidar de si, desacelerar e acolher sua história com mais gentileza...",
  "servicos": [
    {
      "titulo": "Psicoterapia Individual",
      "descricao": "Acompanhamento semanal voltado ao autoconhecimento e saúde emocional.",
      "icone": "planta"
    },
    {
      "titulo": "Terapia Online",
      "descricao": "Sessões realizadas por videoconferência com sigilo e acolhimento.",
      "icone": "coracao"
    }
  ],
  "modalidades_info": [
    {
      "titulo": "Atendimento Online",
      "descricao": "Os atendimentos realizados de maneira online proporcionam a mesma eficácia e qualidade das sessões presenciais."
    }
  ]
}
```

> [!TIP]
> Assim como qualquer outro modelo, você pode trocar livremente a `"paleta"` (ex.: `"salvia"`, `"volpatto"`, `"ceu-e-sol"`, `"purpura"`, `"terracota"`, etc.) no `cliente.json` e alterar as fontes no `src/config/typography.json`.

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
