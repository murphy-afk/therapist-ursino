import { site } from '../content/site.js'

export default function About() {
  return (
    <section>
      <h1>Chi sono</h1>
      <p>{site.about.text}</p>
      <blockquote>{site.about.quote}</blockquote>
    </section>
  )
}
