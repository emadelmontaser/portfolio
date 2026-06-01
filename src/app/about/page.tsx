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

      {/* Background */}
      <section className="card space-y-4">
        <div className="flex items-start gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 7L4 12l4 5" />
              <path d="M16 7l4 5-4 5" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold">Background</h2>
            <p className="text-muted leading-7 mt-2">
              I build web apps, browser tools, and technical projects that focus on usability, clear workflows, and reliable functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="card space-y-4">
        <div className="flex items-start gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold">Leadership</h2>
            <div className="space-y-3 mt-2 text-muted leading-7">
              <p>
                Founder and President of <strong className="text-white">Green Tech Club</strong>, a student technology community with <strong className="text-white">250+ members</strong>. I organize hands-on workshops that connect software projects, sustainability, and beginner-friendly technical learning.
              </p>
              <p>
                I was also part of the <strong className="text-white">Google Developer Student Clubs</strong> core team as an Events Lead, helping organize technical events for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="card space-y-4">
        <div className="flex items-start gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="space-y-3 mt-2 text-muted leading-7">
              <p>
                Worked as a software developer for <strong className="text-white">Allpac Containers</strong>, building practical software and supporting real business workflows.
              </p>
              <p>
                My portfolio includes Client Pipeline Tracker, SplitCart, Windsor Parking Helper, and Pathfinding Visualizer — projects focused on full-stack development, product logic, browser tooling, and algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="card space-y-4">
        <div className="flex items-start gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20" />
              <path d="M2 12h20" />
              <path d="M6 6l12 12" />
              <path d="M18 6l-12 12" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold">What I Build</h2>
            <ul className="mt-3 space-y-2 text-muted leading-7">
              <li className="flex items-baseline gap-2">
                <span className="text-accent flex-shrink-0">•</span>
                <span>Full-stack web apps</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent flex-shrink-0">•</span>
                <span>Browser tools and extensions</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent flex-shrink-0">•</span>
                <span>Algorithm and technical projects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Tools */}
      <section className="card space-y-4">
        <div className="flex items-start gap-4">
          <span className="section-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-8.94-8.94l-3.77 3.77a1 1 0 0 0 0 1.39l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77z" />
              <path d="M9.3 17.7a1 1 0 0 0 0-1.4L7.7 14.7a1 1 0 0 0-1.4 0l-3.77 3.77a6 6 0 0 0 8.94 8.94l3.77-3.77a1 1 0 0 0 0-1.39l-1.6-1.6a1 1 0 0 0-1.4 0l-3.77 3.77z" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold">Core Tools</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted">
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">React</span>
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">Next.js</span>
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">TypeScript</span>
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">Tailwind CSS</span>
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">PostgreSQL</span>
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">MongoDB</span>
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">Supabase</span>
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">Git</span>
              <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded">Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
        <Link href="/projects" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100">
          View Projects
        </Link>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm text-white transition hover:border-accent">
          Contact
        </Link>
      </div>
    </div>
  )
}
