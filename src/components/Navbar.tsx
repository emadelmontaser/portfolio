import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-gray-900">
      <div className="site-container flex items-center justify-between py-4">
        <div className="text-lg font-semibold">Emad Elmontaser</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="/projects" className="hover:text-accent">Projects</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/resume" className="hover:text-accent">Resume</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
