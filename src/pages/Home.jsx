import { site } from '../content/site.js'
import { Link } from '../router.jsx'

export default function Home() {
  return (
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
  )
}
