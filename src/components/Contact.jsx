import { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import XLogo from './XLogo'
import useInView from '../hooks/useInView'
import './Contact.css'

const SOCIALS = [
  { icon: Mail,     label: 'dopher20@gmail.com', href: 'mailto:dopher20@gmail.com' },
  { icon: Github,   label: 'GitHub',              href: 'https://github.com/dopherdo' },
  { icon: Linkedin, label: 'LinkedIn',            href: 'https://linkedin.com/in/chrisxyeh' },
  { icon: XLogo,    label: 'X',                   href: 'https://x.com/chrisyeh15' },
]

// Replace 'YOUR_FORM_ID' after signing up at formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/mdalqdek'

export default function Contact() {
  const [ref, inView] = useInView()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section ref={ref} className={`contact${inView ? ' in-view' : ''}`} id="contact">
      <div className="sticky-label">
        <span>Contact</span>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <p className="contact-tagline">
            Open to new opportunities, collaborations, or just a chat.
          </p>
          <div className="contact-socials">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} className="contact-social-link"
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer">
                <Icon size={15} strokeWidth={1.8} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name" name="name" type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              placeholder="What's on your mind?"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-footer">
            {status === 'success' && <p className="form-msg form-msg--ok">Message sent!</p>}
            {status === 'error'   && <p className="form-msg form-msg--err">Something went wrong. Try emailing directly.</p>}
            <button type="submit" className="send-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
