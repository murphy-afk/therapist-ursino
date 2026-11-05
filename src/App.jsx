import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useRoute } from './router.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Approach from './pages/Approach.jsx'
import Studios from './pages/Studios.jsx'
import Contacts from './pages/Contacts.jsx'

const pages = {
  '/': Home,
  '/chi-sono': About,
  '/approccio': Approach,
  '/studi': Studios,
  '/contatti': Contacts,
}

export default function App() {
  const route = useRoute()
  const Page = pages[route] || Home

  return (
    <div className="app">
      <Header route={route} />
      <main><Page /></main>
      <Footer />
    </div>
  )
}
