# Conteúdo do site antigo — punchcare.com.br

Cópia do conteúdo do site atual **https://www.punchcare.com.br** (feito em **Wix**, `generator: Wix.com Website Builder`), para servir de base para a reconstrução do site.

Importado em 05/11/2026. Páginas descobertas a partir da home, menu, rodapé, sitemap (`/sitemap.xml` → `pages-sitemap.xml`, `blog-posts-sitemap.xml`, `blog-categories-sitemap.xml`; `/sitemap_index.xml` retorna 400 e `/wp-sitemap.xml` retorna 404) e de todos os links internos de cada página. O texto foi extraído do HTML final renderizado no navegador (Playwright/Chromium), na ordem do DOM.

## Estrutura

- `paginas/<slug>.md` — URL, `<title>`, meta description e todo o texto visível, na ordem (títulos com `#`, links/botões entre `[colchetes](url)`, campos de formulário como `[campo …]`). Imagens aparecem como `![alt](../imagens/<arquivo>)`. No fim de algumas páginas há uma seção com imagens que estão no HTML mas não aparecem no fluxo de texto (galeria, ícones, og:image).
- `html/<slug>.html` — HTML bruto, como o servidor entregou (curl). Exceção: `html/en-post-why-is-technical-punch-polishing-essential-for-the-quality-of-your-tablets.html` é o HTML **renderizado pelo navegador**, porque o curl recebia a página de verificação do Cloudflare ("Checking Your Request").
- `imagens/` — imagens do site. **Atenção:** só o `favicon.png` foi baixado; as outras não puderam ser baixadas (veja "Hosts bloqueados"). Os nomes nos `.md` já são os nomes finais. Para baixar todas em uma máquina com internet liberada: `bash site-antigo/imagens/baixar-imagens.sh`.

## Mapa do site

O site tem duas versões de idioma: português (original) e inglês (em `/en/...`, gerada pelo Wix Multilingual). Os `<title>` de várias páginas em português estão em inglês no próprio site (ex.: "Solutions", "Company", "News", "People").

Nenhuma página tem meta description definida.

### Português

| Título (<title>) | URL | Texto | HTML |
|---|---|---|---|
| Punch Care | https://www.punchcare.com.br | [paginas/home.md](paginas/home.md) | [html/home.html](html/home.html) |
| Contate-nos \| Punch Care | https://www.punchcare.com.br/contate-nos | [paginas/contate-nos.md](paginas/contate-nos.md) | [html/contate-nos.html](html/contate-nos.html) |
| Política de Privacidade | https://www.punchcare.com.br/política-de-privacidade | [paginas/politica-de-privacidade.md](paginas/politica-de-privacidade.md) | [html/politica-de-privacidade.html](html/politica-de-privacidade.html) |
| News | https://www.punchcare.com.br/notícias | [paginas/noticias.md](paginas/noticias.md) | [html/noticias.html](html/noticias.html) |
| Solutions | https://www.punchcare.com.br/soluções | [paginas/solucoes.md](paginas/solucoes.md) | [html/solucoes.html](html/solucoes.html) |
| Company | https://www.punchcare.com.br/empresa | [paginas/empresa.md](paginas/empresa.md) | [html/empresa.html](html/empresa.html) |
| Terms & Conditions | https://www.punchcare.com.br/termos-e-condições | [paginas/termos-e-condicoes.md](paginas/termos-e-condicoes.md) | [html/termos-e-condicoes.html](html/termos-e-condicoes.html) |
| People | https://www.punchcare.com.br/trabalhe-conosco | [paginas/trabalhe-conosco.md](paginas/trabalhe-conosco.md) | [html/trabalhe-conosco.html](html/trabalhe-conosco.html) |
| Polimento de punções | https://www.punchcare.com.br/post/polimento-de-punções | [paginas/post-polimento-de-puncoes.md](paginas/post-polimento-de-puncoes.md) | [html/post-polimento-de-puncoes.html](html/post-polimento-de-puncoes.html) |
| 5 sinais de que está na hora de revisar seus punções e matrizes | https://www.punchcare.com.br/post/5-sinais-de-que-está-na-hora-de-revisar-seus-punções-e-matrizes | [paginas/post-5-sinais-de-que-esta-na-hora-de-revisar-seus-puncoes-e-matrizes.md](paginas/post-5-sinais-de-que-esta-na-hora-de-revisar-seus-puncoes-e-matrizes.md) | [html/post-5-sinais-de-que-esta-na-hora-de-revisar-seus-puncoes-e-matrizes.html](html/post-5-sinais-de-que-esta-na-hora-de-revisar-seus-puncoes-e-matrizes.html) |
| Representações técnicas: por que escolher marcas globais faz diferença no seu processo | https://www.punchcare.com.br/post/representações-técnicas-por-que-escolher-marcas-globais-faz-diferença-no-seu-processo | [paginas/post-representacoes-tecnicas-por-que-escolher-marcas-globais-faz-diferenca-no-seu-processo.md](paginas/post-representacoes-tecnicas-por-que-escolher-marcas-globais-faz-diferenca-no-seu-processo.md) | [html/post-representacoes-tecnicas-por-que-escolher-marcas-globais-faz-diferenca-no-seu-processo.html](html/post-representacoes-tecnicas-por-que-escolher-marcas-globais-faz-diferenca-no-seu-processo.html) |
| Como o dimensionamento de punções pode evitar prejuízos silenciosos na sua produção | https://www.punchcare.com.br/post/como-o-dimensionamento-de-punções-pode-evitar-prejuízos-silenciosos-na-sua-produção | [paginas/post-como-o-dimensionamento-de-puncoes-pode-evitar-prejuizos-silenciosos-na-sua-producao.md](paginas/post-como-o-dimensionamento-de-puncoes-pode-evitar-prejuizos-silenciosos-na-sua-producao.md) | [html/post-como-o-dimensionamento-de-puncoes-pode-evitar-prejuizos-silenciosos-na-sua-producao.html](html/post-como-o-dimensionamento-de-puncoes-pode-evitar-prejuizos-silenciosos-na-sua-producao.html) |
| Por que o polimento técnico de punções é essencial para a qualidade dos seus comprimidos? | https://www.punchcare.com.br/post/por-que-o-polimento-técnico-de-punções-é-essencial-para-a-qualidade-dos-seus-comprimidos | [paginas/post-por-que-o-polimento-tecnico-de-puncoes-e-essencial-para-a-qualidade-dos-seus-comprimi.md](paginas/post-por-que-o-polimento-tecnico-de-puncoes-e-essencial-para-a-qualidade-dos-seus-comprimi.md) | [html/post-por-que-o-polimento-tecnico-de-puncoes-e-essencial-para-a-qualidade-dos-seus-comprimi.html](html/post-por-que-o-polimento-tecnico-de-puncoes-e-essencial-para-a-qualidade-dos-seus-comprimi.html) |

### Inglês (`/en`)

| Título (<title>) | URL | Texto | HTML |
|---|---|---|---|
| Home | https://www.punchcare.com.br/en | [paginas/en.md](paginas/en.md) | [html/en.html](html/en.html) |
| Solutions | https://www.punchcare.com.br/en/soluções | [paginas/en-solucoes.md](paginas/en-solucoes.md) | [html/en-solucoes.html](html/en-solucoes.html) |
| Company | https://www.punchcare.com.br/en/empresa | [paginas/en-empresa.md](paginas/en-empresa.md) | [html/en-empresa.html](html/en-empresa.html) |
| News | https://www.punchcare.com.br/en/notícias | [paginas/en-noticias.md](paginas/en-noticias.md) | [html/en-noticias.html](html/en-noticias.html) |
| Contate-nos \| Punch Care | https://www.punchcare.com.br/en/contate-nos | [paginas/en-contate-nos.md](paginas/en-contate-nos.md) | [html/en-contate-nos.html](html/en-contate-nos.html) |
| 5 signs it’s time to review your punches and dies | https://www.punchcare.com.br/en/post/5-signs-it-s-time-to-overhaul-your-punches-and-dies | [paginas/en-post-5-signs-it-s-time-to-overhaul-your-punches-and-dies.md](paginas/en-post-5-signs-it-s-time-to-overhaul-your-punches-and-dies.md) | [html/en-post-5-signs-it-s-time-to-overhaul-your-punches-and-dies.html](html/en-post-5-signs-it-s-time-to-overhaul-your-punches-and-dies.html) |
| Technical representation: why choosing global brands makes a difference in your process | https://www.punchcare.com.br/en/post/technical-representations-why-choosing-global-brands-makes-a-difference-in-your-process | [paginas/en-post-technical-representations-why-choosing-global-brands-makes-a-difference-in-your-pr.md](paginas/en-post-technical-representations-why-choosing-global-brands-makes-a-difference-in-your-pr.md) | [html/en-post-technical-representations-why-choosing-global-brands-makes-a-difference-in-your-pr.html](html/en-post-technical-representations-why-choosing-global-brands-makes-a-difference-in-your-pr.html) |
| How punch sizing can prevent hidden losses in your production | https://www.punchcare.com.br/en/post/how-punch-sizing-can-prevent-silent-losses-in-your-production | [paginas/en-post-how-punch-sizing-can-prevent-silent-losses-in-your-production.md](paginas/en-post-how-punch-sizing-can-prevent-silent-losses-in-your-production.md) | [html/en-post-how-punch-sizing-can-prevent-silent-losses-in-your-production.html](html/en-post-how-punch-sizing-can-prevent-silent-losses-in-your-production.html) |
| People | https://www.punchcare.com.br/en/trabalhe-conosco | [paginas/en-trabalhe-conosco.md](paginas/en-trabalhe-conosco.md) | [html/en-trabalhe-conosco.html](html/en-trabalhe-conosco.html) |
| Política de Privacidade | https://www.punchcare.com.br/en/política-de-privacidade | [paginas/en-politica-de-privacidade.md](paginas/en-politica-de-privacidade.md) | [html/en-politica-de-privacidade.html](html/en-politica-de-privacidade.html) |
| Terms & Conditions | https://www.punchcare.com.br/en/termos-e-condições | [paginas/en-termos-e-condicoes.md](paginas/en-termos-e-condicoes.md) | [html/en-termos-e-condicoes.html](html/en-termos-e-condicoes.html) |
| Why is technical punch polishing essential for the quality of your tablets? | https://www.punchcare.com.br/en/post/why-is-technical-punch-polishing-essential-for-the-quality-of-your-tablets | [paginas/en-post-why-is-technical-punch-polishing-essential-for-the-quality-of-your-tablets.md](paginas/en-post-why-is-technical-punch-polishing-essential-for-the-quality-of-your-tablets.md) | [html/en-post-why-is-technical-punch-polishing-essential-for-the-quality-of-your-tablets.html](html/en-post-why-is-technical-punch-polishing-essential-for-the-quality-of-your-tablets.html) |

Observação: o blog tem 5 posts (todos copiados acima). Na página `/notícias` só 2 aparecem visíveis (Polimento de punções; 5 sinais...); os outros 3 estão no HTML mas ocultos (`display: none`, sem botão de "carregar mais" visível), por isso não estão em `paginas/noticias.md`. A home mostra 3 posts em "Notícias da empresa". A versão em inglês tem 4 posts (o post "Polimento de punções" não tem tradução).

## Menu (ordem do cabeçalho)

1. Início — `/`
2. Soluções — `/soluções`
3. Empresa — `/empresa`
4. Notícias — `/notícias`
5. Contate-nos — `/contate-nos`
6. Botão: **Peça um orçamento** → `/contate-nos`

Também há um botão flutuante fixo de **WhatsApp** (`aria-label="WhatsApp"`) → `https://api.whatsapp.com/send?phone=5519998385373`.

### Rodapé (ordem)

- Logo branco + "Mais de 30 anos de experiência ao lado da indústria farmacêutica, oferecendo soluções confiáveis em punções, matrizes e consultoria especializada."
- Links: Trabalhe Conosco (`/trabalhe-conosco`) · Política de Privacidade (`/política-de-privacidade`) · Termos e Condições (`/termos-e-condições`)
- "© 2025 por Punch Care. Criado orgulhosamente pela Agência Guará" (https://www.guara.company/)
- Newsletter: "Acompanhe as últimas notícias" — campo Email + botão [Assinar]
- Endereço, e-mail, telefone
- Redes sociais: LinkedIn, Youtube, Facebook, Instagram

## Contatos encontrados

| Tipo | Valor |
|---|---|
| Razão social (citada na Política de Privacidade) | Punch Care Ltda. |
| CNPJ | **não encontrado** em nenhuma página |
| Telefone / WhatsApp | (19) 99838-5373 |
| Link WhatsApp | https://api.whatsapp.com/send?phone=5519998385373 |
| E-mail | punchcare@punchcare.com.br |
| Endereço | Av. Laurita Ortega Mari, 1288 – Vila das Oliveiras, Taboão da Serra – SP, CEP 06766-360 |
| Horário de funcionamento | Segunda - Sexta: 8:00 - 17:00 |
| LinkedIn | https://www.linkedin.com/company/punch-care-ltda |
| YouTube | https://www.youtube.com/@PunchCare |
| Facebook | https://www.facebook.com/profile.php?id=100092682912472 |
| Instagram | https://www.instagram.com/punchcare/ |

Outros links externos: Adamus S.A. (representada) — https://www.adamus.com.pl/en/ ; agência que criou o site — https://www.guara.company/

Formulários:
- **Contate-nos**: Nome, Sobrenome, Empresa, Email, Telefone, Endereço da empresa, "Você deseja comprar ou vender material?" (Comprar / Vender), Frequência (Uma vez / Mensalmente / Anualmente), Mensagem.
- **Trabalhe conosco**: Nome, Sobrenome, Email, Telefone, botão [Próximo] (formulário em etapas, para envio de currículo).
- **Newsletter** (rodapé): Email + [Assinar].

## Cores

Cores que aparecem nos estilos calculados das páginas (as mais usadas primeiro):

| Cor | Hex | Uso observado |
|---|---|---|
| rgb(244,148,28) | `#F4941C` | laranja — cor de destaque (botões, links, detalhes) |
| rgb(240,89,34) | `#F05922` | laranja-avermelhado — destaque/hover |
| rgb(0,43,69) | `#002B45` | azul-marinho — fundos escuros, títulos |
| rgb(36,37,30) | `#24251E` | quase preto — texto |
| rgb(84,85,80) | `#545550` | cinza escuro — texto secundário |
| rgb(229,229,229) | `#E5E5E5` | cinza claro — fundos/bordas |
| rgb(255,255,255) | `#FFFFFF` | branco |
| rgb(0,0,0) | `#000000` | preto |
| rgb(181,181,179) | `#B5B5B3` | cinza médio |
| rgb(11,47,91) | `#0B2F5B` | azul (pontual) |
| rgb(90,150,217) / rgb(60,100,145) | `#5A96D9` / `#3C6491` | azuis (pontual, blog) |
| rgb(235,229,214) | `#EBE5D6` | bege (pontual) |

Paleta do tema Wix (variáveis `--color_N` no CSS inline): 0 `#FFFFFF`, 1 `#FFFFFF`, 2 `#000000`, 3 `#ED1C24`, 4 `#0088CB`, 5 `#FFCB05`, 6 `#727272`, 7 `#B0B0B0`, 8 `#FFFFFF`, 11 `#E5E5E5`, 12 `#B5B5B3`, 13 `#858582`, 14 `#545550`, 15 `#24251E`, 16 `#FEEBC5`, 17 `#F05922`, 18 `#002B45`, 19 `#735519`, 20 `#54411B`, 21 `#C3D9F2`, 22 `#A2C2E6`, 23 `#5A96D9`, 24 `#3C6491`, 25 `#1E3248`, 41 `#F4941C`, 42 `#F05922`, 43 `#002B45`.

## Fontes

Fontes usadas (estilos calculados):

- **Helvetica Bold** (`helvetica-w01-bold`) — títulos
- **Helvetica Light** (`helvetica-w01-light`) — subtítulos
- **Barlow ExtraLight** (`barlow-extralight, barlow`) — textos/parágrafos; **Barlow Medium** (`barlow-medium`) em alguns pontos
- **Helvetica Neue 45 Light** (`HelveticaNeueW01-45Ligh`) — blog
- Arial / Helvetica — fallback e campos de formulário

Também declaradas no CSS (`@font-face`), mas pouco ou nada usadas: Cormorant Garamond, DIN Next Light, Helvetica Roman.

Tipografia do tema Wix (`--font_N`): 0 `80px/1.4em helvetica-w01-bold`; 2 `66px/1.1em helvetica-w01-bold`; 3 `40px/1.4em helvetica-w01-bold`; 4 `34px/1.1em helvetica-w01-bold`; 5 `28px/1.4em helvetica-w01-light`; 6 `20px/1.4em helvetica-w01-bold`; 7 `bold 19px/1.4em barlow-extralight`; 8 `bold 16px/1.6em barlow-extralight`; 9 `bold 14px/1.4em barlow-extralight`; 1 `16px/1.4em din-next-w01-light`; 10 `12px/1.4em din-next-w01-light`.

## Imagens

| Arquivo | Alt / descrição | URL original (resolução máxima) | Baixada? | Usada em |
|---|---|---|---|---|
| logo-horizontal.png | Logo Horizontal.png | https://static.wixstatic.com/media/048bc2_07be541250784cb1b25ae51efc9d4e47~mv2.png | não (host bloqueado) | 25 páginas (todas/quase todas) |
| medicinal-symphony-pill-conveyor-ballet.jpg | medicinal-symphony-pill-conveyor-ballet.jpg | https://static.wixstatic.com/media/048bc2_c043882a03ab4ae3bb16a3f96bf3108b~mv2.jpg | não (host bloqueado) | home, en |
| top-view-white-pills-container.jpg | top-view-white-pills-container.jpg | https://static.wixstatic.com/media/048bc2_7ff78d32450d416aa646e45a93f3dc6f~mv2.jpg | não (host bloqueado) | home, en |
| 8.jpg | 8.jpg | https://static.wixstatic.com/media/048bc2_7bd3116ff50f426989bed0221b2f65bf~mv2.jpg | não (host bloqueado) | home, solucoes, en, en-solucoes |
| stemple-rozne-powloki-51-a8695.jpg | stemple_rozne_powloki_51_a8695.jpg | https://static.wixstatic.com/media/048bc2_f325a7cc256a467899aa2437b338baca~mv2.jpg | não (host bloqueado) | 13 páginas (todas/quase todas) |
| post-polimento-de-puncoes-capa-do-video.jpg | Polimento de punções | https://static.wixstatic.com/media/7f3c10_c1e4116c58494bd59276f4d3e3ddef20f000.jpg | não (host bloqueado) | home, noticias, post-5-sinais-de-que-esta-na-hora-de-revisar-seus-puncoes-e-matrizes, post-representacoes-tecnicas-por-que-escolher-marcas-globais-faz-diferenca-no-seu-processo, post-como-o-dimensionamento-de-puncoes-pode-evitar-prejuizos-silenciosos-na-sua-producao, post-por-que-o-polimento-tecnico-de-puncoes-e-essencial-para-a-qualidade-dos-seus-comprimi |
| post-representacoes-tecnicas.jpg | Representações técnicas: por que escolher marcas globais faz diferença no seu processo | https://static.wixstatic.com/media/048bc2_0a7954bf492c4a749d8626c0d98e6dc0~mv2.jpg | não (host bloqueado) | 13 páginas (todas/quase todas) |
| adamus.png | Adamus.png | https://static.wixstatic.com/media/048bc2_c1793d7c7ead4805b2949af9a4b77c1c~mv2.png | não (host bloqueado) | home, en, post-representacoes-tecnicas-por-que-escolher-marcas-globais-faz-diferenca-no-seu-processo, en-post-technical-representations-why-choosing-global-brands-makes-a-difference-in-your-pr |
| drug-production-conveyor-generative-ai.jpg | drug-production-conveyor-generative-ai.jpg | https://static.wixstatic.com/media/048bc2_9f77587e10b643d680250b84d663aae3~mv2.jpg | não (host bloqueado) | home, en |
| logo-horizontal-branco.png | Logo Horizontal_branco.png | https://static.wixstatic.com/media/048bc2_3b5d76fab12b4083b0555e6656dc5df3~mv2.png | não (host bloqueado) | 25 páginas (todas/quase todas) |
| favicon-original.png | — | https://static.wixstatic.com/media/048bc2_582139b8e93e4d8b87b92dd7478e4cab~mv2.png | não (host bloqueado) | 25 páginas (todas/quase todas) |
| og-image-compartilhamento.png | — | https://static.wixstatic.com/media/048bc2_56aa7ebb3fb945bf846962e8521fdd62~mv2.png | não (host bloqueado) | 16 páginas (todas/quase todas) |
| autor-oberto-alves-oliveira.png | Foto do escritor: Oberto Alves Oliveira | https://lh3.googleusercontent.com/a/ACg8ocK_UF8g9r7hCBe0dlbW9OSN9YwCKKzg8LdLJfbJK8Vdtn4c4g%3Ds96-c | não (host bloqueado) | noticias |
| foto-do-escritor-punch-care.png | Foto do escritor: Punch Care | https://static.wixstatic.com/media/048bc2_cbc7192696de40489640a725631399b0~mv2.png | não (host bloqueado) | 10 páginas (todas/quase todas) |
| post-como-o-dimensionamento-de-puncoes.jpg | — | https://static.wixstatic.com/media/048bc2_90f166b04ee04572bf4b0264aa0b2ba2~mv2.jpg | não (host bloqueado) | 11 páginas (todas/quase todas) |
| post-por-que-o-polimento-tecnico-de-puncoes.jpg | — | https://static.wixstatic.com/media/048bc2_484cac7f254f49c8b073f76b1a572627~mv2.jpg | não (host bloqueado) | 9 páginas (todas/quase todas) |
| solucoes-galeria-01.jpg | — | https://static.wixstatic.com/media/048bc2_57f2d71690444fe6bd904292fa3c2441~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-02.jpg | — | https://static.wixstatic.com/media/048bc2_98d754b1f56747b8976e0c4e96c95e81~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-03.jpg | — | https://static.wixstatic.com/media/048bc2_1cb04d024e594889932de2b9868bd13c~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-04.jpg | — | https://static.wixstatic.com/media/048bc2_72f7102be9814db182da3cc1426b78c9~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-05.jpg | — | https://static.wixstatic.com/media/048bc2_11618483c07d4edca18df54915124c14~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-06.jpg | — | https://static.wixstatic.com/media/048bc2_ee80173a5d074d1696dca720ade97f8f~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-07.jpg | — | https://static.wixstatic.com/media/048bc2_74df700d820041c3b0597618f07e8032~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-08.jpg | — | https://static.wixstatic.com/media/048bc2_3ad899044b4047929860a1d7c18748b7~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-09.jpg | — | https://static.wixstatic.com/media/048bc2_365555b8ef2b460782b1d7dbf09f3b97~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-10.jpg | — | https://static.wixstatic.com/media/048bc2_159ca38c21f642b5b2ff21e1854080df~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-11.jpg | — | https://static.wixstatic.com/media/048bc2_4d5379908c3946989e5fd2cee5cb2679~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-12.jpg | — | https://static.wixstatic.com/media/048bc2_e71916c79fd640e5a632f596033260b7~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| solucoes-galeria-13.jpg | — | https://static.wixstatic.com/media/048bc2_d3eaa418350e49ddaa00d71e85922a2c~mv2.jpg | não (host bloqueado) | solucoes, en-solucoes |
| close-up-white-tablets-with-one-yellow-pill.jpg | close-up-white-tablets-with-one-yellow-pill.jpg | https://static.wixstatic.com/media/048bc2_5cbb42ca2ba643c8a9fb6579dd198285~mv2.jpg | não (host bloqueado) | empresa, en-empresa |
| drug-production-conveyor-generative-ai-2.jpg | drug-production-conveyor-generative-ai (2).jpg | https://static.wixstatic.com/media/048bc2_ece227c5fa964ee3a6b03410d6bad56c~mv2.jpg | não (host bloqueado) | empresa, en-empresa |
| favicon.png | Favicon do site (192×192) | https://www.punchcare.com.br/favicon.ico | **sim** | todas |


Vídeo: o post "Polimento de punções" tem um vídeo (capa `post-polimento-de-puncoes-capa-do-video.jpg`): https://video.wixstatic.com/video/7f3c10_c1e4116c58494bd59276f4d3e3ddef20/480p/mp4/file.mp4 — também não pôde ser baixado.

Ícones das redes sociais do rodapé são do próprio Wix (biblioteca), não foram listados.

## Hosts bloqueados pela rede

O proxy do ambiente de importação respondeu **403 ao CONNECT** ("CONNECT tunnel failed, response 403" / `net::ERR_TUNNEL_CONNECTION_FAILED`) para os hosts abaixo. `www.punchcare.com.br` funcionou normalmente.

| Host | Requisições bloqueadas | Exemplos |
|---|---|---|
| static.wixstatic.com | 56 | `https://static.wixstatic.com/media/048bc2_07be541250784cb1b25ae51efc9d4e47~mv2.png/v1/fill/w_251,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,…`<br>`https://static.wixstatic.com/media/048bc2_c043882a03ab4ae3bb16a3f96bf3108b~mv2.jpg/v1/fill/w_1310,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avi…` |
| static.parastorage.com | 30 | `https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/barlow/v1/2woyxyDnPU0v4IiqYU9D1g.woff2`<br>`https://static.parastorage.com/fonts/v2/2f12de04-5ca4-4ada-9e66-a958673b12b5/v1/helvetica-w01-bold.woff2` |
| frog.wix.com | 75 | `https://frog.wix.com/bolt-performance?src=72&evid=21&appName=thunderbolt&is_rollout=0&is_company_network=false&is_sav_rollout=0&is_dac_rollo…`<br>`https://frog.wix.com/bolt-performance?src=72&evid=28&appName=thunderbolt&is_rollout=0&is_company_network=false&is_sav_rollout=0&is_dac_rollo…` |
| panorama.wixapps.net | 1 | `https://panorama.wixapps.net/api/v1/bulklog` |
| siteassets.parastorage.com | 2 | `https://siteassets.parastorage.com/pages/pages/thunderbolt?appDefinitionIdToSiteRevision=%7B%2214bcded7-0066-7c35-14d7-466cb3f09103%22%3A%22…`<br>`https://siteassets.parastorage.com/pages/pages/thunderbolt?appDefinitionIdToSiteRevision=%7B%2214bcded7-0066-7c35-14d7-466cb3f09103%22%3A%22…` |
| video.wixstatic.com | 1 | `https://video.wixstatic.com/video/7f3c10_c1e4116c58494bd59276f4d3e3ddef20/480p/mp4/file.mp4` |
| browser.sentry-cdn.com | 2 | `https://browser.sentry-cdn.com/7.120.3/modulemetadata.es5.min.js`<br>`https://browser.sentry-cdn.com/7.120.3/bundle.tracing.es5.min.js` |
| lh3.googleusercontent.com | 1 | `https://lh3.googleusercontent.com/a/ACg8ocK_UF8g9r7hCBe0dlbW9OSN9YwCKKzg8LdLJfbJK8Vdtn4c4g%3Ds96-c` |

O que não pôde ser baixado por causa disso:

- **static.wixstatic.com** — todas as imagens do site (logos, fotos, galeria de Soluções, capas dos posts, og:image, favicon original). Só o favicon foi obtido por `https://www.punchcare.com.br/favicon.ico`. Use `imagens/baixar-imagens.sh`.
- **video.wixstatic.com** — vídeo do post "Polimento de punções".
- **static.parastorage.com** — arquivos de fonte (woff2 da Barlow, Helvetica etc.) e scripts do Wix. As cores e fontes acima foram tiradas do CSS inline no HTML e dos estilos calculados no navegador.
- **lh3.googleusercontent.com** — foto do autor "Oberto Alves Oliveira" no blog (`autor-oberto-alves-oliveira.png`).
- **siteassets.parastorage.com**, **frog.wix.com**, **panorama.wixapps.net**, **browser.sentry-cdn.com** — dados internos, telemetria e scripts do Wix; nada de conteúdo.
