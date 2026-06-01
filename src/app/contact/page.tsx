export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-muted mt-2">Feel free to reach out about software projects, internships, or collaboration.</p>
      </div>

      <div className="card">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold">Email</h2>
            <p className="text-muted mt-2">emad@example.com</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">GitHub</h2>
            <p className="text-muted mt-2">github.com/your-username</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">LinkedIn</h2>
            <p className="text-muted mt-2">linkedin.com/in/your-profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}
