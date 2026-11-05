import { useState } from 'react'
import { site } from '../content/site.js'

const base = import.meta.env.BASE_URL

// Photo swaps in place on click, mirrored layout for odd studios
function StudioSplit({ studio, reverse }) {
  const [current, setCurrent] = useState(0)

  return (
    <section className={reverse ? 'split split-reverse' : 'split'}>
      <img
        className="split-image"
        src={`${base}${studio.images[current]}`}
        alt={studio.label}
      />
      <div className="split-text">
        <h2>{studio.label}</h2>
        <p>{studio.address}</p>
        <div className="gallery">
          {studio.images.map((image, i) => (
            <button
              key={image}
              type="button"
              className={i === current ? 'gallery-thumb active' : 'gallery-thumb'}
              aria-label={`Foto ${i + 1} di ${studio.label}`}
              aria-pressed={i === current}
              onClick={() => setCurrent(i)}
            >
              <img src={`${base}${image}`} alt="" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Studios() {
  return (
    <div>
      {site.studios.map((studio, i) => (
        <StudioSplit key={studio.id} studio={studio} reverse={i % 2 === 1} />
      ))}
    </div>
  )
}
