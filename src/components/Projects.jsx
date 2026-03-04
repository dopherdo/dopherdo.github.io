import { ExternalLink, Github } from 'lucide-react'
import useInView from '../hooks/useInView'
import './Projects.css'

const PROJECTS = [
  {
    title: 'auto-gambler',
    description:
      'Discord bot that monitors channels for PrizePicks links and automatically places bets via undetected Chrome automation with human-like delays.',
    tags: ['Python', 'Selenium', 'Discord API'],
    github: 'https://github.com/dopherdo/auto-gambler',
    live: null,
  },
  {
    title: '3D Koi Fish Reconstruction',
    description:
      '3D reconstruction pipeline using structured light and stereo vision with two calibrated cameras to capture the geometry and color of a koi fish.',
    tags: ['Python', 'Computer Vision', 'OpenCV'],
    github: 'https://github.com/dopherdo/3d-koi-fish-reconstruction',
    live: null,
  },
  {
    title: 'Mindful Gambling',
    description:
      'Browser-based Blackjack & Roulette using virtual currency. When you go broke, you watch responsible gambling videos to earn your balance back.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/dopherdo/mindful-gambling',
    live: 'https://mindful-gambling.netlify.app',
  },
  {
    title: 'Movie-Land',
    description:
      'Movie search app powered by the OMDb API. Search by keyword and browse results with poster art and hover-reveal release dates.',
    tags: ['React', 'OMDb API', 'CSS'],
    github: 'https://github.com/dopherdo/Movie-Land',
    live: null,
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className={`projects${inView ? ' in-view' : ''}`} id="projects">
      <div className="sticky-label">
        <span>Projects</span>
      </div>

      <div className="projects-body">
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className="project-card" style={{ '--i': i }}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github size={15} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live site">
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
