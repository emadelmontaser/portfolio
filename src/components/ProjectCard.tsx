'use client'

import Link from 'next/link'

type ProjectCardProps = {
  project: {
    slug: string
    title: string
    description: string
    image?: string
    techStack: string[]
    demoVideoUrl?: string
    github?: string
    liveDemo?: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-800 rounded overflow-hidden hover:border-accent transition hover-lift bg-charcoal">
      <Link href={`/projects/${project.slug}`} className="block">
        {project.image ? (
          <img src={project.image} alt={`${project.title} thumbnail`} className="h-40 w-full object-cover" />
        ) : (
          <div className="w-full h-40 bg-gray-900 flex items-center justify-center text-gray-500">{project.title}</div>
        )}
        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-semibold">{project.title}</h3>
            <div className="ml-auto flex items-center gap-2">
              {project.liveDemo ? (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-xs whitespace-nowrap shrink-0 min-w-fit px-3 py-1 border border-gray-700 rounded hover:border-accent transition">Try Now</a>
              ) : null}
            </div>
          </div>
          <p className="text-sm text-muted mt-3 leading-6">{project.description}</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {project.techStack.slice(0, 4).map((t: string) => (
              <span key={t} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded interactive-pill">{t}</span>
            ))}
          </div>
        </div>
      </Link>
      {project.github ? (
        <div className="p-4 border-t border-gray-800 bg-black/20">
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-white hover:border-white border border-transparent rounded px-2 py-1 transition">
            GitHub repo
          </a>
        </div>
      ) : null}
    </div>
  )
}
