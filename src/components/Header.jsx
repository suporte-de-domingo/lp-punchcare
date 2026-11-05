import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '../language'
import { paths } from '../routes'

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

  return (
    <header className={scrolled || open ? 'header header-solid' : 'header'}>
      <div className="container header-row">
        <Link className="header-logo" to={to(paths.home)}>
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

        <nav id="menu" className={open ? 'menu menu-open' : 'menu'} aria-label={t.nav.mainMenu}>
          {items.map((item) => (
            <NavLink key={item.path} to={to(item.path)} end={item.path === paths.home}>
              {item.label}
            </NavLink>
          ))}
          <LanguageToggle />
          <Link className="button button-small" to={to(paths.contact)}>
            {t.nav.quote}
          </Link>
        </nav>
      </div>
    </header>
  )
}
