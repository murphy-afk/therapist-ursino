import { site } from '../content/site.js'

export default function Contacts() {
  const { contacts } = site
  return (
    <section>
      <h1>Contatti</h1>
      <div className="contact-list">
        <p className="contact-item">{contacts.email}</p>
        <p className="contact-item">{contacts.phone}</p>
        <p className="contact-item">{contacts.address}</p>
      </div>
    </section>
  )
}
