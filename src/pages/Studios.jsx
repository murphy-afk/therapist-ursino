import { site } from '../content/site.js'
import Gallery from '../components/Gallery.jsx'

export default function Studios() {
  return (
    <section>
      <h1>Studi</h1>
      {site.studios.map((studio) => (
        <article key={studio.id} className="studio">
          <h2>{studio.label}</h2>
          <p>{studio.address}</p>
          {studio.images.length > 0 ? (
            <Gallery images={studio.images} />
          ) : (
            <p className="pending">{studio.note}</p>
          )}
        </article>
      ))}
    </section>
  )
}
