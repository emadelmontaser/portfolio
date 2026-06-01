import Link from 'next/link'
import projects from '../data/projects'

export default function Hero() {
  const showCode = true
  return (
    <div className="card flex flex-col md:flex-row gap-6 items-stretch">
      <div className="md:flex-1">
        <h1 className="text-3xl md:text-4xl font-bold">I build practical, polished software projects.</h1>
        <p className="text-muted mt-3">Computer Science student focused on full-stack apps, browser tools, and interactive visualizations.</p>

        <div className="flex gap-2 flex-wrap mt-4">
          <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">Full-Stack</span>
          <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">Chrome Extensions</span>
          <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">UI/UX</span>
          <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">Algorithms</span>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <Link href="#projects"><a className="px-4 py-2 border border-gray-700 rounded hover:border-accent">View Projects</a></Link>
          <a href="/resume.pdf" className="px-4 py-2 border border-gray-700 rounded hover:border-accent">Resume</a>
          <a href="#" className="text-muted">GitHub</a>
        </div>
      </div>

      <div className="md:w-96 flex-shrink-0 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-xl font-semibold">EE</div>
          <div className="text-sm text-muted">Emad Elmontaser<br/><span className="text-xs">Software Developer</span></div>
        </div>

        {showCode && (
          <div className="bg-black border border-gray-800 rounded p-3 text-xs font-mono">
            <div className="flex gap-2 mb-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <pre className="text-sm leading-5 text-gray-200">{`const developer = {
  name: "Emad Elmontaser",
  role: "Software Developer",
  stack: ["Next.js", "React", "TypeScript", "Supabase"],
}

function build() {
  return "useful software with clean execution";
}`}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
