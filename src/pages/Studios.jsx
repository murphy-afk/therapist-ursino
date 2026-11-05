import { site } from '../content/site.js'
import Gallery from '../components/Gallery.jsx'

const base = import.meta.env.BASE_URL

export default function Studios() {
  return (
    <div>
      <h1>Studi</h1>
      {site.studios.map((studio) => (
        <section key={studio.id} className="split">
          {studio.images.length > 0 ? (
            <img
              className="split-image"
              src={`${base}${studio.images[0]}`}
              alt={studio.label}
            />
          ) : (
            <div className="split-image split-placeholder" aria-hidden="true"></div>
          )}
          <div className="split-text">
            <h2>{studio.label}</h2>
            <p>{studio.address}</p>
            {studio.images.length > 0 ? (
              <Gallery images={studio.images} />
            ) : (
              <p className="pending">{studio.note}</p>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
