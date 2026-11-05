import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { adamusLogo, images } from '../images'
import { company } from '../content/company'

export function Adamus({ title, text, note }) {
  return (
    <section className="section section-navy">
      <div className="container split">
        <Reveal>
          <h2>{title}</h2>
          <p className="lead">{text}</p>
          <a className="adamus" href={company.adamus} target="_blank" rel="noreferrer">
            <img className="adamus-logo" src={adamusLogo} alt="Adamus S.A." width="600" height="178" loading="lazy" />
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
