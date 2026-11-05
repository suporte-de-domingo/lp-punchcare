export function Photo({ image, alt, className = '', eager = false, sizes = '(max-width: 860px) 100vw, 50vw' }) {
  return (
    <div className={`photo-frame ${className}`}>
      <img
        className="photo"
        src={image.large ?? image.small}
        srcSet={[
          image.tiny && `${image.tiny} 480w`,
          `${image.small} 800w`,
          image.large && `${image.large} 1600w`,
        ]
          .filter(Boolean)
          .join(', ')}
        sizes={sizes}
        alt={alt}
        style={{ objectPosition: image.focus, transform: `scale(${image.zoom})`, transformOrigin: image.focus }}
        loading={eager ? 'eager' : 'lazy'}
        width="1600"
        height="1071"
      />
    </div>
  )
}
