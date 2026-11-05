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

- Textos, serviços, contatos e menu: `src/content.js`
- Seções da página: `src/components/`
- Cores e estilos: `src/styles.css`
- Favicon, imagem de compartilhamento, `robots.txt`, `sitemap.xml` e `llms.txt`: `public/`
