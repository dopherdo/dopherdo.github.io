import { ExternalLink, Github } from 'lucide-react'
import useInView from '../hooks/useInView'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Project One',
    description:
      'A brief description of what this project does, the problem it solves, and why you built it.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/dopherdo',
    live: null,
  },
  {
    title: 'Project Two',
    description:
      'A brief description of what this project does, the problem it solves, and why you built it.',
    tags: ['Angular', 'C#', 'Entity Framework', 'SQL Server'],
    github: 'https://github.com/dopherdo',
    live: null,
  },
  {
    title: 'Project Three',
    description:
      'A brief description of what this project does, the problem it solves, and why you built it.',
    tags: ['Python', 'FastAPI', 'React'],
    github: 'https://github.com/dopherdo',
    live: '#',
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
