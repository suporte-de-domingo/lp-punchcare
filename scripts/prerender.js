import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { loadEnv } from 'vite'
import { languages, pageList } from '../src/routes.js'
import { render as renderApp } from '../dist-server/entry-server.js'

const siteUrl = loadEnv('production', process.cwd(), '').VITE_SITE_URL.replace(/\/$/, '')
const template = readFileSync('dist/index.html', 'utf8')

const escape = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const setMeta = (html, attribute, key, value) =>
  html.replace(new RegExp(`(<meta ${attribute}="${key}" content=")[^"]*(")`), `$1${escape(value)}$2`)

const pages = languages.flatMap(pageList)

const alternates = (page) => {
  const base = page.url.replace(/^\/en(?=\/|$)/, '') || '/'
  return languages
    .map((content) => {
      const url = base === '/' ? content.prefix || '/' : `${content.prefix}${base}`
      return pages.some((item) => item.url === url)
        ? `<link rel="alternate" hreflang="${content.lang}" href="${siteUrl}${url}" />`
        : ''
    })
    .join('\n    ')
}

const render = (page) => {
  let html = template
    .replace('<div id="root"></div>', `<div id="root" data-path="${page.url}">${renderApp(page.url)}</div>`)
    .replace(/<html lang="[^"]*"/, `<html lang="${page.lang}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${siteUrl}${page.url}$2`)
    .replace('</head>', `  ${alternates(page)}\n  </head>`)
  html = setMeta(html, 'name', 'description', page.description)
  html = setMeta(html, 'property', 'og:title', page.title)
  html = setMeta(html, 'property', 'og:description', page.description)
  html = setMeta(html, 'property', 'og:url', `${siteUrl}${page.url}`)
  html = setMeta(html, 'property', 'og:locale', page.lang === 'en' ? 'en_US' : 'pt_BR')
  html = setMeta(html, 'name', 'twitter:title', page.title)
  return html
}

for (const page of pages) {
  const file = join('dist', page.url, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, render(page))
}

writeFileSync('dist/404.html', template.replace('<div id="root"></div>', `<div id="root" data-path="/404">${renderApp('/404')}</div>`))

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((page) => `  <url><loc>${siteUrl}${page.url}</loc></url>`),
  '</urlset>',
  '',
].join('\n')
writeFileSync('dist/sitemap.xml', sitemap)

console.log(`${pages.length} pages rendered`)
