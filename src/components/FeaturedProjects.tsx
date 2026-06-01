import Link from 'next/link'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  const featured = projects.slice(0,4)
  return (
    <section id="projects">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <p className="text-sm text-muted mt-1">Selected software work with a focus on practical tools and interfaces.</p>
        </div>
        <Link href="/projects" className="text-sm text-muted hover:text-accent">View All →</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {featured.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  )
}
