import { Link } from '../router.jsx'

const nav = [
  { to: '/chi-sono', label: 'Chi sono' },
  { to: '/approccio', label: 'Approccio' },
  { to: '/studi', label: 'Studi' },
  { to: '/contatti', label: 'Contatti' },
]

export default function Header({ route }) {
  return (
    <header className="header">
      <Link to="/" className="brand">Giulia Ursino</Link>
      <nav className="nav">
        {nav.map((item) => (
          <Link key={item.to} to={item.to} className={route === item.to ? 'active' : ''}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
