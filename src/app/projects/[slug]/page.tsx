import projects from '../../../data/projects'
import Link from 'next/link'

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-sm text-muted mt-1">{project.subtitle}</p>
        </div>
        <div className="flex gap-3">
          {project.liveDemo ? (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded text-sm text-white hover:border-accent">Live demo</a>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded text-sm text-white hover:border-accent">GitHub</a>
          ) : null}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full rounded" />
          ) : (
            <div className="w-full h-48 bg-gray-900 rounded flex items-center justify-center text-gray-500">No image</div>
          )}
        </div>

        <div className="space-y-4">
          <p className="text-muted">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(t => (
              <span key={t} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{t}</span>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Highlights</h3>
            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
              {project.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <Link href="/">← Back to home</Link>
    </div>
  )
}
