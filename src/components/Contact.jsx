import { useState } from 'react'
import { contact, whatsappLink } from '../content'

const emptyForm = { name: '', company: '', service: '', message: '' }

export function Contact() {
  const [form, setForm] = useState(emptyForm)

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const send = (event) => {
    event.preventDefault()
    const lines = [
      'Olá! Gostaria de um orçamento.',
      `Nome: ${form.name}`,
      form.company && `Empresa: ${form.company}`,
      form.service && `Serviço: ${form.service}`,
      form.message && `Mensagem: ${form.message}`,
    ]
    window.open(whatsappLink(lines.filter(Boolean).join('\n')), '_blank', 'noopener')
  }

  return (
    <section id="contato" className="section">
      <div className="container contact">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Vamos cuidar do seu ferramental?</h2>
          <dl className="contact-list">
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={whatsappLink()} target="_blank" rel="noreferrer">{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Endereço</dt>
              <dd>{contact.city}</dd>
            </div>
          </dl>
        </div>

        <form className="form" onSubmit={send}>
          <h3>Peça um orçamento</h3>
          <label>
            Nome
            <input name="name" value={form.name} onChange={update} required autoComplete="name" />
          </label>
          <label>
            Empresa
            <input name="company" value={form.company} onChange={update} autoComplete="organization" />
          </label>
          <label>
            Serviço
            <select name="service" value={form.service} onChange={update}>
              <option value="">Selecione</option>
              <option>Polimento</option>
              <option>Dimensionamento</option>
              <option>Representação técnica</option>
              <option>Punch Control</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={update}
              placeholder="Quantidade de jogos, máquina, prazo..."
            />
          </label>
          <button className="button" type="submit">Enviar pelo WhatsApp</button>
        </form>
      </div>
    </section>
  )
}
