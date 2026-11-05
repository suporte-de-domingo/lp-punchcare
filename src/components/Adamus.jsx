import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { images } from '../images'
import { company } from '../content/company'

export function Adamus({ title, text, note }) {
  return (
    <section className="section section-navy">
      <div className="container split">
        <Reveal>
          <h2>{title}</h2>
          <p className="lead">{text}</p>
          <a className="adamus" href={company.adamus} target="_blank" rel="noreferrer">
            <span className="adamus-name">ADAMUS</span>
            <span className="adamus-note">{note}</span>
          </a>
        </Reveal>
        <Reveal delay={150}>
          <Photo image={images.conveyor} alt="" className="split-photo" />
        </Reveal>
      </div>
    </section>
  )
}
