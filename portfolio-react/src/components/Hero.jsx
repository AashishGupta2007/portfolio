import { useState } from "react"

/* ---------------- TIC TAC TOE ---------------- */

function TicTacToe() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)

  function handleClick(i) {

    if (board[i]) return

    const newBoard = [...board]
    newBoard[i] = isX ? "X" : "O"

    setBoard(newBoard)
    setIsX(!isX)
  }

  function reset() {
    setBoard(Array(9).fill(null))
    setIsX(true)
  }

  return (
    <div className="absolute right-16 bottom-16 opacity-70 hover:opacity-100 transition duration-500 z-10">

      <div className="grid grid-cols-3 gap-2 w-40 p-3 bg-gray-900/70 backdrop-blur rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)]">

        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-12 h-12 border border-green-400 rounded flex items-center justify-center text-xl text-green-400 hover:bg-green-400 hover:text-black transition"
          >
            {cell}
          </button>
        ))}

      </div>

      <div className="text-center mt-2 text-xs text-gray-400">
        Tic Tac Toe
      </div>

      <button
        onClick={reset}
        className="text-xs text-green-400 hover:text-white"
      >
        Reset
      </button>

    </div>
  )
}


/* ---------------- MEMORY GAME ---------------- */

function MemoryGame() {

  const fruits = ["🍎","🍎","🍌","🍌","🍇","🍇","🍉","🍉"]

  function shuffle() {
    return [...fruits]
      .map((fruit, i) => ({
        id: i,
        fruit,
        flipped: false,
        matched: false
      }))
      .sort(() => Math.random() - 0.5)
  }

  const [cards, setCards] = useState(shuffle())
  const [selected, setSelected] = useState([])
  const [fails, setFails] = useState(0)

  function handleClick(i) {

    if (cards[i].flipped || cards[i].matched) return
    if (selected.length === 2) return
    if (fails >= 3) return

    const newCards = [...cards]
    newCards[i].flipped = true

    const newSelected = [...selected, i]

    setCards(newCards)
    setSelected(newSelected)

    if (newSelected.length === 2) {

      const [a,b] = newSelected

      if (newCards[a].fruit === newCards[b].fruit) {

        newCards[a].matched = true
        newCards[b].matched = true
        setSelected([])

      } else {

        setFails(f => f + 1)

        setTimeout(() => {

          newCards[a].flipped = false
          newCards[b].flipped = false

          setCards([...newCards])
          setSelected([])

        }, 800)

      }

      setCards([...newCards])
    }
  }

  function reset() {
    setCards(shuffle())
    setSelected([])
    setFails(0)
  }

  return (
    <div className="absolute left-16 bottom-16 opacity-80 hover:opacity-100 transition duration-500 z-10">

      <div className="grid grid-cols-4 gap-3 w-64 p-5 bg-gradient-to-br from-gray-900/80 to-black/70 backdrop-blur-xl rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.4)]">

        {cards.map((card, i) => (
          <div
            key={card.id}
            onClick={() => handleClick(i)}
            className="w-12 h-12 cursor-pointer perspective"
          >

            <div className={`card ${card.flipped || card.matched ? "flip" : ""}`}>

              <div className="front">
                {card.fruit}
              </div>

              <div className="back">
                ?
              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="text-center mt-2 text-xs text-gray-400">
        Memory Game — Fails: {fails}/3
      </div>

      <button
        onClick={reset}
        className="mt-1 text-xs text-green-400 hover:text-white transition"
      >
        Reset
      </button>

    </div>
  )
}


/* ---------------- FLOATING SYMBOLS ---------------- */

function FloatingSymbols() {

  const symbols = ["λ","π","Σ","∑","∞","√","<>","{}","()","∫","#"]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {Array.from({ length: 25 }).map((_, i) => {

        const symbol = symbols[Math.floor(Math.random() * symbols.length)]
        const size = Math.random() * 30 + 16
        const left = Math.random() * 100
        const duration = Math.random() * 20 + 10
        const delay = Math.random() * 20

        const colors = [
          "text-green-400",
          "text-blue-400",
          "text-purple-400",
          "text-yellow-400",
          "text-pink-400"
        ]

        const color = colors[Math.floor(Math.random() * colors.length)]

        return (
          <span
            key={i}
            className={`absolute ${color} opacity-20 animate-float`}
            style={{
              fontSize: size,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          >
            {symbol}
          </span>
        )
      })}

      <style>{`

        @keyframes floatSymbols {
          0% {
            transform: translateY(100vh);
            opacity:0;
          }
          20% {
            opacity:0.25;
          }
          80% {
            opacity:0.25;
          }
          100% {
            transform: translateY(-20vh);
            opacity:0;
          }
        }

        .animate-float {
          animation: floatSymbols linear infinite;
        }

        .perspective {
          perspective:600px;
        }

        .card {
          width:100%;
          height:100%;
          position:relative;
          transform-style:preserve-3d;
          transition: transform 0.5s;
        }

        .card.flip {
          transform: rotateY(180deg);
        }

        .front, .back {
          position:absolute;
          width:100%;
          height:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:22px;
          border-radius:10px;
          backface-visibility:hidden;
        }

        .front {
          background: linear-gradient(145deg,#22c55e,#16a34a);
          color:black;
          transform: rotateY(180deg);
        }

        .back {
          background: rgba(255,255,255,0.05);
          border:1px solid rgba(34,197,94,0.4);
          color:#22c55e;
        }

      `}</style>

    </div>
  )
}


/* ---------------- HERO SECTION ---------------- */

export default function Hero() {

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center bg-black text-center px-6 overflow-hidden"
    >

      <FloatingSymbols />

      <h1 className="text-6xl font-bold text-white mb-6 z-10">
        Hi, I'm <span className="text-green-400">Aashish</span>
      </h1>

      <p className="text-gray-400 max-w-2xl text-lg mb-8 z-10">
        Computer science student building practical software, exploring machine learning, and solving real problems with code.
      </p>

      <div className="flex gap-6 z-10">
        <a
          href="#projects"
          className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/AashishGupta2007"
          target="_blank"
          className="border border-green-400 text-green-400 px-6 py-3 rounded-lg hover:bg-green-400 hover:text-black transition"
        >
          GitHub
        </a>
      </div>

      <TicTacToe />
      <MemoryGame />

    </section>
  )
}