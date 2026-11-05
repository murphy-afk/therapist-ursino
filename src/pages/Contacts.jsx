import { site } from '../content/site.js'

export default function Contacts() {
  const { contacts } = site
  return (
    <section className="band band-sand">
      <div className="band-inner">
        <h1>Contatti</h1>
        <div className="contact-list">
          <p className="contact-row">{contacts.email}</p>
          <p className="contact-row">{contacts.phone}</p>
          <p className="contact-row">{contacts.address}</p>
        </div>
      </div>
    </section>
  )
}
