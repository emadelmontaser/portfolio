import React from 'react'

type Props = {
  techStack: string[]
  category?: string
  liveDemo?: string
  github?: string
  demoVideoUrl?: string
}

export default function ProjectMetaCard({ techStack, category, liveDemo, github, demoVideoUrl }: Props) {
  return (
    <aside className="card w-full md:w-80">
      <div>
        <h3 className="text-sm font-semibold">Tech Stack</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.map(t => (
            <span key={t} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{t}</span>
          ))}
        </div>
      </div>

      {category ? (
        <div className="mt-4">
          <h3 className="text-sm font-semibold">Category</h3>
          <div className="mt-2 text-muted">{category}</div>
        </div>
      ) : null}

      <div className="mt-4 flex flex-col gap-2">
        {liveDemo ? (
          <a href={liveDemo} target="_blank" rel="noreferrer" className="inline-block text-center px-4 py-2 border border-gray-700 rounded hover:border-accent">Try Now</a>
        ) : null}
        {github ? (
          <a href={github} target="_blank" rel="noreferrer" className="inline-block text-center px-4 py-2 border border-gray-700 rounded hover:border-accent">GitHub</a>
        ) : null}
        {demoVideoUrl ? (
          <a href={demoVideoUrl} target="_blank" rel="noreferrer" className="inline-block text-center px-4 py-2 border border-gray-700 rounded hover:border-accent">Demo Video</a>
        ) : null}
      </div>
    </aside>
  )
}
