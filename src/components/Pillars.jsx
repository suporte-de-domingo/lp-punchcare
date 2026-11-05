import { Reveal } from './Reveal'
import { Symbol } from './Logo'
import { pillars } from '../content'

export function Pillars() {
  return (
    <section className="pillars">
      <div className="container">
        <ul className="pillar-list">
          {pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} className="pillar" delay={index * 100}>
              <span className="pillar-icon">
                <Symbol size={34} />
              </span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal as="p" className="pillars-text">
          Antes de voltar para a máquina, cada punção passa por inspeção, polimento e medição.
          Você recebe o ferramental pronto para produzir e o relatório do que foi feito.
        </Reveal>
      </div>
    </section>
  )
}
