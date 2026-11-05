import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { values } from '../content'

export function About() {
  return (
    <section id="sobre" className="section section-sand">
      <div className="container about">
        <Reveal className="about-photo">
          <Photo alt="Detalhe da face de punções polidas" focus="30% 30%" />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Sobre</p>
          <h2>Parceira da indústria farmacêutica.</h2>
          <p className="about-text">
            A Punch Care cuida do ferramental de compressão da indústria farmacêutica: polimento,
            dimensionamento e representação técnica de punções e matrizes. Trabalhamos lado a lado
            com a manutenção e a produção, para que cada jogo dure mais e produza com segurança.
          </p>
          <ul className="value-list">
            {values.map((value) => (
              <li key={value.title}>
                <strong>{value.title}</strong>
                <span>{value.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
