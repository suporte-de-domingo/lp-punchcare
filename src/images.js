import small from './assets/puncoes-800.webp'
import large from './assets/puncoes-1600.webp'

const punches = (focus, zoom = 1) => ({ small, large, focus, zoom })

export const images = {
  hero: punches('60% 40%'),
  pills: punches('20% 60%', 1.6),
  punchesDetail: punches('80% 30%', 1.8),
  punchesCoatings: punches('45% 50%', 1.3),
  conveyor: punches('50% 80%', 1.4),
  tabletsYellow: punches('30% 30%', 1.5),
  conveyorLine: punches('70% 60%', 1.4),
  postPolishingVideo: punches('15% 40%', 1.6),
  postRepresentation: punches('55% 30%', 1.5),
  postSizing: punches('85% 55%', 1.6),
  postPolishing: punches('35% 70%', 1.6),
  gallery: [punches('10% 30%', 2), punches('50% 40%', 2), punches('90% 35%', 2)],
}
