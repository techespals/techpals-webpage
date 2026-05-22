import './App.css'
import ContactForm from "./ContactForm"
import { useState } from 'react'



export default function TechesPalsLandingPage() {

const services = [
  {
    title: 'Custom Web Development',
    desc: 'We build fast, modern and mobile-friendly websites for your business.',
    icon: '💻',
    details:
      'We create professional websites that look modern, load fast and work smoothly on mobile, tablet and desktop. This is perfect for businesses, portfolios, startups and service-based brands.',
  },
  {
    title: 'UI/UX Design',
    desc: 'We design clean and easy-to-use screens that customers love.',
    icon: '🎨',
    details:
      'We design simple, attractive and user-friendly interfaces. Our focus is to make your website or app easy to understand, easy to use and visually impressive.',
  },
  {
    title: 'AI Software Solutions',
    desc: 'We create smart tools that save time and automate repeated work.',
    icon: '🤖',
    details:
      'We build AI-powered tools like chatbots, automation systems and smart dashboards that help businesses save time, reduce manual work and improve customer experience.',
  },
  {
    title: 'Mobile App Development',
    desc: 'We build smooth Android and iOS apps for your business idea.',
    icon: '📱',
    details:
      'We develop mobile apps that are simple, smooth and useful. Whether you need an app for customers, staff or business management, we can build it according to your needs.',
  },
  {
    title: 'Custom Software',
    desc: 'We build software according to your exact business needs.',
    icon: '⚙️',
    details:
      'We create custom software for businesses that need something specific, such as management systems, dashboards, booking systems, internal tools or workflow automation.',
  },
  {
    title: 'E-Commerce Solutions',
    desc: 'We create online stores where customers can browse, order and pay easily.',
    icon: '🛒',
    details:
      'We build online stores with product pages, cart, checkout, payment setup and order management. This helps businesses sell products online in a professional way.',
  },
]
const projects = [
  {
    title: 'Premium E-Commerce Store',
    category: 'E-Commerce Website',
    slug: 'ecommerce-store',
    description:
      'Designed to deliver a seamless shopping experience with modern UI, smooth navigation and conversion-focused layouts.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Restaurant Website',
    category: 'Restaurant Platform',
    slug: 'restaurant-website',
    description:
      'A visually rich restaurant experience featuring elegant layouts, online reservations and immersive food presentation.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Coaching Management System',
    category: 'Management Software',
    slug: 'coaching-management-system',
    description:
      'Built to simplify coaching operations with smart student management, streamlined workflows and intuitive dashboards.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  },
]
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="bg-[#030712] text-white min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="/log.png"
              alt="TechesPals Logo"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-2xl font-black tracking-tight">
                TechesPals
              </h1>

              <p
                  className="text-sm tracking-[6px] uppercase text-blue-400"
                  style={{ fontFamily: 'Orbitron' }}
                >
                  Make It Real
              </p>
            </div>

          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">

            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>

          </nav>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-2xl font-semibold shadow-xl shadow-blue-600/30"
          >
            Let's Build
          </a>

        </div>

      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative pt-36 pb-24 lg:pb-32 overflow-hidden"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm mb-8">
              🚀 Building Modern Digital Experiences
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              We Build
              <span className="block text-blue-500">
                Powerful Software
              </span>
              For Modern Businesses
            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">
              At TechesPals, every project is built with passion, honesty and full
              dedication. We treat your business like our own and focus on creating
              digital products that truly make a difference — so you always feel
              confident that your trust and investment are in the right place.
            </p>

            <p className="text-gray-500 mt-10 text-sm tracking-wide">
              Built with honesty, creativity and long-term vision.
            </p>

           
          </div>

          {/* RIGHT IMAGE */}
      
            <div className="relative">

              <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"></div>

              <div className="relative bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 rounded-[40px] p-5 shadow-2xl shadow-blue-900/30">

                <div className="relative">

                  <img
                    src="/log.png"
                    alt="TechPals"
                    className="w-full rounded-[30px]"
                  />

                </div>

              </div>
              </div>

</div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-white text-black">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-600 font-bold uppercase tracking-[4px]">
              What We Do
            </p>

            <h2 className="text-5xl font-black mt-4">
              Premium Digital Services
            </h2>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              We design and develop high-performance digital products focused on
              user experience, scalability and business growth.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {services.map((service, index) => (

              <div
                key={index}
                className="group bg-gray-50 border border-gray-200 hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-8 shadow-sm hover:shadow-2xl"
              >

                <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {service.desc}
                </p>
                <button
                onClick={() => setSelectedService(service)}
                className="mt-8 text-blue-600 font-bold hover:translate-x-2 transition"
              >
                Learn More →
              </button>
                            

              </div>

            ))}

          </div>
          {selectedService && (
  <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6">
    
    <div className="bg-white text-black max-w-2xl w-full rounded-[32px] p-8 relative shadow-2xl">
      
      <button
        onClick={() => setSelectedService(null)}
        className="absolute top-5 right-6 text-2xl font-bold text-gray-500 hover:text-black"
      >
        ×
      </button>

      <div className="text-5xl">
        {selectedService.icon}
      </div>

      <h2 className="text-4xl font-black mt-6">
        {selectedService.title}
      </h2>

      <p className="text-gray-600 leading-8 text-lg mt-6">
        {selectedService.details}
      </p>

      <a
        href="#contact"
        onClick={() => setSelectedService(null)}
        className="mt-8 inline-block bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition"
      >
        Start Project
      </a>

    </div>

  </div>
)}

        </div>

      </section>

      {/*Detail*/}
    
              {/* PROJECTS */}
<section
  id="projects"
  className="relative overflow-hidden py-32 bg-[#020617]"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

    {/* TOP CONTENT */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

      <div>

        <p className="text-blue-400 font-bold uppercase tracking-[6px]">
          Portfolio
        </p>

        <h2 className="text-5xl lg:text-6xl font-black mt-4 leading-tight">
          Built To
          <span className="block text-blue-500">
            Impress
          </span>
        </h2>

      </div>

      <p className="text-gray-400 max-w-2xl leading-9 text-lg">
        Every project reflects our vision of combining creativity,
        functionality and modern technology into a seamless digital experience.
      </p>

    </div>

    {/* PROJECT CARDS */}
    <div className="grid lg:grid-cols-3 gap-8 mt-24">

      {projects.map((project, index) => (

        <div
          key={index}
          className="group bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-500"
        >

          {/* IMAGE */}
          <div className="overflow-hidden relative">

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition duration-700"
            />

          </div>

          {/* CONTENT */}
          <div className="p-8">

            <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
              {project.category}
            </p>

            <h3 className="text-3xl font-black mt-4 leading-snug">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-7 mt-5">
              {project.description}
            </p>

            <a
              href={`/projects/${project.slug}`}
              className="mt-8 inline-flex items-center gap-3 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-2xl transition duration-300 group/button"
            >

              <span>
                View Project
              </span>

              <span className="group-hover/button:translate-x-1 transition">
                →
              </span>

            </a>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
      
      {/* ABOUT */}
{/* ABOUT */}
<section
  id="about"
  className="py-32 bg-white text-black relative overflow-hidden"
>

  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 blur-3xl rounded-full opacity-40"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-24 items-center relative z-10">

    {/* LEFT IMAGE */}
   <div className="relative">

  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

  <img
    src="/abt.png"
    alt="TechesPals Team"
    className="relative rounded-[40px] shadow-2xl object-cover w-full border border-white/10"
  />

  <div className="grid grid-cols-3 gap-4 mt-6">

  <div className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 text-center shadow-sm">
    <h3 className="text-blue-600 text-2xl font-black">100%</h3>
    <p className="text-gray-600 text-sm mt-1">Client Focus</p>
  </div>

  <div className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 text-center shadow-sm">
    <h3 className="text-blue-600 text-2xl font-black">24/7</h3>
    <p className="text-gray-600 text-sm mt-1">Support</p>
  </div>

  <div className="bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 text-center shadow-sm">
    <h3 className="text-blue-600 text-2xl font-black">Real</h3>
    <p className="text-gray-600 text-sm mt-1">Commitment</p>
  </div>



  </div>

</div>


    {/* RIGHT CONTENT */}
    <div>

      <p className="text-blue-600 font-bold uppercase tracking-[6px]">
        About TechPals
      </p>

      <h2 className="text-5xl lg:text-6xl font-black leading-tight mt-6">
        Turning Ideas Into
        <span className="block text-blue-600">
          Digital Reality
        </span>
      </h2>

      <p className="text-gray-600 text-lg leading-9 mt-8">
        TechPals is a modern software company focused on building premium
        digital experiences, scalable applications and futuristic solutions.
        We believe in transforming ideas into impactful products through
        clean design, smart development and innovative thinking.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-12">

        <div className="bg-gray-100 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

          <h3 className="text-4xl font-black text-blue-600">
            Modern
          </h3>

          <p className="text-gray-600 mt-3">
            Clean & scalable development
          </p>

        </div>

        <div className="bg-gray-100 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

          <h3 className="text-4xl font-black text-blue-600">
            Creative
          </h3>

          <p className="text-gray-600 mt-3">
            Futuristic digital experiences
          </p>

        </div>

      </div>
    </div>

  </div>

</section>

      {/* FOOTER */}
     <section
  id="contact"
  className="py-28 bg-black border-t border-white/10"
>

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center">

      <p className="text-blue-400 font-bold uppercase tracking-[4px]">
        Let's Build
      </p>

      <h2 className="text-5xl font-black mt-4">
        Start Your Project
      </h2>

      <p className="text-gray-400 mt-6 text-lg leading-8">
        Tell us about your idea and we’ll help turn it into reality.
      </p>

    </div>

      <div className="mt-16">
        <ContactForm />
      </div>
    <div className="grid md:grid-cols-3 gap-6 mt-16">

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

    <h3 className="text-2xl font-black mb-4">
      Email
    </h3>

    <a
      href="mailto:tech.pals@gmail.com"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      tech.pals@gmail.com
    </a>

  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

    <h3 className="text-2xl font-black mb-4">
      Call Us
    </h3>

    <p className="text-gray-400">
      +91 3847787363
    </p>

  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

    <h3 className="text-2xl font-black mb-4">
      Location
    </h3>

    <p className="text-gray-400">
      India
    </p>

  </div>

</div>

    <div className="border-t border-white/10 mt-20 pt-8 text-center text-gray-500">
      © 2026 TechPals. All rights reserved.
    </div>

  </div>

</section>

    </div>
  )
}