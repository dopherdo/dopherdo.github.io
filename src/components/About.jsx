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
              I'm a software engineer finishing my degree at UC Irvine, graduating spring 2025.
              I'll be joining SpaceX as a software engineering co-op in Hawthorne — building
              software that powers real rockets.
            </p>
            <p>
              I care about writing clean, maintainable code and shipping things that actually
              work. I'm comfortable across the stack — React, Angular, C#, Entity Framework,
              and SQL — and I'm always looking to pick up whatever gets the job done best.
            </p>
            <p>
              Outside of work I'm into [your hobbies here]. Based between Irvine, Fullerton,
              and wherever the next opportunity takes me.
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
