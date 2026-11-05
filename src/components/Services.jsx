import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { services, steps, whatsappLink } from '../content'

export function Services() {
  return (
    <section id="servicos" className="section section-ice">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Serviços</p>
          <h2>Do polimento ao laudo, seu ferramental em boas mãos.</h2>
        </Reveal>

        <div className="service-list">
          {services.map((service, index) => (
            <Reveal as="article" key={service.title} className="service" delay={index * 120}>
              <div className="service-photo">
                <Photo alt={`${service.title} de punções`} focus={service.focus} zoom={1.8} />
              </div>
              <div className="service-body">
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p className="muted">{service.summary}</p>
                <ul className="check-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="button button-small"
                  href={whatsappLink(`Olá! Gostaria de um orçamento de ${service.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar orçamento
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="steps">
          <h3>Como funciona</h3>
          <ol>
            {steps.map((step, index) => (
              <li key={step.title} style={{ '--delay': `${index * 150 + 200}ms` }}>
                <span className="step-number">{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
