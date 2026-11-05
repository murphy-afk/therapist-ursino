import { site } from '../content/site.js'
import { Link } from '../router.jsx'

export default function Home() {
  return (
    <section>
      <h1>{site.name}</h1>
      <p className="lead">{site.title}</p>
      <p>{site.intro}</p>
      <Link to="/contatti" className="button">Contatti</Link>
    </section>
  )
}
