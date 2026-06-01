import projects from '../../../data/projects'
import Link from 'next/link'

type Params = { params: { slug: string } }

function getYoutubeEmbedUrl(url?: string) {
  if (!url) return null
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

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

  const demoEmbedUrl = getYoutubeEmbedUrl(project.demoVideoUrl)

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-sm text-muted mt-1">{project.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.liveDemo ? (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded text-sm text-white hover:border-accent">Live demo</a>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded text-sm text-white hover:border-accent">GitHub</a>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <div className="space-y-4">
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
        </div>

        <div className="space-y-4">
          <div className="card">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full rounded" />
            ) : (
              <div className="w-full h-56 bg-gray-900 rounded flex items-center justify-center text-gray-500">No image</div>
            )}
          </div>

          {demoEmbedUrl ? (
            <div className="card">
              <h2 className="text-xl font-semibold">Demo Video</h2>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-800 bg-black">
                <div className="relative aspect-[16/9]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={demoEmbedUrl}
                    title={`${project.title} demo video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ) : null}

          <div className="card">
            <h2 className="text-xl font-semibold">Tech stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link href="/projects" className="text-sm text-muted hover:text-accent">← Back to projects</Link>
    </div>
  )
}
