import Link from 'next/link'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <div className="card flex flex-col lg:flex-row gap-6 items-stretch">
      <div className="lg:flex-1">
        <Reveal className="reveal-delay-1">
          <h1 className="text-3xl md:text-4xl font-bold">I build practical software projects.</h1>
        </Reveal>
        <Reveal className="reveal-delay-2">
          <p className="text-muted mt-3">Computer Science student focused on building clean, practical software across web apps, tools, and technical projects.</p>
        </Reveal>

        <Reveal className="reveal-delay-3">
          <div className="flex gap-2 flex-wrap mt-4">
            <span className="floating-pill floating-pill-delay-1 interactive-pill">Web Apps</span>
            <span className="floating-pill floating-pill-delay-2 interactive-pill">AI/ML</span>
            <span className="floating-pill floating-pill-delay-3 interactive-pill">Full-Stack</span>
            <span className="floating-pill floating-pill-delay-4 interactive-pill">Algorithms</span>
          </div>
        </Reveal>

        <Reveal className="reveal-delay-4">
          <div className="flex flex-wrap items-center gap-3 mt-6">
          <Link href="/projects" className="inline-flex items-center justify-center px-5 py-2 bg-white text-black rounded-md font-medium transition hover:bg-gray-100">View Projects</Link>
          <Link href="/resume" className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md text-sm transition hover:border-accent">
            <span className="inline-flex items-center justify-center w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            </span>
            Resume
          </Link>
          <a href="https://github.com/emadelmontaser" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex items-center justify-center w-11 h-11 border border-gray-700 rounded-md transition hover:border-accent">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.205 11.385.6.111.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.476 5.922.43.372.815 1.102.815 2.222 0 1.605-.015 2.898-.015 3.292 0 .32.216.694.825.576C20.565 21.796 24 17.308 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
        </Reveal>
      </div>

      <Reveal className="lg:w-96 flex-shrink-0 space-y-4 reveal-delay-2">
        <div className="flex items-center gap-4">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-gray-700 bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105">
            <img src="/profile.jpg" alt="Emad Elmontaser" className="h-full w-full object-cover" />
          </div>
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
      </Reveal>
    </div>
  )
}
