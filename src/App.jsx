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
    { number: '120+', label: 'Projects Delivered' },
    { number: '80+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Client Satisfaction' },
  ]

  const testimonials = [
    {
      name: 'Rohit Sharma',
      role: 'CEO, BuildX',
      text: 'TechPals transformed our online presence with an outstanding modern website.',
    },
    {
      name: 'Priya Mehta',
      role: 'Founder, StyleMart',
      text: 'Professional team with amazing UI/UX skills and fast delivery.',
    },
    {
      name: 'Vikram Singh',
      role: 'Director, FutureTech',
      text: 'Their software solutions helped automate our business operations.',
    },
  ]

  return (
    <div className="bg-[#030712] text-white min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/40">
              TP
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">TechPals</h1>
              <p className="text-xs text-gray-400">Software Agency</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>

          <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-2xl font-semibold shadow-xl shadow-blue-600/30">
            Get Started
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative pt-36 pb-24 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm mb-8">
              🚀 Building Modern Digital Experiences
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              We Build
              <span className="block text-blue-500">Powerful Software</span>
              For Modern Businesses
            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">
              TechPals helps startups and businesses launch premium websites,
              AI products, SaaS platforms and mobile apps that attract customers
              and grow revenue.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-blue-600/30">
                Start Your Project
              </button>

              <button className="border border-white/20 hover:border-blue-500 hover:bg-blue-500/10 transition px-8 py-4 rounded-2xl font-semibold">
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl"
                >
                  <h2 className="text-3xl font-black text-blue-400">
                    {item.number}
                  </h2>
                  <p className="text-gray-400 text-sm mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"></div>

            <div className="relative bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 rounded-[40px] p-5 shadow-2xl shadow-blue-900/30">
              <div className="bg-black rounded-[30px] overflow-hidden border border-white/10">
                <img
                    src="/hero-image.jpeg"
                    alt="TechPals"
                    className="w-full h-[500px] object-cover opacity-90"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-64">
                <h3 className="text-2xl font-black">AI Automation</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Smart software systems to automate repetitive tasks.
                </p>
              </div>

              <div className="absolute -top-8 right-0 bg-blue-600 rounded-3xl p-5 shadow-2xl shadow-blue-600/30">
                <span className="text-sm text-blue-100">
                  Launch your product quickly
                </span>
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

                <h3 className="text-2xl font-black mt-8">{service.title}</h3>
                <p className="text-gray-600 leading-7 mt-4">{service.desc}</p>

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
                Our Featured Projects
              </h2>
            </div>

            <p className="text-gray-400 max-w-2xl leading-8 text-lg">
              Every project we build is focused on performance, conversion and
              creating a memorable experience for customers.
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

                  <button className="mt-8 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-2xl transition">
                    View Case Study
                  </button>
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
              We are a creative software development company passionate about
              building modern digital products. From startup MVPs to enterprise
              platforms, our mission is to create impactful experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-100 rounded-3xl p-6">
                <h3 className="text-4xl font-black text-blue-600">5+</h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-6">
                <h3 className="text-4xl font-black text-blue-600">50+</h3>
                <p className="text-gray-600 mt-2">Global Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-28 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-blue-400 font-bold uppercase tracking-[4px]">
              Testimonials
            </p>
            <h2 className="text-5xl font-black mt-4">
              Trusted By Businesses Worldwide
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl"
              >
                <div className="text-5xl">⭐</div>

                <p className="text-gray-300 leading-8 text-lg mt-6">
                  “{testimonial.text}”
                </p>

                <div className="mt-10">
                  <h3 className="text-2xl font-black">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 mt-2">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_50%)]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Ready To Build Your Next Big Project?
          </h2>

          <p className="text-blue-100 text-xl mt-8 leading-8">
            Let’s turn your ideas into a premium digital experience.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <button className="bg-white text-blue-600 hover:scale-105 transition px-8 py-4 rounded-2xl font-black shadow-2xl">
              Book Free Consultation
            </button>

            <button className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-bold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-black py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black">
                TP
              </div>
              <h2 className="text-3xl font-black">TechPals</h2>
            </div>

            <p className="text-gray-400 leading-8 mt-8">
              We build premium software solutions for startups, creators and
              businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-8">Quick Links</h3>

            <div className="flex flex-col gap-5 text-gray-400">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">About</a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-8">Services</h3>

            <div className="flex flex-col gap-5 text-gray-400">
              <a href="#">Web Development</a>
              <a href="#">Mobile Apps</a>
              <a href="#">AI Solutions</a>
              <a href="#">SEO & Branding</a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-8">Contact</h3>

            <div className="flex flex-col gap-5 text-gray-400">
              <p>📧 tech.pals@gmail.com</p>
              <p>📱 +918853079728</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © 2026 TechPals. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
