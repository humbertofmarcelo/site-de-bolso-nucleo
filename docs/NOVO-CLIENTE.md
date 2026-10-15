# HANDOFF CLIENTE: Marcelle Gonçalves

Template de origem: template-v1.1.1

## Fases
- [x] Roteiro e textos
- [x] Identidade visual (tokens)
- [x] Imagens (favicon e og.jpg)
- [x] Links e botões
- [x] SEO
- [ ] Verificações gerais
- [ ] Deploy

## Checklist de novo cliente
- [ ] Criar repositório a partir do template (Use this template), clonar e rodar `npm install`
- [ ] Anotar no HANDOFF do cliente a versão do template usada (ex.: template-v1.0)
- [ ] Definir a identidade visual: cores no bloco @theme de src/styles/global.css
- [ ] Conferir o contraste das cores novas no WebAIM (mínimo 4,5:1): branco sobre primary, primary-dark sobre surface, ink-soft sobre surface-alt
- [ ] Alterar src/content/cliente.json (dados, contato_texto, og_image)
- [ ] Trocar favicon.svg e favicon.ico em public/ e colocar a imagem de compartilhamento (og.jpg, 1200x630) em public/
- [ ] Alterar `site` em astro.config.mjs
- [ ] Alterar o domínio na linha Sitemap de public/robots.txt
- [ ] Alterar `name` em wrangler.jsonc (único por cliente)
- [ ] Rodar `npm run check` e `npm run build`
- [ ] Primeiro deploy manual: `npx wrangler login` (se necessário) e `npx wrangler deploy`, que cria o Worker
- [ ] No painel da Cloudflare: abrir o Worker e conectá-lo ao repositório do GitHub (branch main, build `npm run build`, deploy `npx wrangler deploy`)
- [ ] Fazer um push e confirmar no painel que o deploy automático dispara
- [ ] Conferir o site no celular e o preview do link no WhatsApp
- [ ] Revisar os textos do cliente (sem promessa de resultado; conferir as normas do CFP)


## Fase atual
tag fase-4-verificacoes

## Última coisa que funcionou
tag fase-3-imagens

## Problema aberto
(nenhum)