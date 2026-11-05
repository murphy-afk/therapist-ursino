import { site } from '../content/site.js'

export default function Contacts() {
  const { contacts } = site
  return (
    <section>
      <h1>Contatti</h1>
      <p>{contacts.email}</p>
      <p>{contacts.phone}</p>
      <p>{contacts.address}</p>
    </section>
  )
}
