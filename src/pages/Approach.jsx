import { site } from '../content/site.js'

export default function Approach() {
  return (
    <section className="band band-sea">
      <div className="band-inner">
        <h1>Approccio</h1>
        <p>{site.approach.text}</p>
      </div>
    </section>
  )
}
