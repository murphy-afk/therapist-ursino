import { site } from '../content/site.js'

export default function Studios() {
  return (
    <section>
      <h1>Studi</h1>
      {site.studios.map((studio) => (
        <article key={studio.id} className="studio">
          <h2>{studio.label}</h2>
          <p>{studio.address}</p>
        </article>
      ))}
    </section>
  )
}
