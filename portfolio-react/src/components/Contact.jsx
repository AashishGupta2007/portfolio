import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
            Let's Connect
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed">
            I'm currently looking for internship opportunities and exciting
            projects. If you'd like to collaborate or just say hi, feel free
            to reach out!
          </p>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/AashishGupta2007"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aashish-gupta-a47a10365/"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="aashishgupta040907@gmail.com"
              className="hover:text-green-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">

          <form
            action="https://formspree.io/f/xreyzlpb"
            method="POST"
            className="flex flex-col gap-6"
          >

            <input type="hidden" name="_subject" value="Portfolio Message" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-green-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-green-400 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-green-400 transition"
            />

            <button
              type="submit"
              className="bg-green-400 text-black font-semibold py-3 rounded-lg hover:bg-green-300 transition transform hover:scale-[1.03]"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}