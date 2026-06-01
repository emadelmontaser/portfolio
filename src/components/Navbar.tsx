import Link from 'next/link'
import PageContainer from './PageContainer'

export default function Navbar() {
  return (
    <header className="border-b border-gray-900">
      <PageContainer className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold hover:text-accent">Emad Elmontaser</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="/projects" className="hover:text-accent">Projects</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/resume" className="hover:text-accent">Resume</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </nav>
      </PageContainer>
    </header>
  )
}
