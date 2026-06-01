import React from 'react'

type Props = {
  title: string
  subtitle?: string
  image?: string
}

export default function ProjectHero({ title, subtitle, image }: Props) {
  return (
    <div className="relative w-full">
      {image ? (
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 md:h-96 object-cover rounded-lg" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute left-6 bottom-6 text-white">
            {subtitle ? <div className="text-sm text-gray-300 mb-1">{subtitle}</div> : null}
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          </div>
        </div>
      ) : (
        <div className="w-full h-64 md:h-96 bg-gray-900 rounded-lg flex items-end p-6">
          <div className="text-white">
            {subtitle ? <div className="text-sm text-gray-300 mb-1">{subtitle}</div> : null}
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          </div>
        </div>
      )}
    </div>
  )
}
