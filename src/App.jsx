import './App.css'

export default function TechPalsLandingPage() {

  const services = [
    {
      title: 'Custom Web Development',
      desc: 'Modern, scalable and lightning-fast websites tailored for your business.',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      desc: 'Beautiful and intuitive interfaces designed for better conversions.',
      icon: '🎨',
    },
    {
      title: 'AI Software Solutions',
      desc: 'AI-powered applications and automation systems for modern businesses.',
      icon: '🤖',
    },
    {
      title: 'Mobile App Development',
      desc: 'Premium Android and iOS applications with smooth user experience.',
      icon: '📱',
    },
    {
      title: 'SEO & Marketing',
      desc: 'Rank higher on Google and grow your business organically.',
      icon: '📈',
    },
    {
      title: 'Cloud & Deployment',
      desc: 'Secure cloud hosting, CI/CD pipelines and enterprise deployment.',
      icon: '☁️',
    },
  ]

  const projects = [
    {
      title: 'Luxury Real Estate Platform',
      category: 'Business Website',
      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'AI SaaS Dashboard',
      category: 'AI Product',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Premium E-Commerce',
      category: 'Online Store',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const stats = [
    { number: 'Sleek', label: 'Design' },
    { number: 'Smart', label: 'Solutions' },
    { number: 'Elite', label: 'Ideas' },
    { number: 'Swift', label: 'Builds' },
  ]

  return (
    <div className="bg-[#030712] text-white min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="/logo.jpg"
              alt="TechPals Logo"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-2xl font-black tracking-tight">
                TechPals
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
              TechPals helps startups and businesses launch premium websites,
              AI products, SaaS platforms and mobile apps that attract
              customers and grow revenue.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-blue-600/30">
                Start Your Project
              </button>

              <button className="border border-white/20 hover:border-blue-500 hover:bg-blue-500/10 transition px-8 py-4 rounded-2xl font-semibold">
                View Portfolio
              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

              {stats.map((item, index) => (

                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col items-center justify-center text-center min-h-[140px]"
                >

                  <h2 className="text-2xl font-black text-blue-400 whitespace-nowrap">
                    {item.number}
                  </h2>

                  <p className="text-gray-400 text-sm mt-3 tracking-wide">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"></div>

            <div className="relative bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 rounded-[40px] p-5 shadow-2xl shadow-blue-900/30">

              <div className="relative">
                <img
                  src="/hero-image.png"
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

                <button className="mt-8 text-blue-600 font-bold hover:translate-x-2 transition">
                  Learn More →
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 bg-[#020617]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div>

              <p className="text-blue-400 font-bold uppercase tracking-[4px]">
                Portfolio
              </p>

              <h2 className="text-5xl font-black mt-4">
                Featured Projects
              </h2>

            </div>

            <p className="text-gray-400 max-w-2xl leading-8 text-lg">
              We create modern digital experiences focused on design,
              performance and user engagement.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {projects.map((project, index) => (

              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-3 transition duration-300"
              >

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>

                <div className="p-8">

                  <p className="text-blue-400 font-semibold">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-black mt-3">
                    {project.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ABOUT */}
<section id="about" className="py-28 bg-white text-black">

  <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

    <div>
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
        alt="team"
        className="rounded-[40px] shadow-2xl"
      />
    </div>

    <div>

      <p className="text-blue-600 font-bold uppercase tracking-[4px]">
        About TechPals
      </p>

      <h2 className="text-5xl font-black mt-5 leading-tight">
        We Create Software That Helps Businesses Grow Faster
      </h2>

      <p className="text-gray-600 leading-8 text-lg mt-8">
        TechPals is a modern software company focused on building premium
        digital experiences, scalable applications and futuristic solutions
        for startups and businesses.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-gray-100 rounded-3xl p-6">
          <h3 className="text-4xl font-black text-blue-600">
            Modern
          </h3>

          <p className="text-gray-600 mt-2">
            Development
          </p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-6">
          <h3 className="text-4xl font-black text-blue-600">
            Creative
          </h3>

          <p className="text-gray-600 mt-2">
            Solutions
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

    <form className="mt-16 grid md:grid-cols-2 gap-6">

      <input
        type="text"
        placeholder="Your Name"
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
      />

      <input
        type="text"
        placeholder="Company Name"
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
      />
      <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500 text-gray-400">

        <option value="" disabled selected>
          Project Type
        </option>

        <option>Portfolio Website</option>
        <option>Business Website</option>
        <option>E-Commerce Store</option>
        <option>AI Software</option>
        <option>Mobile App</option>
        <option>Custom Software</option>

      </select>

      <textarea
        placeholder="Tell us about your project..."
        rows="6"
        className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
      ></textarea>

      <button
        className="md:col-span-2 bg-blue-600 hover:bg-blue-500 transition py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-600/30"
      >
        Submit Inquiry
      </button>

    </form>
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
      +91 8057798204
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