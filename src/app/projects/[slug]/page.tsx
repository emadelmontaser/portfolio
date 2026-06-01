import projects from '../../../data/projects'
import Link from 'next/link'
import ProjectHero from '../../../components/ProjectHero'
import ProjectMetaCard from '../../../components/ProjectMetaCard'
import ProjectVideo from '../../../components/ProjectVideo'

type Params = { params: { slug: string } }

export default function ProjectPage({ params }: Params) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) {
    return (
      <div className="card">
        <h2 className="text-xl font-semibold">Project not found</h2>
        <Link href="/">Back home</Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <ProjectHero title={project.title} subtitle={project.subtitle} image={project.image} />

      <div className="grid gap-6 lg:grid-cols-[320px_1fr] items-start">
        <ProjectMetaCard techStack={project.techStack} category={project.subtitle} liveDemo={project.liveDemo} github={project.github} demoVideoUrl={project.demoVideoUrl} />

        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-muted mt-3">{project.longDescription}</p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Key features</h2>
            <ul className="list-disc list-inside text-muted mt-3 space-y-2">
              {project.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>

          {project.demoVideoUrl ? (
            <div className="card">
              <h2 className="text-xl font-semibold">Demo</h2>
              <ProjectVideo url={project.demoVideoUrl} />
            </div>
          ) : null}

          <div className="card">
            <h2 className="text-xl font-semibold">Technical highlights</h2>
            <ul className="mt-3 list-inside list-disc text-muted space-y-2">
              {project.highlights.slice(0,4).map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <Link href="/projects" className="text-sm text-muted hover:text-accent">← Back to projects</Link>
    </div>
  )
}
