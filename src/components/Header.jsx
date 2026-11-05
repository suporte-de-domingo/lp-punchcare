import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { useLanguage } from '../language'
import { languages, paths } from '../routes'

export function Header() {
  const { t, to } = useLanguage()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const items = [
    { label: t.nav.home, path: paths.home },
    { label: t.nav.solutions, path: paths.solutions },
    { label: t.nav.company, path: paths.company },
    { label: t.nav.news, path: paths.news },
    { label: t.nav.contact, path: paths.contact },
  ]

  const other = languages.find((content) => content !== t)
  const basePath = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  const slug = basePath.startsWith(`${paths.news}/`) && basePath.slice(paths.news.length + 1)
  const translated = !slug || other.posts.some((post) => post.slug === slug)
  const otherPath = translated ? basePath : paths.news
  const otherLanguage = otherPath === '/' ? other.prefix || '/' : `${other.prefix}${otherPath}`

  return (
    <header className={scrolled || open ? 'header header-solid' : 'header'}>
      <div className="container header-row">
        <Link className="header-logo" to={to(paths.home)} aria-label="Punch Care">
          <Logo />
        </Link>

        <button
          className={open ? 'menu-button menu-button-open' : 'menu-button'}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="menu" className={open ? 'menu menu-open' : 'menu'}>
          {items.map((item) => (
            <NavLink key={item.path} to={to(item.path)} end={item.path === paths.home}>
              {item.label}
            </NavLink>
          ))}
          <Link className="language" to={otherLanguage} hrefLang={other.lang} title={t.switchLabel}>
            {t.switchShort}
          </Link>
          <Link className="button button-small" to={to(paths.contact)}>
            {t.nav.quote}
          </Link>
        </nav>
      </div>
    </header>
  )
}
