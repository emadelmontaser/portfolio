export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-muted mt-2">I’m Emad, a Computer Science student focused on building practical software projects with clean interfaces and useful functionality. I’m interested in full-stack apps, browser tools, and interactive visualizations that solve real problems.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-5">
          <div className="card">
            <h2 className="text-xl font-semibold">What I build</h2>
            <p className="text-muted mt-3">Software tools for freelancers, browser workflows, and learning-focused interfaces that help users take action without extra complexity.</p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Focus</h2>
            <ul className="mt-3 space-y-2 text-muted list-disc list-inside">
              <li>Full-stack web applications</li>
              <li>Browser extensions and productivity tools</li>
              <li>Interactive visualizations for algorithms</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-sm font-semibold">Frontend</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">React</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Next.js</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">TypeScript</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Tailwind CSS</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">HTML/CSS</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Vite</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Git</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">GitHub</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Vercel</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Chrome Extensions</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">VS Code</span>
              </div>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm font-semibold">Backend / Data</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Supabase</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">PostgreSQL</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">API basics</span>
              </div>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm font-semibold">Computer Science</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Algorithms</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Data structures</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Pathfinding</span>
                <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">Problem solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
