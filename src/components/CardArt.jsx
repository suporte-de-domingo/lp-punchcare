import polishing from '../assets/animations/polishing.svg'
import polishingStill from '../assets/animations/polishing-still.svg'
import polishingEn from '../assets/animations/polishing-en.svg'
import polishingEnStill from '../assets/animations/polishing-en-still.svg'
import sizing from '../assets/animations/sizing.svg'
import sizingStill from '../assets/animations/sizing-still.svg'
import sizingEn from '../assets/animations/sizing-en.svg'
import sizingEnStill from '../assets/animations/sizing-en-still.svg'
import representation from '../assets/animations/representation.svg'
import representationStill from '../assets/animations/representation-still.svg'
import representationEn from '../assets/animations/representation-en.svg'
import representationEnStill from '../assets/animations/representation-en-still.svg'

const art = {
  polishing: { pt: [polishing, polishingStill], en: [polishingEn, polishingEnStill] },
  sizing: { pt: [sizing, sizingStill], en: [sizingEn, sizingEnStill] },
  representation: { pt: [representation, representationStill], en: [representationEn, representationEnStill] },
}

export function CardArt({ name, lang }) {
  const [moving, still] = art[name][lang === 'en' ? 'en' : 'pt']
  return (
    <picture className="card-art">
      <source media="(prefers-reduced-motion: reduce)" srcSet={still} />
      <img src={moving} alt="" width="640" height="400" loading="lazy" />
    </picture>
  )
}
