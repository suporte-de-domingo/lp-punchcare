import { useState } from 'react'
import { Logo } from './Logo'
import { menu, whatsappLink } from '../content'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-row">
        <a href="#inicio" aria-label="Punch Care, início">
          <Logo />
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu"
          aria-label="Abrir menu"
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
