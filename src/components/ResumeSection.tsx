export default function ResumeSection(){
  return (
    <section id="resume">
      <h2 className="text-xl font-semibold mb-4">Resume</h2>
      <div className="card flex items-center justify-between">
        <p className="text-muted">Curriculum vitae and recent experience summary.</p>
        <div className="flex gap-2">
          <a href="/resume.pdf" className="px-3 py-2 border border-gray-700 rounded hover:border-accent">View Resume</a>
          <a href="/resume.pdf" download className="px-3 py-2 border border-gray-700 rounded hover:border-accent">Download</a>
        </div>
      </div>
    </section>
  )
}
