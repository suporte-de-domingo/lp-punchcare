import { Symbol } from './Logo'
import { features } from '../content'

export function PunchControl() {
  return (
    <section id="punch-control" className="section">
      <div className="container">
        <div className="software">
          <div>
            <p className="eyebrow eyebrow-light">Software</p>
            <h2>Punch Control: a gestão do seu ferramental na web.</h2>
            <p className="software-text">
              Vida útil, medições, ocorrências e produção dos seus jogos em um só lugar. Uma solução
              Suporte de Domingo e Punch Care.
            </p>
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature.title}>
                  <strong>{feature.title}</strong>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <a className="button button-light" href="https://punchcontrol.com.br" target="_blank" rel="noreferrer">
              Conhecer o Punch Control
            </a>
          </div>
          <div className="software-mark">
            <Symbol size={280} ring="#FFFFFF" />
          </div>
        </div>
      </div>
    </section>
  )
}
