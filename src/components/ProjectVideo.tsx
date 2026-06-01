import React from 'react'

type Props = {
  url?: string
}

function getEmbed(url?: string) {
  if (!url) return null
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/)
  return m ? `https://www.youtube.com/embed/${m[1]}` : null
}

export default function ProjectVideo({ url }: Props) {
  const embed = getEmbed(url)
  if (!embed) return null
  return (
    <div className="mt-4 rounded-lg overflow-hidden border border-gray-800 bg-black">
      <div className="relative aspect-[16/9]">
        <iframe className="absolute inset-0 w-full h-full" src={embed} title="Project demo video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  )
}
