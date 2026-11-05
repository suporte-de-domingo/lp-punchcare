import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { useLanguage } from '../language'
import { paths } from '../routes'
import { company, mailtoLink } from '../content/company'

export function Footer() {
  const { t, to } = useLanguage()
  const [email, setEmail] = useState('')

  const subscribe = (event) => {
    event.preventDefault()
    window.location.href = mailtoLink(t.footer.newsletterSubject, email)
  }

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>{t.footer.about}</p>
          <Link className="button button-small" to={to(paths.careers)}>
            {t.footer.careers}
          </Link>
        </div>

        <form className="newsletter" onSubmit={subscribe}>
          <label htmlFor="newsletter-email">{t.footer.newsletterTitle}</label>
          <div className="newsletter-row">
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className="button button-small" type="submit">
              {t.footer.newsletterSubmit}
            </button>
          </div>
        </form>

        <address className="footer-contact">
          <span>{company.street}</span>
          <span>
            {company.city}, {t.footer.zip} {company.zip}
          </span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
            {company.phone}
          </a>
        </address>

        <nav className="footer-social" aria-label="Redes sociais">
          {company.social.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {company.legalName}</p>
        <nav className="footer-links">
          <Link to={to(paths.privacy)}>{t.footer.privacy}</Link>
          <Link to={to(paths.terms)}>{t.footer.terms}</Link>
        </nav>
        <p>
          {t.footer.credit}{' '}
          <a href="https://suportededomingo.com.br" target="_blank" rel="noreferrer">
            Suporte de Domingo
          </a>
        </p>
      </div>
    </footer>
  )
}
