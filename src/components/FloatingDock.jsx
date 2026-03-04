import { useState, useEffect } from 'react'
import { LINKS } from '../data/links'
import './FloatingDock.css'

export default function FloatingDock() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Watch the hero icon row — when it leaves viewport, dock appears
    const target = document.getElementById('hero-links')
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`floating-dock${visible ? ' visible' : ''}`} role="navigation" aria-label="Quick links">
      {LINKS.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="dock-btn"
          target={href.startsWith('mailto') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon size={17} />
          <span className="dock-tooltip">{label}</span>
        </a>
      ))}
    </div>
  )
}
