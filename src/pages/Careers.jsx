import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../language'
import { mailtoLink } from '../content/company'

const emptyForm = { firstName: '', lastName: '', email: '', phone: '' }

export function Careers() {
  const { t } = useLanguage()
  const page = t.careers
  const f = t.contact.fields
  const [form, setForm] = useState(emptyForm)

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const send = (event) => {
    event.preventDefault()
    const body = [
      `${f.firstName}: ${form.firstName} ${form.lastName}`,
      `${f.email}: ${form.email}`,
      form.phone && `${f.phone}: ${form.phone}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = mailtoLink(`${page.subject}: ${form.firstName} ${form.lastName}`, body)
  }

  return (
    <>
      <PageHeader title={page.title}>
        <p className="page-header-lead hero-step">{page.lead}</p>
      </PageHeader>

      <section className="section">
        <div className="container card-grid card-grid-2">
          <Reveal as="article" className="work-card">
            <h2>{page.valuesTitle}</h2>
            <p className="text">{page.values}</p>
          </Reveal>
          <Reveal as="article" className="work-card" delay={120}>
            <h2>{page.cultureTitle}</h2>
            <p className="text">{page.culture}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-ice">
        <div className="container contact">
          <Reveal>
            <h2>{page.joinTitle}</h2>
            <p className="lead strong">{page.joinLead}</p>
            <p className="text">{page.joinText}</p>
          </Reveal>
          <Reveal as="form" className="form form-white" onSubmit={send} delay={150}>
            <div className="form-grid">
              <label>
                {f.firstName} *
                <input name="firstName" value={form.firstName} onChange={update} required autoComplete="given-name" />
              </label>
              <label>
                {f.lastName} *
                <input name="lastName" value={form.lastName} onChange={update} required autoComplete="family-name" />
              </label>
              <label>
                {f.email} *
                <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
              </label>
              <label>
                {f.phone}
                <input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" />
              </label>
            </div>
            <p className="muted small">{page.attachNote}</p>
            <button className="button" type="submit">
              {page.submit}
            </button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
