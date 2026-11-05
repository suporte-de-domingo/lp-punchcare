import { Photo } from './Photo'
import { whatsappLink } from '../content'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-photo">
        <Photo alt="Punções e matrizes de compressão em aço polido" eager />
      </div>
      <div className="container hero-content">
        <span className="bar hero-step" />
        <h1 className="hero-step">Cuidando do seu ferramental.</h1>
        <p className="hero-step">
          Polimento, dimensionamento e representação técnica de punções e matrizes para a
          indústria farmacêutica.
        </p>
        <div className="actions hero-step">
          <a className="button" href={whatsappLink('Olá! Gostaria de um orçamento.')} target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>
          <a className="button button-ghost" href="#servicos">
            Conheça os serviços
          </a>
        </div>
      </div>
    </section>
  )
}
