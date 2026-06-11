export default function ResumePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Resume</h1>
        <p className="text-muted mt-2">Open the resume in a new tab or download a copy below.</p>
      </div>

      <div className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-muted">View the resume instantly or save a copy for later.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded hover:border-accent transition">View</a>
          <a href="/resume.pdf" download className="px-4 py-2 border border-gray-700 rounded hover:border-accent transition">Download</a>
        </div>
      </div>

      <div className="overflow-hidden rounded border border-gray-900/10 bg-slate-950/50 shadow-sm">
        <iframe
          src="/resume.pdf"
          title="Resume preview"
          className="h-[80vh] min-h-[600px] w-full"
        />
      </div>
    </div>
  )
}
