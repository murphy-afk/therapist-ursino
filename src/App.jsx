import { site } from './content/site.js'

export default function App() {
  return (
    <main className="page">
      <h1>{site.name}</h1>
      <p>{site.title}</p>
      <p>{site.intro}</p>
      <p>{site.pendingNote}</p>
    </main>
  )
}
