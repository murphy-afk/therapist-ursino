import { site } from '../content/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p>{site.name} | {site.title}</p>
      <p>{site.contacts.email} | {site.contacts.phone}</p>
    </footer>
  )
}
