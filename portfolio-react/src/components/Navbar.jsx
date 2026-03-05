function Navbar() {

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

      

        <div className="flex gap-6 text-gray-300">

          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className="hover:text-green-400 transition"
            >
              {link.name}
            </a>
          ))}

        </div>

      </div>

    </nav>
  )
}

export default Navbar