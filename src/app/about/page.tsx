import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 px-4 sm:px-0">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-muted text-lg leading-8">
          I’m Emad Elmontaser, a Computer Science student and software developer focused on building practical software with clean interfaces and real use cases.
        </p>
      </header>

      <section className="card space-y-4">
        <div className="flex items-center gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M8 7L4 12l4 5" />
              <path d="M16 7l4 5-4 5" />
              <path d="M12 4v16" />
            </svg>
          </span>
          <h2 className="text-xl font-semibold">Background</h2>
        </div>
        <p className="text-muted leading-7">
          I build web apps, browser tools, and technical projects that focus on usability, clear workflows, and reliable functionality.
        </p>
      </section>

      <section className="card space-y-4">
        <div className="flex items-center gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <h2 className="text-xl font-semibold">Leadership</h2>
        </div>
        <p className="text-muted leading-7">
          Founder and President of <strong className="text-white">Green Tech Club</strong>, a student technology community with <strong className="text-white">250+ members</strong>. I organize hands-on workshops that connect software projects, sustainability, and beginner-friendly technical learning.
        </p>
        <p className="text-muted leading-7">
          I was also part of the <strong className="text-white">Google Developer Student Clubs</strong> core team as an Events Lead, helping organize technical events for students.
        </p>
      </section>

      <section className="card space-y-4">
        <div className="flex items-center gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a4 4 0 0 1 8 0v2" />
            </svg>
          </span>
          <h2 className="text-xl font-semibold">Experience</h2>
        </div>
        <p className="text-muted leading-7">
          Worked as a software developer for <strong className="text-white">Allpac Containers</strong>, building practical software and supporting real business workflows.
        </p>
        <p className="text-muted leading-7">
          My portfolio includes DealFlow, SplitCart, Windsor Parking Helper, and Pathfinding Visualizer — projects focused on full-stack development, product logic, browser tooling, and algorithms.
        </p>
      </section>

      <section className="card space-y-4">
        <div className="flex items-center gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </span>
          <h2 className="text-xl font-semibold">What I Build</h2>
        </div>
        <ul className="mt-4 space-y-2 text-muted list-disc pl-5 leading-7">
          <li>Full-stack web apps</li>
          <li>Browser tools and extensions</li>
          <li>Algorithm and technical projects</li>
        </ul>
      </section>

      <section className="card space-y-4">
        <div className="flex items-center gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </span>
          <h2 className="text-xl font-semibold">Core Tools</h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted">
          <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">React</span>
          <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Next.js</span>
          <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">TypeScript</span>
          <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Tailwind CSS</span>
          <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Supabase</span>
          <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">PostgreSQL</span>
          <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Git</span>
          <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Vercel</span>
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
        <Link href="/projects" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100">View Projects</Link>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm text-white transition hover:border-accent">Contact</Link>
      </div>
    </div>
  )
}
