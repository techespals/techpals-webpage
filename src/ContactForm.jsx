import axios from "axios"
import { useState } from "react"

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
        "http://localhost:8080/api/inquiry",
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
      className="md:col-span-2 bg-blue-600 hover:bg-blue-500 transition py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-600/30"
    >
      Submit Inquiry
    </button>

  </form>
)
}

export default ContactForm