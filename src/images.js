import adamusLogo from './assets/photos/adamus.webp'

const files = import.meta.glob('./assets/photos/*.webp', { eager: true, import: 'default' })

const photo = (name, focus = 'center') => {
  const small = files[`./assets/photos/${name}-800.webp`]
  return {
    tiny: files[`./assets/photos/${name}-480.webp`],
    small,
    large: files[`./assets/photos/${name}-1600.webp`],
    focus,
    zoom: 1,
  }
}

export { adamusLogo }

export const images = {
  hero: photo('punch-set', '40% 50%'),
  pills: photo('pills-container'),
  punchesDetail: photo('punch', 'center 35%'),
  punchesCoatings: photo('coated-punches'),
  punchRow: photo('gallery-11'),
  punchesAndDies: photo('gallery-10'),
  tabletsYellow: photo('tablets-yellow'),
  van: photo('van', '62% 60%'),
  postPolishingVideo: photo('post-polishing-video'),
  postPolishing: photo('post-polishing'),
  gallery: ['01', '02', '03', '04', '05', '07', '08', '09', '10', '11'].map((number) => photo(`gallery-${number}`)),
}
