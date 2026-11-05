import small from '../assets/puncoes-800.webp'
import large from '../assets/puncoes-1600.webp'

export function Photo({ alt, focus = 'center', zoom = 1, className = '', eager = false }) {
  return (
    <img
      className={`photo ${className}`}
      src={large}
      srcSet={`${small} 800w, ${large} 1600w`}
      sizes="(max-width: 800px) 100vw, 50vw"
      alt={alt}
      style={{ objectPosition: focus, transform: `scale(${zoom})`, transformOrigin: focus }}
      loading={eager ? 'eager' : 'lazy'}
      width="1600"
      height="1071"
    />
  )
}
