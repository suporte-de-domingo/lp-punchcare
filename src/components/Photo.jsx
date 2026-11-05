export function Photo({ image, alt, className = '', eager = false }) {
  return (
    <div className={`photo-frame ${className}`}>
      <img
        className="photo"
        src={image.large}
        srcSet={`${image.small} 800w, ${image.large} 1600w`}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={alt}
        style={{ objectPosition: image.focus, transform: `scale(${image.zoom})`, transformOrigin: image.focus }}
        loading={eager ? 'eager' : 'lazy'}
        width="1600"
        height="1071"
      />
    </div>
  )
}
