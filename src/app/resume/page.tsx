export default function ResumePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Resume</h1>
        <p className="text-muted mt-2">A quick overview of my experience, projects, and technical skills.</p>
      </div>

      <div className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Resume</h2>
          <p className="text-muted mt-2">Download a current resume file or open it in the browser.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded hover:border-accent transition">View Resume</a>
          <a href="/resume.pdf" download className="px-4 py-2 border border-gray-700 rounded hover:border-accent transition">Download Resume</a>
        </div>
      </div>
    </div>
  )
}
