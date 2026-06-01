import Link from 'next/link'

export default function Hero() {
  return (
    <div className="card flex flex-col lg:flex-row gap-6 items-stretch">
      <div className="lg:flex-1">
        <h1 className="text-3xl md:text-4xl font-bold">I build practical software projects.</h1>
        <p className="text-muted mt-3">Computer Science student focused on full-stack apps, browser tools, and interactive visualizations.</p>

        <div className="flex gap-2 flex-wrap mt-4">
          <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">Full-Stack</span>
          <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">Chrome Extensions</span>
          <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">UI/UX</span>
          <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded">Algorithms</span>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <Link href="/projects" className="px-4 py-2 border border-gray-700 rounded hover:border-accent transition">View Projects</Link>
          <Link href="/resume" className="px-4 py-2 border border-gray-700 rounded hover:border-accent transition">Resume</Link>
          <a href="#" className="px-4 py-2 border border-gray-700 rounded hover:border-accent transition">GitHub</a>
        </div>
      </div>

      <div className="lg:w-96 flex-shrink-0 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-xl font-semibold">EE</div>
          <div className="text-sm text-muted">
            Emad Elmontaser
            <span className="block text-xs mt-1">Software Developer</span>
          </div>
        </div>

        <div className="bg-black border border-gray-800 rounded p-4 text-xs font-mono">
          <div className="flex gap-2 mb-3">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <pre className="text-sm leading-6 text-gray-200 overflow-x-auto whitespace-pre-wrap break-words">
{`const emad = {
  role: "Software Developer",
  focus: ["Full-stack", "Tools", "UI"],
};

function build() {
  return "useful software";
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
