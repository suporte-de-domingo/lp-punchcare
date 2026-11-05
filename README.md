# lp-punchcare

Site institucional da Punch Care, em React com Vite.

## Rodar

```bash
yarn
yarn dev
```

## Publicar

```bash
yarn build
```

O resultado fica em `dist/`, que é um site estático: pode ir para Vercel, Netlify, Cloudflare Pages, GitHub Pages ou qualquer servidor.

Na Vercel ou na Netlify, basta apontar para o repositório com o comando `yarn build` e a pasta `dist`.

## Endereço do site

As tags de compartilhamento (Open Graph) usam o endereço definido em `.env`:

```
VITE_SITE_URL=https://www.punchcare.com.br
```

Para publicar em outro endereço durante a validação, defina `VITE_SITE_URL` no serviço de hospedagem.

## Onde mexer

- Textos em português: `src/content/pt.js`
- Textos em inglês: `src/content/en.js`
- Telefone, e-mail, endereço e redes sociais: `src/content/company.js`
- Endereços das páginas e títulos de compartilhamento: `src/routes.js`
- Fotos de cada lugar do site: `src/images.js`
- Páginas: `src/pages/`
- Partes repetidas (menu, rodapé, cards): `src/components/`
- Cores e estilos: `src/styles.css`
- Favicon, imagem de compartilhamento, `robots.txt` e `llms.txt`: `public/`

## Fotos

Enquanto as fotos originais do site antigo não chegam, todos os lugares usam a foto dos punções com cortes diferentes. Para trocar, coloque o arquivo em `src/assets/`, importe em `src/images.js` e aponte a chave do lugar para ele.

## Páginas geradas

O `yarn build` cria um `index.html` para cada página (em português e em inglês), com título e descrição próprios, além do `sitemap.xml`. O `vercel.json` redireciona os endereços antigos do Wix (com acento e `/post/...`) para os novos.
