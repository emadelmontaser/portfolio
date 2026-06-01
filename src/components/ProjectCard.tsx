import Link from 'next/link'

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <a className="block border border-gray-800 rounded overflow-hidden hover:border-accent transition">
        <div className="w-full h-40 bg-gray-900 flex items-center justify-center text-gray-500">{project.title}</div>
        <div className="p-4 bg-charcoal">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm text-muted mt-2 line-clamp-3">{project.description}</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {project.techStack.slice(0,4).map((t:string)=> <span key={t} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{t}</span>)}
          </div>
        </div>
      </a>
    </Link>
  )
}
