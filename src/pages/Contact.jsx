import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../language'
import { company, mailtoLink, whatsappLink } from '../content/company'

const emptyForm = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  intent: '',
  frequency: [],
  message: '',
}

export function Contact() {
  const { t } = useLanguage()
  const page = t.contact
  const f = page.fields
  const [form, setForm] = useState(emptyForm)

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const toggleFrequency = (value) =>
    setForm({
      ...form,
      frequency: form.frequency.includes(value)
        ? form.frequency.filter((item) => item !== value)
        : [...form.frequency, value],
    })

  const summary = () =>
    [
      page.messageIntro,
      `${f.firstName}: ${form.firstName} ${form.lastName}`,
      form.company && `${f.company}: ${form.company}`,
      `${f.email}: ${form.email}`,
      form.phone && `${f.phone}: ${form.phone}`,
      form.address && `${f.address}: ${form.address}`,
      form.intent && `${f.intent} ${form.intent}`,
      form.frequency.length > 0 && `${f.frequency}: ${form.frequency.join(', ')}`,
      form.message && `${f.message}: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

  const sendWhatsApp = (event) => {
    event.preventDefault()
    window.open(whatsappLink(summary()), '_blank', 'noopener')
  }

  const sendEmail = (event) => {
    const formElement = event.currentTarget.form
    if (!formElement.reportValidity()) return
    window.location.href = mailtoLink(page.submit, summary())
  }

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} />

      <section className="section">
        <div className="container contact">
          <Reveal as="form" className="form" onSubmit={sendWhatsApp}>
            <h2 className="form-title">{page.formTitle}</h2>
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
                {f.company}
                <input name="company" value={form.company} onChange={update} autoComplete="organization" />
              </label>
              <label>
                {f.email} *
                <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
              </label>
              <label>
                {f.phone}
                <input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" />
              </label>
              <label>
                {f.address}
                <input name="address" value={form.address} onChange={update} autoComplete="street-address" />
              </label>
            </div>

            <div className="form-grid">
              <fieldset>
                <legend>{f.intent}</legend>
                {[f.buy, f.sell].map((option) => (
                  <label key={option} className="choice">
                    <input type="radio" name="intent" value={option} checked={form.intent === option} onChange={update} />
                    {option}
                  </label>
                ))}
              </fieldset>
              <fieldset>
                <legend>{f.frequency}</legend>
                {[f.once, f.monthly, f.yearly].map((option) => (
                  <label key={option} className="choice">
                    <input
                      type="checkbox"
                      checked={form.frequency.includes(option)}
                      onChange={() => toggleFrequency(option)}
                    />
                    {option}
                  </label>
                ))}
              </fieldset>
            </div>

            <label>
              {f.message}
              <textarea name="message" rows="5" value={form.message} onChange={update} />
            </label>

            <div className="actions">
              <button className="button" type="submit">
                {page.submit}
              </button>
              <button className="button button-outline" type="button" onClick={sendEmail}>
                {page.submitEmail}
              </button>
            </div>
          </Reveal>

          <Reveal className="support" delay={150}>
            <h2>{page.supportTitle}</h2>
            <p className="lead">{page.supportText}</p>
            <dl className="info-list">
              <div>
                <dt>{page.addressTitle}</dt>
                <dd>
                  {company.street}
                  <br />
                  {company.city}, {t.footer.zip} {company.zip}
                </dd>
              </div>
              <div>
                <dt>{page.hoursTitle}</dt>
                <dd>
                  {page.hours[0]}
                  <br />
                  {page.hours[1]}
                </dd>
              </div>
              <div>
                <dt>{page.emailTitle}</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt>{page.phoneTitle}</dt>
                <dd>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    {company.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  )
}
