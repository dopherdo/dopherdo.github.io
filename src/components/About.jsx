import useInView from '../hooks/useInView'
import './About.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className={`about${inView ? ' in-view' : ''}`} id="about">
      <div className="sticky-label">
        <span>About</span>
      </div>

      <div className="about-body">
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a software engineer finishing my degree at UC Irvine, graduating March 2026.
              I'm currently working at SpaceX in a software engineering co-op in Hawthorne, building
              software that powers real rockets.
            </p>
            <p>
              I love working on complex systems, whether that's building something from scratch
              or jumping into a massive codebase that's been around longer than I've been coding.

            </p>
            <p>
              Outside of work I'm into basketball, cars, travelling, music festivals, and personal 
              finance. Based between Irvine, Fullerton, and wherever the next opportunity takes me.

            </p>
          </div>

          <div className="about-photo">
            {/* Replace with: <img src="/photo.jpg" alt="Chris Yeh" /> */}
            <div className="photo-placeholder">
              <span>Your photo here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
