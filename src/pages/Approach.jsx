import { site } from '../content/site.js'

export default function Approach() {
  return (
    <section>
      <h1>Approccio</h1>
      <div className="card">
        <p>{site.approach.text}</p>
      </div>
    </section>
  )
}
