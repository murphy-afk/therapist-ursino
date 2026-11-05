import { useEffect, useState } from 'react'

function readRoute() {
  const hash = window.location.hash.replace('#', '')
  return hash || '/'
}

// Minimal hash router, works on GitHub Pages without any config
export function useRoute() {
  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    const onChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}

export function Link({ to, children, ...props }) {
  return <a href={`#${to}`} {...props}>{children}</a>
}
