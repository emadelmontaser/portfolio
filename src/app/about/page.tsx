export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-muted mt-2">I’m Emad Elmontaser, a Computer Science student and software developer focused on building practical software with clean interfaces and real use cases. My projects usually start from a simple problem: making a workflow easier, a tool more usable, or a technical concept easier to understand.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="card">
            <h2 className="text-xl font-semibold">Background</h2>
            <p className="text-muted mt-3">I build full-stack web apps, browser tools, and interactive technical projects. My work focuses on creating useful products rather than demos — clean UI, reliable functionality, and clear UX are priorities across my projects.</p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Leadership</h2>
            <ul className="mt-3 space-y-2 text-muted list-inside">
              <li>Founder & President — Green Tech Club (150+ members)</li>
              <li>Organized hands-on workshops combining software and sustainability</li>
              <li>Google Developer Student Clubs — Core team / Events Lead</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Experience</h2>
            <p className="text-muted mt-3">Worked as a software developer for Allpac Containers and built practical projects including DealFlow, SplitCart, Windsor Parking Helper, and Pathfinding Visualizer. I focus on full-stack development, clean UI execution, and building tools that solve real problems.</p>
          </div>
        </div>

        <div>
          <div className="card">
            <h2 className="text-xl font-semibold">What I build</h2>
            <ul className="mt-3 space-y-2 text-muted list-inside">
              <li>• Full-stack web apps</li>
              <li>• Browser tools and extensions</li>
              <li>• Interactive technical projects</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted">
              <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">React</span>
              <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Next.js</span>
              <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">TypeScript</span>
              <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Tailwind CSS</span>
              <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Supabase</span>
              <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">PostgreSQL</span>
              <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Git</span>
              <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">Vercel</span>
            </div>

            <a href="/contact" className="inline-block mt-6 px-4 py-2 border border-gray-700 rounded hover:border-accent">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}
