import axios from "axios"
import { useState } from "react"
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube
} from "react-icons/fa6";

function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    message: ""
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await axios.post(
        "https://techpals-backend-cvse.onrender.com/api/inquiry",
        formData
      )

      alert("Form Submitted Successfully!")

      setFormData({
        fullName: "",
        email: "",
        projectType: "",
        message: ""
      })

    } catch (error) {

      console.log(error)
      alert("Something went wrong")

    }
  }
return (

  <form
    onSubmit={handleSubmit}
    className="mt-16 grid md:grid-cols-2 gap-6"
  >

    <input
      type="text"
      name="fullName"
      placeholder="Your Name"
      value={formData.fullName}
      onChange={handleChange}
      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500 text-white"
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500 text-white"
    />

    <input
      type="text"
      name="projectType"
      placeholder="Project Type"
      value={formData.projectType}
      onChange={handleChange}
      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500 text-white"
    />

    <textarea
      name="message"
      placeholder="Tell us about your project..."
      rows="6"
      value={formData.message}
      onChange={handleChange}
      className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500 text-white"
    ></textarea>

   <button
  type="submit"
  className="
    md:col-span-2
    bg-white/5
    backdrop-blur-md
    border border-white/10
    text-white
    py-5
    rounded-2xl
    font-black
    text-lg
    transition-all duration-300
    hover:bg-white/10
    hover:border-white/20
    hover:-translate-y-1
    shadow-[0_0_25px_rgba(255,255,255,0.05)]
  "
>
  Submit Inquiry
</button>

{/* Social Links Section */}
<div className="md:col-span-2 mt-10">
  <div
    className="
      relative overflow-hidden
      bg-white/[0.04]
      backdrop-blur-xl
      border border-white/10
      rounded-[32px]
      p-8 md:p-10
      shadow-[0_0_40px_rgba(255,255,255,0.03)]
    "
  >
    {/* Glow Effects */}
    <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 blur-[100px]" />
    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 blur-[100px]" />

    <div className="relative z-10 text-center">
      <span
        className="
          inline-block
          px-4 py-2
          rounded-full
          bg-white/5
          border border-white/10
          text-sm
          text-gray-300
          mb-5
        "
      >
        🚀 Connect With TechesPals
      </span>

     <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
      Let's Build Something Amazing Together
    </h3>

    <p className="text-gray-400 max-w-2xl mx-auto leading-8 text-lg">
      Prefer social media? Connect with <span className="text-white font-semibold">TechesPals</span> on
      LinkedIn, Instagram, or X to explore our latest projects, startup journey,
      and technology insights. We would love to hear about your next big idea.
    </p>

      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/teches-pals-b1587340b"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-16 h-16
            rounded-2xl
            bg-white/5
            border border-white/10
            flex items-center justify-center
            text-white text-3xl
            transition-all duration-300
            hover:-translate-y-2
            hover:bg-[#0A66C2]/20
            hover:border-[#0A66C2]/50
            hover:shadow-[0_0_30px_rgba(10,102,194,0.35)]
          "
        >
          <FaLinkedin className="group-hover:scale-110 transition-transform" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/techespals._.official"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-16 h-16
            rounded-2xl
            bg-white/5
            border border-white/10
            flex items-center justify-center
            text-white text-3xl
            transition-all duration-300
            hover:-translate-y-2
            hover:border-pink-500/50
            hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]
          "
        >
          <FaInstagram className="group-hover:scale-110 transition-transform" />
        </a>

        {/* X / Twitter */}
        <a
          href="https://x.com/TechesPals"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-16 h-16
            rounded-2xl
            bg-white/5
            border border-white/10
            flex items-center justify-center
            text-white text-3xl
            transition-all duration-300
            hover:-translate-y-2
            hover:border-white/40
            hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
          "
        >
          <FaXTwitter className="group-hover:scale-110 transition-transform" />
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@TechesPals._.official"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-16 h-16
            rounded-2xl
            bg-white/5
            border border-white/10
            flex items-center justify-center
            text-white text-3xl
            transition-all duration-300
            hover:-translate-y-2
            hover:bg-red-500/20
            hover:border-red-500/50
            hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]
          "
        >
          <FaYoutube className="group-hover:scale-110 transition-transform" />
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        Prefer a direct conversation? Reach out through any platform and we'll
        get back to you as soon as possible.
      </p>
    </div>
  </div>
</div>

  </form>
)
}

export default ContactForm