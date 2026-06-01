export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-muted mt-2">Feel free to reach out about software projects, internships, or collaboration.</p>
      </div>

      <div className="card">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold">Email</h2>
            <a href="mailto:emadelmontaser1@gmail.com" className="text-muted mt-2 inline-block hover:text-white">emadelmontaser1@gmail.com</a>
          </div>
          <div>
            <h2 className="text-sm font-semibold">GitHub</h2>
            <a href="https://github.com/emadelmontaser" target="_blank" rel="noreferrer" className="text-muted mt-2 inline-block hover:text-white">github.com/emadelmontaser</a>
          </div>
          <div>
            <h2 className="text-sm font-semibold">LinkedIn</h2>
            <a href="https://www.linkedin.com/in/emadelmontaser/" target="_blank" rel="noreferrer" className="text-muted mt-2 inline-block hover:text-white">linkedin.com/in/emadelmontaser</a>
          </div>
        </div>
      </div>
    </div>
  )
}
