import { Logo } from './Logo'
import { contact, menu } from '../content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <Logo light />
        <nav className="footer-menu">
          {menu.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </div>
      <div className="container footer-row footer-bottom">
        <p>
          © {new Date().getFullYear()} Punch Care Ltda. · CNPJ {contact.cnpj} · {contact.city}
        </p>
        <p>
          Site por{' '}
          <a href="https://suportededomingo.com.br" target="_blank" rel="noreferrer">Suporte de Domingo</a>
        </p>
      </div>
    </footer>
  )
}
