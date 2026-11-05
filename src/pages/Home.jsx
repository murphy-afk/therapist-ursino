import { site } from '../content/site.js'
import { Link } from '../router.jsx'

const base = import.meta.env.BASE_URL

export default function Home() {
  return (
    <div>
      <section className="hero">
        <p className="hero-kicker">{site.title}</p>
        <h1>{site.name}</h1>
        <p className="hero-text">{site.intro}</p>
        <div className="hero-actions">
          <Link to="/contatti" className="button button-light">Contatti</Link>
          <Link to="/approccio" className="hero-link">Il mio approccio</Link>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C240,100 480,0 720,40 C960,80 1200,10 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </section>
      <section className="split">
        <img
          className="split-image"
          src={`${base}${site.studios[0].images[0]}`}
          alt="Lo studio"
        />
        <div className="split-text">
          <h2>Uno spazio tranquillo</h2>
          <p>{site.homeBlurb}</p>
          <Link to="/studi" className="text-link">Scopri gli studi</Link>
        </div>
      </section>
    </div>
  )
}
