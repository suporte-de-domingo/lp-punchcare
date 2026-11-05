import { pt } from './content/pt.js'
import { en } from './content/en.js'

export const languages = [pt, en]

export const paths = {
  home: '/',
  solutions: '/solucoes',
  company: '/empresa',
  news: '/noticias',
  contact: '/contate-nos',
  careers: '/trabalhe-conosco',
  privacy: '/politica-de-privacidade',
  terms: '/termos-e-condicoes',
}

export const postPath = (slug) => `${paths.news}/${slug}`

export const localize = (content, path) => (path === '/' ? content.prefix || '/' : `${content.prefix}${path}`)

export function pageList(content) {
  const t = content.nav
  const pages = [
    { path: paths.home, title: `Punch Care · ${content.home.title}`, description: content.home.intro[0] },
    { path: paths.solutions, title: `${t.solutions} · Punch Care`, description: content.solutions.servicesText },
    { path: paths.company, title: `${t.company} · Punch Care`, description: content.company.philosophy[0] },
    { path: paths.news, title: `${t.news} · Punch Care`, description: content.news.title },
    { path: paths.contact, title: `${t.contact} · Punch Care`, description: content.contact.title },
    { path: paths.careers, title: `${content.footer.careers} · Punch Care`, description: content.careers.lead },
    { path: paths.privacy, title: `${content.privacy.title} · Punch Care`, description: content.privacy.intro },
    { path: paths.terms, title: `${content.terms.title} · Punch Care`, description: content.terms.intro },
  ]
  const posts = content.posts.map((post) => ({
    path: postPath(post.slug),
    title: `${post.title} · Punch Care`,
    description: post.excerpt,
  }))
  return [...pages, ...posts].map((page) => ({ ...page, url: localize(content, page.path), lang: content.lang }))
}
