# AGENTS.md — regras para qualquer IA neste projeto

## Projeto
Template de site de uma página para psicólogos (Site de Bolso). Estático, mobile-first, hospedado em Cloudflare Workers.

## Versões (não assuma outras)
- Astro 7.3.6
- Tailwind CSS 4.3.3 (CSS-first: tokens em `src/styles/global.css`, bloco `@theme`)
- Node 22. Sem React, Vue ou outro framework de UI.
- Se não tiver certeza de uma API do Astro 7, diga que não tem certeza. Não invente.

## Antes de escrever código
1. Leia `src/styles/global.css`. Ele é a única fonte de decisões de design.
2. Leia só o componente pedido e, se houver, `src/content/cliente.json`.

## Regras de estilo
- Use apenas classes dos tokens: espaçamento em múltiplos de 4px (`p-4` = 16px), cores `bg-primary`, `text-ink`..., raios `rounded-card`, `rounded-button`.
- PROIBIDO valor arbitrário: nada de `p-[13px]`, `text-[#333]`, `w-[430px]`. PROIBIDO hex ou px solto em arquivos `.astro`.
- Precisa de um valor que não existe? Pare e peça a criação de um token. Não improvise.
- Não crie `tailwind.config.js` nem use `@tailwind base/components/utilities` (isso é v3).
- Mobile-first: estilo base para celular, `md:` e `lg:` para telas maiores.

## Regras de componente
- Um arquivo `.astro` por seção em `src/components/`, autossuficiente, recebendo dados por props.
- Comente no topo: quais tokens usa e quais campos do `cliente.json` consome.
- Apenas um `<h1>` na página (no Hero). HTML semântico, `alt` em imagens.

## Conteúdo (psicólogos)
- Não gerar depoimentos de pacientes, promessas de resultado nem "antes e depois". A publicidade de psicólogos é regulada pelo CFP.
- Não inventar CRP, endereço, preço ou qualificações. Use só o que está no `cliente.json`.

## Escopo e entrega
- Mexa apenas nos arquivos pedidos. Liste os arquivos alterados ao final.
- O trabalho só termina quando `npm run build` e `npm run check` passam.


## Padrão de seções e Modelos de Layout
- O projeto suporta 6 modelos selecionáveis via campo `"modelo"` em `src/content/cliente.json`:
  1. `silvia-volpatto` (ou `modelo-1`): Editorial Terroso / Atual
  2. `gabriela-alcantara` (ou `modelo-2`): Editorial P&B / Clássico
  3. `amanda-botelho` (ou `modelo-3`): Lúdico Lilás / Gen-Z
  4. `leticia-malta` (ou `modelo-4`): Orgânico Sálvia / Minimalista
  5. `ricardo-costa` (ou `modelo-5`): Estruturado Azul / TCC
  6. `bruno-freitas` (ou `modelo-6`): Vibrante Roxo & Laranja
- Componentes específicos de cada modelo ficam em `src/components/modelos/<nome-do-modelo>/`.
- Toda seção usa `<Section id="...">` como wrapper. Não repita padding nem largura máxima.
- Título de seção: `<h2 class="text-2xl text-ink">`. Nunca `<h1>` fora do Hero.
- Textos do cliente vêm do `cliente.json`, nunca escritos no componente. Rótulos fixos de interface (ex.: "Sobre") podem ficar no componente.
- Use `text-balance` em títulos.
- Botão de Agendamento: use sempre `<BotaoWhatsapp />` ou `<BotaoAgendamento />` (aceita a prop `rotulo`). Ele resolve dinamicamente entre WhatsApp e link avulso via `cliente.json` (`tipo_agendamento`). Nunca recrie o link `wa.me` solto nos componentes.
- Ícones: use `<Icone nome="..." tamanho="..." />` de `src/components/common/Icone.astro`. Proibido pacotes externos pesados de ícones.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


