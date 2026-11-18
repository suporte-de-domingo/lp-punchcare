import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { WhatsAppButton } from './WhatsAppButton'
import { useLanguage } from '../language'
import { paths } from '../routes'
import { SocialLinks } from './SocialLinks'
import { company, mailtoLink, whatsappLink } from '../content/company'

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
              placeholder={t.contact.fields.email}
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
          <a href={whatsappLink(t.whatsapp.greeting)} target="_blank" rel="noreferrer">
            {company.phone}
          </a>
        </address>

        <SocialLinks className="footer-social" label={t.footer.social} />
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {company.legalName}</p>
        <nav className="footer-links" aria-label={t.footer.legal}>
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
      <WhatsAppButton />
    </footer>
  )
}
