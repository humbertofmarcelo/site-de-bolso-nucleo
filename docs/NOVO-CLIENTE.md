# HANDOFF CLIENTE: Cileide Ferreira

Template de origem: template-v1.1.1

## Fases
- [x] Roteiro e textos
- [x] Identidade visual (tokens)
- [x] Imagens (favicon e og.jpg)
- [x] Links e botões
- [ ] SEO
- [ ] Verificações gerais
- [ ] Deploy

## Checklist de novo cliente
- [x] Criar repositório a partir do template (Use this template), clonar e rodar `npm install`
- [x] Anotar no HANDOFF do cliente a versão do template usada (ex.: template-v1.0)
- [x] Definir a identidade visual: cores no bloco @theme de src/styles/global.css
- [x] Conferir o contraste das cores novas no WebAIM (mínimo 4,5:1): branco sobre primary, primary-dark sobre surface, ink-soft sobre surface-alt
- [x] Alterar src/content/cliente.json (dados, contato_texto, og_image)
- [x] Trocar favicon.svg e favicon.ico em public/ e colocar a imagem de compartilhamento (og.jpg, 1200x630) em public/
- [x] Alterar `site` em astro.config.mjs
- [x] Alterar o domínio na linha Sitemap de public/robots.txt
- [x] Alterar `name` em wrangler.jsonc (único por cliente)
- [x] Rodar `npm run check` e `npm run build`
- [x] Primeiro deploy manual: `npx wrangler login` (se necessário) e `npx wrangler deploy`, que cria o Worker
- [ ] No painel da Cloudflare: abrir o Worker e conectá-lo ao repositório do GitHub (branch main, build `npm run build`, deploy `npx wrangler deploy`)
- [ ] Fazer um push e confirmar no painel que o deploy automático dispara
- [ ] Conferir o site no celular e o preview do link no WhatsApp
- [ ] Revisar os textos do cliente (sem promessa de resultado; conferir as normas do CFP)


## Fase atual
Tag fase-1-antigravity

## Última coisa que funcionou
(citar uma tag)

## Problema aberto
(nenhum)