export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-muted mt-2">I’m Emad, a Computer Science student focused on building practical software projects with clean interfaces and useful functionality.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="card">
            <h2 className="text-xl font-semibold">What I build</h2>
            <ul className="mt-3 space-y-2 text-muted list-inside">
              <li>• Full-stack web apps</li>
              <li>• Browser tools and extensions</li>
              <li>• Algorithm and data-driven projects</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Current focus</h2>
            <p className="text-muted mt-3">I’m currently focused on improving my full-stack development, UI execution, and project presentation.</p>
          </div>
        </div>

        <div>
          <div className="card">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-muted mt-3">For project inquiries or collaborations, reach out via my GitHub profile or the contact page.</p>
            <a href="https://github.com/emadelmontaser" target="_blank" rel="noreferrer" className="inline-block mt-4 px-4 py-2 border border-gray-700 rounded hover:border-accent">View GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}
