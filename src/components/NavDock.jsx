import { useState, useEffect } from 'react'
import './NavDock.css'

const NAV = [
  { label: 'Home',     href: '#' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function NavDock() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`nav-dock${visible ? ' visible' : ''}`}>
      {NAV.map(({ label, href }) => (
        <a key={label} href={href} className="nav-link">
          {label}
        </a>
      ))}
    </nav>
  )
}
