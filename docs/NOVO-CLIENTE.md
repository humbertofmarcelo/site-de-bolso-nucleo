# Guia de Configuração de Novo Cliente — Site de Bolso

Este documento é o seu checklist definitivo para configurar um novo cliente em questão de minutos, escolhendo o modelo visual, paleta de cores, tipografia, imagens e textos.

---

## 1. Escolha do Modelo de Layout (1 Linha no JSON)

No arquivo `src/content/cliente.json`, defina a propriedade `"modelo"`:

```json
{
  "modelo": "silvia-volpatto"
}
```

### Modelos Disponíveis no Repositório:

| Identificador no JSON | Alias | Nome do Modelo | Estilo Visual | Paleta Padrão |
| :--- | :--- | :--- | :--- | :--- |
| `"silvia-volpatto"` | `"modelo-1"` | **Silvia Volpatto** | Editorial Terroso / Atual — Design amplo com foto em destaque | `volpatto` |
| `"gabriela-alcantara"` | `"modelo-2"` | **Gabriela Alcântara** | Editorial P&B / Clássico — Alto contraste, foto lendo livro e passos 01, 02, 03 | `classico-pb` |
| `"amanda-botelho"` | `"modelo-3"` | **Amanda Botelho** | Lúdico Lilás / Gen-Z — Neo-brutalismo suave com checklist, notas e stepper | `ludico-lilas` |
| `"leticia-malta"` | `"modelo-4"` | **Letícia Malta** | Orgânico Sálvia / Minimalista — Conexão com a natureza, paisagens e ícones | `salvia` |
| `"ricardo-costa"` | `"modelo-5"` | **Ricardo Costa** | Estruturado Azul / TCC — Corporativo, grid com 8 motivos e agendamento | `azul-confiante` |
| `"bruno-freitas"` | `"modelo-6"` | **Bruno Freitas** | Vibrante Roxo & Laranja — Alta energia, cartões acolhedores e chamada calorosa | `vibrante-roxo` |

> [!TIP]
> Ao definir apenas o `"modelo"`, o site automaticamente adota a paleta de cores recomendada e a ordem de seções correspondente!

---

## 2. Personalização Rápida de Cores (Paleta)

Se desejar usar uma paleta diferente da padrão do modelo, basta adicionar `"paleta"` no `cliente.json`:

```json
{
  "modelo": "leticia-malta",
  "paleta": "terracota"
}
```

### Paletas Disponíveis:
* `volpatto`: Marrom café terroso + linho + caramelo quente.
* `purpura`: Malva suave + ameixa profunda + rosé.
* `salvia`: Verde sálvia + creme linho + verde floresta.
* `terracota`: Terracota aconchegante + areia quente + marrom profundo.
* `mare-serena`: Azul mineral sereno + névoa azulada + azul escuro.
* `classico-pb`: Preto profundo elegante + branco limpo + cinzas suaves.
* `ludico-lilas`: Roxo ameixa + lilás pastel + botão amarelo ouro.
* `azul-confiante`: Azul marinho + azul suave de cartões + azul clássico.
* `vibrante-roxo`: Roxo ultravioleta + lavanda + botão laranja vibrante.

---

## 3. Campos do `cliente.json` por Modelo

### Núcleo Comum (Obrigatório para Todos os Modelos):
```json
{
  "nome": "Nome do Psicólogo",
  "profissao": "Psicóloga Clínica",
  "crp": "06/123456",
  "cidade": "São Paulo",
  "uf": "SP",
  "bairro": "Pinheiros",
  "endereco": "Rua Exemplo, 123",
  "email": "contato@exemplo.com.br",
  "abordagem": "Psicanálise",
  "modalidade": ["online", "presencial"],
  "titulo_hero": "Título principal de impacto",
  "subtitulo_hero": "Frase de apoio ou chamada de apresentação",
  "bio": "Biografia principal do psicólogo",
  "bio_complementar": "Histórico profissional ou convite ao agendamento",
  "descricao_seo": "Texto de 130 a 160 caracteres para o Google com nome, especialidade e cidade.",
  "whatsapp": "5511999999999",
  "whatsapp_mensagem": "Olá! Gostaria de informações sobre atendimento psicológico.",
  "tipo_agendamento": "whatsapp",
  "link_agendamento": "",
  "instagram": "usuario.psi",
  "servicos": [
    { "titulo": "Psicoterapia Individual", "descricao": "Descrição clara do serviço..." }
  ],
  "faq": [
    { "pergunta": "Como funcionam as sessões?", "resposta": "Sessões semanais com duração de 50 minutos..." }
  ]
}
```

### Campos Específicos Opcionais por Modelo:

#### Modelo 2 — Gabriela Alcântara:
```json
{
  "demandas_titulo": "Para quem é a terapia?",
  "demandas": [
    "Ansiedade e estresse constante",
    "Dificuldade nos relacionamentos",
    "Transições de vida e carreira"
  ],
  "passos_processo": [
    { "numero": "01", "titulo": "Primeiro contato", "descricao": "Conversamos pelo WhatsApp..." },
    { "numero": "02", "titulo": "Sessões regulares", "descricao": "Encontros semanais de 50 min..." },
    { "numero": "03", "titulo": "Acompanhamento", "descricao": "Evolução no seu ritmo..." }
  ]
}
```

#### Modelo 3 — Amanda Botelho:
```json
{
  "motivos_checklist": [
    "Pensamentos acelerados",
    "Sobrecarga emocional",
    "Dificuldade de dizer não"
  ],
  "passos_timeline": [
    { "titulo": "1. Agendamento", "descricao": "Mensagem rápida no WhatsApp..." },
    { "titulo": "2. Primeira Sessão", "descricao": "Nosso primeiro encontro..." },
    { "titulo": "3. A Sessão Contínua", "descricao": "Processo semanal com acolhimento..." }
  ]
}
```

#### Modelo 4 — Letícia Malta:
```json
{
  "frase_acolhimento": "Se você sente que precisa de um espaço seguro para cuidar de si...",
  "contato_texto": "O primeiro passo em direção ao cuidado emocional...",
  "imagens": {
    "paisagem": { "arquivo": "/images/hero.webp" },
    "paisagem_rodape": { "arquivo": "/images/hero.webp" }
  }
}
```

#### Modelo 5 — Ricardo Costa:
```json
{
  "grid_motivos": [
    { "rotulo": "Ansiedade", "icone": "ansiedade" },
    { "rotulo": "Depressão", "icone": "depressao" },
    { "rotulo": "Estresse", "icone": "estresse" },
    { "rotulo": "Relacionamentos", "icone": "relacionamentos" },
    { "rotulo": "Luto", "icone": "luto" },
    { "rotulo": "Fobia Social", "icone": "fobia-social" },
    { "rotulo": "Pânico", "icone": "panico" },
    { "rotulo": "Autoestima", "icone": "autoestima" }
  ],
  "formacao_itens": [
    "Graduação em Psicologia",
    "Especialização em TCC",
    "Membro ativo do CRP"
  ],
  "informacoes_agendamento": {
    "particular": "Atendimento particular com emissão de recibo para reembolso.",
    "modalidade": "Sessões 100% online por videoconferência segura.",
    "horarios": "Segunda a sexta-feira, das 08h às 20h."
  }
}
```

#### Modelo 6 — Bruno Freitas:
```json
{
  "itens_ajuda": [
    { "icone": "ansiedade", "titulo": "Ansiedade e estresse", "descricao": "Estratégias para equilíbrio emocional." },
    { "icone": "relacionamentos", "titulo": "Relacionamentos", "descricao": "Comunicação e resolução de conflitos." }
  ],
  "quando_buscar": [
    "Sentimento de angústia ou vazio",
    "Medo do futuro e insegurança",
    "Dificuldade persistente para dormir"
  ],
  "passos_sessao": [
    { "icone": "whatsapp", "titulo": "1. Primeiro contato via WhatsApp", "descricao": "Tiramos dúvidas iniciais." },
    { "icone": "calendario", "titulo": "2. Alinhamento de horários", "descricao": "Definimos o melhor dia." },
    { "icone": "video", "titulo": "3. Sessões semanais online", "descricao": "50 minutos via Meet ou Zoom." },
    { "icone": "estrela", "titulo": "4. Evolução constante", "descricao": "Acompanhamento focado nos seus objetivos." }
  ]
}
```

---

## 4. Checklist Rápido de Novo Cliente

- [ ] **1. Escolher o modelo:** Em `src/content/cliente.json`, preencha `"modelo": "<nome-do-modelo>"`.
- [ ] **2. Preencher os dados cadastrais:** Nome, CRP, Cidade, WhatsApp, Instagram e Bio.
- [ ] **3. Inserir imagens em `public/images/`:**
  - Foto de retrato (`/images/sobre.webp` ou `/images/hero.webp`);
  - Imagem de compartilhamento WhatsApp/Google: `public/og.jpg` (1200x630 px);
  - Ícone da aba do navegador: `public/favicon.svg`.
- [ ] **4. Configurações de Deploy e Domínio:**
  - `astro.config.mjs`: altere o campo `site` com o domínio ou Worker do cliente;
  - `public/robots.txt`: altere o domínio do Sitemap;
  - `wrangler.jsonc`: altere o `name` do worker para o cliente (ex.: `psicologa-marina`).
- [ ] **5. Validação com um comando:**
  ```bash
  npm run check
  npm run build
  ```
- [ ] **6. Visualizar no navegador:**
  ```bash
  npm run dev
  ```
- [ ] **7. Deploy:**
  ```bash
  npx wrangler deploy
  ```
