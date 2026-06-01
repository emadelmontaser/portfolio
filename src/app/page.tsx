import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import SkillsSection from '../components/SkillsSection'
import AboutSection from '../components/AboutSection'
import ResumeSection from '../components/ResumeSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}
