import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <FeaturedProjects />
    </div>
  )
}
