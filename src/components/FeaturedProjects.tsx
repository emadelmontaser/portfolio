import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  const featured = projects.slice(0,3)
  return (
    <section id="projects">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl font-semibold">Featured Projects</h2>
        <a href="#" className="text-sm text-muted hover:text-accent">View All →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  )
}
