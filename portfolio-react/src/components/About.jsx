import { useState, useEffect } from "react"

function Gear({ size, x, y, color, speed, reverse, mouse }) {

  const [currentSpeed, setCurrentSpeed] = useState(speed)
  const [glow, setGlow] = useState(0.3)

  useEffect(() => {
    const gearX = window.innerWidth * (parseFloat(x) / 100)
    const gearY = window.innerHeight * (parseFloat(y) / 100)

    const distance = Math.sqrt(
      (mouse.x - gearX) ** 2 + (mouse.y - gearY) ** 2
    )

    const maxDistance = 300

    const influence = Math.max(0, 1 - distance / maxDistance)

    const newSpeed = speed * (1 - influence * 0.7)

    const newGlow = 0.3 + influence * 0.6

    setCurrentSpeed(newSpeed)
    setGlow(newGlow)

  }, [mouse, x, y, speed])

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="absolute transition-all duration-300"
      style={{
        left: x,
        top: y,
        animation: `${reverse ? "spinReverse" : "spin"} ${currentSpeed}s linear infinite`,
        filter: `drop-shadow(0 0 ${15 * glow}px ${color})`,
        opacity: glow
      }}
    >
      <g fill={color}>
        <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="12" fill="none"/>

        <rect x="45" y="0" width="10" height="20" />
        <rect x="45" y="80" width="10" height="20" />
        <rect x="0" y="45" width="20" height="10" />
        <rect x="80" y="45" width="20" height="10" />

        <rect x="15" y="15" width="12" height="12" transform="rotate(45 21 21)" />
        <rect x="73" y="15" width="12" height="12" transform="rotate(45 79 21)" />
        <rect x="15" y="73" width="12" height="12" transform="rotate(45 21 79)" />
        <rect x="73" y="73" width="12" height="12" transform="rotate(45 79 79)" />

        <circle cx="50" cy="50" r="10" fill="black" />
      </g>
    </svg>
  )
}

function BigGear() {
  return (
    <svg
      width="520"
      height="520"
      viewBox="0 0 100 100"
      className="absolute opacity-[0.05]"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        animation: "spin 80s linear infinite"
      }}
    >
      <g fill="#22c55e">
        <circle cx="50" cy="50" r="32" stroke="#22c55e" strokeWidth="10" fill="none"/>
      </g>
    </svg>
  )
}

function About() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 overflow-hidden"
    >

      <BigGear />

      {/* interactive gears */}
      <Gear size={200} x="8%" y="18%" color="#22c55e" speed={20} mouse={mouse}/>
      <Gear size={140} x="72%" y="14%" color="#38bdf8" speed={15} reverse mouse={mouse}/>
      <Gear size={180} x="60%" y="72%" color="#a855f7" speed={25} mouse={mouse}/>
      <Gear size={120} x="20%" y="76%" color="#facc15" speed={18} reverse mouse={mouse}/>
      <Gear size={90} x="45%" y="8%" color="#ef4444" speed={12} mouse={mouse}/>

      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-3xl text-center relative z-10">

        <h2 className="text-4xl font-bold text-green-400 mb-12">
          About Me
        </h2>

        <p className="text-lg text-gray-300 mb-6">
          I'm a computer science student passionate about building practical software and learning how systems work under the hood.
I enjoy turning ideas into real projects, from command-line tools to web applications and machine learning experiments.
I'm currently expanding my skills in data structures, system design, and computer vision while preparing for internships.
My goal is to become a strong software engineer who can build efficient, scalable, and impactful technology.
        </p>

        <p className="text-lg text-gray-300 mb-12">
          Top skills :
        </p>

        <div className="text-left max-w-md mx-auto mb-14">

          <div className="flex gap-4 mb-6">
            <div className="text-green-400">●</div>
            <div>
              <p className="font-semibold">DSA (Problem Solving)</p>
              <p className="text-gray-400 text-sm">Been working on solving good dsa problems.</p>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="text-green-400">●</div>
            <div>
              <p className="font-semibold">Machine Learning</p>
              <p className="text-gray-400 text-sm">Learning Skikit-Learn while making good ml projects.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-green-400">●</div>
            <div>
              <p className="font-semibold">Python</p>
              <p className="text-gray-400 text-sm">I have understood many good python libraries like opencv, etc.</p>
            </div>
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-4">

          {[].map((item)=>(
            <div
              key={item}
              className="px-4 py-2 border border-green-400/50 rounded-full text-sm
              text-green-300 hover:bg-green-400 hover:text-black
              transition duration-300 cursor-default"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        `}
      </style>

    </section>
  )
}

export default About