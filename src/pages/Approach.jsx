import { site } from '../content/site.js'

export default function Approach() {
  return (
    <div>
      <h1>Approccio</h1>
      <div className="bleed band-blue">
        <div className="band-inner">
          <p>{site.approach.text}</p>
        </div>
      </div>
    </div>
  )
}
