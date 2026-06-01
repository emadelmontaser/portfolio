import Link from 'next/link'

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.slug}`} className="block border border-gray-800 rounded overflow-hidden hover:border-accent transition">
      <div className="w-full h-40 bg-gray-900 flex items-center justify-center text-gray-500">{project.title}</div>
      <div className="p-4 bg-charcoal">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-muted mt-2 max-h-14 overflow-hidden">{project.description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.techStack.slice(0,4).map((t:string) => (
            <span key={t} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{t}</span>
          ))}
        </div>
        {project.demoVideoUrl ? (
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-accent">
            <span className="inline-flex h-7 items-center justify-center rounded bg-white/5 px-3 py-1">Video</span>
          </div>
        ) : null}
      </div>
    </Link>
  )
}
