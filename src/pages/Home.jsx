import { site } from '../content/site.js'
import { Link } from '../router.jsx'

export default function Home() {
  return (
    <div>
      <section className="band band-sea hero">
        <div className="band-inner">
          <p className="hero-kicker">{site.title}</p>
          <h1>{site.name}</h1>
          <p className="hero-text">{site.intro}</p>
          <div className="hero-actions">
            <Link to="/contatti" className="button button-light">Contatti</Link>
            <Link to="/approccio" className="button-outline">Il mio approccio</Link>
          </div>
        </div>
      </section>
      <section className="band band-sand quote-band">
        <svg className="band-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C240,100 480,0 720,40 C960,80 1200,10 1440,50 L1440,0 L0,0 Z" />
        </svg>
        <div className="band-inner">
          <blockquote className="quote-large">{site.homeQuote}</blockquote>
        </div>
      </section>
    </div>
  )
}
