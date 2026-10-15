# Kit de prompts

## Contexto (colar sempre, nesta ordem)
1. AGENTS.md
2. src/styles/global.css
3. src/content/cliente.json
4. src/components/Section.astro
5. src/components/Hero.astro (e BotaoWhatsapp.astro se a seção usar o botão)

## Pedido (modelo)
Crie APENAS src/components/NOME.astro, seguindo o padrão do Hero.
Use <Section id="..." tom="base ou alt">.
Conteúdo: (descrever).
Entregue o arquivo completo num único bloco de código, começando pela linha ---.
Entregue também a lista dos campos do cliente.json usados.
Se precisar de um valor que não existe nos tokens, pare e me avise.

## Depois de receber o código
git switch -c secao-nome
Copiar pelo botão "copiar" do bloco de código (não selecionar com o mouse)
npm run check, npm run build, conferir no celular
Commit, merge na main, apagar a branch

## Notas por IA (atualizar sempre)
- ChatGPT: Sobre e Serviços sem erros. Avisa quando está em dúvida sobre uma classe.
- Gemini: entregou o FAQ fora de bloco de código e o arquivo chegou sem o frontmatter e sem o corpo. Pedir bloco de código e copiar pelo botão.
- DeepSeek: usou text-primary como cor de texto (contraste insuficiente) e escreveu texto fixo no componente.