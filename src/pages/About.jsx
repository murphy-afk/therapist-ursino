import { site } from '../content/site.js'

const base = import.meta.env.BASE_URL

export default function About() {
  return (
    <section className="split">
      <img
        className="split-image"
        src={`${base}${site.studios[0].images[2]}`}
        alt="Angolo dello studio"
      />
      <div className="split-text">
        <h1>Chi sono</h1>
        <p>{site.about.text}</p>
        <blockquote>{site.about.quote}</blockquote>
      </div>
    </section>
  )
}
