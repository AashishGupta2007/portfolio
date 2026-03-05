import { useEffect, useState } from "react"

const symbols = ["{ }", "</>", "λ", "π", "Σ", "√", "∞", "Δ", "∫", "C++", "AI"]

function FloatingSymbol({ symbol }) {

  const style = {
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    fontSize: 20 + Math.random() * 30 + "px",
    animationDuration: 15 + Math.random() * 20 + "s",
    animationDelay: Math.random() * 10 + "s"
  }

  return (
    <span
      className="floating-symbol absolute text-green-400/25 blur-[0.5px] select-none pointer-events-none"
      style={style}
    >
      {symbol}
    </span>
  )
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="group bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-green-400 transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/10">

      <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition">
        {title}
      </h3>

      <p className="text-gray-400 mb-5 leading-relaxed">
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 font-medium hover:underline"
      >
        View on GitHub →
      </a>

    </div>
  )
}

export default function Projects() {

  const [floatingSymbols, setFloatingSymbols] = useState([])

  useEffect(() => {
    const arr = []
    for (let i = 0; i < 40; i++) {
      arr.push(symbols[Math.floor(Math.random() * symbols.length)])
    }
    setFloatingSymbols(arr)
  }, [])

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white px-6 py-24 overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-40"></div>

      {/* floating symbols */}
      {floatingSymbols.map((s, i) => (
        <FloatingSymbol key={i} symbol={s} />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <ProjectCard
            title="Smart File Organizer CLI"
            description="A powerful Python command line tool that automatically organizes files into categorized folders with preview, logging, and undo support."
            link="https://github.com/AashishGupta2007/smart-file-organizer"
          />

          <ProjectCard
            title="Small Python Projects"
            description="A collection of small experimental projects built while exploring interesting Python libraries and tools."
            link="https://github.com/AashishGupta2007/small-projects"
          />

          <ProjectCard
            title="Developer Portfolio"
            description="Personal developer portfolio built using React, Vite, and Tailwind showcasing projects, skills, and experience."
            link="https://github.com/AashishGupta2007"
          />

        </div>

      </div>

      <style>{`

      @keyframes floatSymbol {
        0% {
          transform: translateY(0px);
          opacity: 0.25;
        }
        50% {
          transform: translateY(-40px);
          opacity: 0.45;
        }
        100% {
          transform: translateY(0px);
          opacity: 0.25;
        }
      }

      .floating-symbol{
        animation: floatSymbol linear infinite;
      }

      `}</style>

    </section>
  )
}