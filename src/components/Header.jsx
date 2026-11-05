import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { menu, whatsappLink } from '../content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled || open ? 'header header-solid' : 'header'}>
      <div className="container header-row">
        <a className="header-logo" href="#inicio" aria-label="Punch Care, início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <button
          className={open ? 'menu-button menu-button-open' : 'menu-button'}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="menu" className={open ? 'menu menu-open' : 'menu'}>
          {menu.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button-small" href={whatsappLink()} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
