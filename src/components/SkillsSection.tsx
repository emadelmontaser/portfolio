import skills from '../data/skills'

export default function SkillsSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <h3 className="font-semibold">Frontend</h3>
          <div className="flex flex-wrap gap-2 mt-3">{skills.frontend.map(s => <span key={s} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{s}</span>)}</div>
        </div>
        <div className="card">
          <h3 className="font-semibold">Backend / Database</h3>
          <div className="flex flex-wrap gap-2 mt-3">{skills.backend.map(s => <span key={s} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{s}</span>)}</div>
        </div>
        <div className="card">
          <h3 className="font-semibold">Tools</h3>
          <div className="flex flex-wrap gap-2 mt-3">{skills.tools.map(s => <span key={s} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{s}</span>)}</div>
        </div>
        <div className="card">
          <h3 className="font-semibold">Computer Science</h3>
          <div className="flex flex-wrap gap-2 mt-3">{skills.cs.map(s => <span key={s} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{s}</span>)}</div>
        </div>
      </div>
    </section>
  )
}
