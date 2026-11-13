import { useState } from 'react'
import { Photo } from './Photo'

export function Carousel({ images, label, pauseLabel, playLabel }) {
  const [paused, setPaused] = useState(false)
  const copies = [images, images]

  return (
    <div className={`carousel ${paused ? 'carousel-paused' : ''}`} style={{ '--count': images.length }}>
      <div className="carousel-viewport" role="region" aria-label={label} tabIndex={0}>
        <div className="carousel-track">
          {copies.map((list, copy) => (
            <ul key={copy} className="carousel-list" aria-hidden={copy > 0 || undefined}>
              {list.map((image, index) => (
                <li key={index}>
                  <Photo image={image} alt="" className="carousel-photo" sizes="(max-width: 640px) 180px, 260px" eager />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="container carousel-controls">
        <button
          type="button"
          className="carousel-toggle"
          aria-pressed={paused}
          aria-label={paused ? playLabel : pauseLabel}
          onClick={() => setPaused(!paused)}
        >
          {paused ? (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 1.5L12 7L3 12.5Z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 1.5H5.5V12.5H3ZM8.5 1.5H11V12.5H8.5Z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
