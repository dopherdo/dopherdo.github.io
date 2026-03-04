import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { LINKS } from '../data/links'
import './Hero.css'

// Looping typewriter — types forward, pauses, deletes backward, repeats
function TypedLine({ text, startDelay }) {
  const [count,    setCount]    = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [started,  setStarted]  = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(t)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    let t

    if (!deleting) {
      if (count < text.length) {
        t = setTimeout(() => setCount(c => c + 1), 60)
      } else {
        t = setTimeout(() => setDeleting(true), 1600)
      }
    } else {
      if (count > 0) {
        t = setTimeout(() => setCount(c => c - 1), 32)
      } else {
        t = setTimeout(() => setDeleting(false), 500)
      }
    }

    return () => clearTimeout(t)
  }, [started, count, deleting, text])

  return (
    <span className="typed-line">
      {text.slice(0, count)}
      <span className="typed-cursor" />
    </span>
  )
}

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-name">
          <h1 className="hero-line1">Chris Yeh</h1>
          <p className="hero-line2">
            <TypedLine text="Software Engineer in Los Angeles" startDelay={1100} />
          </p>
        </div>

        <div id="hero-links" className="icon-row">
          {LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="icon-btn"
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={22} strokeWidth={1.8} />
              <span className="icon-tooltip">{label}</span>
            </a>
          ))}
        </div>

        <div className="status-row">
          <div className="currently">
            <span className="currently-pill">
              <span className="currently-dot" />
              CURRENTLY
            </span>
            <p>Incoming Software Engineer @ SpaceX</p>
          </div>

          <div className="divider" />

          <div className="previously">
            <span className="previously-label">previously</span>
            <p>Software Engineer Intern · Capital One</p>
          </div>
        </div>
      </div>

      <div className={`scroll-indicator${scrolled ? ' hidden' : ''}`}>
        <span>scroll</span>
        <ChevronDown size={16} className="scroll-chevron" />
      </div>

      <div className="hero-fade" />
    </section>
  )
}
