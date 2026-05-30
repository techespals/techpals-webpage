import './App.css'
import ContactForm from './ContactForm'
import { useState } from 'react'

export default function TechesPalsLandingPage() {
  const services = [
    {
      title: 'Custom Web Development',
      desc: 'We build fast, modern and mobile-friendly websites for your business.',
      icon: '💻',
      details:
        'We create professional websites that look modern, load fast and work smoothly on mobile, tablet and desktop.',
    },
    {
      title: 'UI/UX Design',
      desc: 'We design clean and easy-to-use screens that customers love.',
      icon: '🎨',
      details:
        'We design simple, attractive and user-friendly interfaces focused on better user experience.',
    },
    {
      title: 'AI Software Solutions',
      desc: 'We create smart tools that save time and automate repeated work.',
      icon: '🤖',
      details:
        'We build AI tools, chatbots and automation systems that help businesses work smarter.',
    },
    {
      title: 'Mobile App Development',
      desc: 'We build smooth Android and iOS apps for your business idea.',
      icon: '📱',
      details:
        'We develop mobile apps that are simple, smooth and useful for customers and businesses.',
    },
    {
      title: 'Custom Software',
      desc: 'We build software according to your exact business needs.',
      icon: '⚙️',
      details:
        'We create dashboards, booking systems, management tools and workflow automation software.',
    },
    {
      title: 'E-Commerce Solutions',
      desc: 'We create online stores where customers can browse, order and pay easily.',
      icon: '🛒',
      details:
        'We build online stores with product pages, cart, checkout, payment setup and order management.',
    },
  ]

  const projects = [
    {
      title: 'Premium E-Commerce Store',
      category: 'E-Commerce Website',
      slug: 'ecommerce-store',
      description:
        'A modern shopping platform focused on smooth browsing, clean product pages and easy checkout.',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Restaurant Website',
      category: 'Restaurant Platform',
      slug: 'restaurant-website',
      description:
        'A stylish restaurant website with menu showcase, reservation flow and premium food presentation.',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Coaching Management System',
      category: 'Management Software',
      slug: 'coaching-management-system',
      description:
        'A smart system to manage students, batches, fees, attendance and coaching operations easily.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="site-root">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">

          <div className="brand">
            <img
              src="/logo icon.png"
              alt="TechesPals Logo"
              className="brand-icon"
            />

            <div className="brand">


        <div className="brand-text">
          <h1 className="brand-title">
            {"TECHESPALS".split("").map((letter, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <p className="brand-tagline">
            MAKE IT REAL
          </p>
        </div>
      </div>

          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-btn">
            Let’s Build
          </a>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero-section section-bg">
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>

        <div className="hero-container">

          <div className="hero-content">
            <div className="hero-badge">
              🚀 Building Modern Digital Experiences
            </div>

            <h2>
              We Build
              <span>Powerful Software</span>
              For Modern Businesses
            </h2>

            <p className="hero-desc">
              At TechesPals, every project is built with passion, honesty and full
              dedication. We treat your business like our own and focus on creating
              digital products that truly make a difference — so you always feel
              confident that your trust and investment are in the right place.
            </p>

            <p className="hero-line">
              Every big idea deserves a team that believes in it.
            </p>
          </div>

          <div className="hero-image-wrap">
            
              <img
                src="/log.png"
                alt="TechesPals"
                className="hero-logo"
              />
            
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section section-bg">
        <div className="leaf leaf-4"></div>
        <div className="container">

          <div className="section-heading">
            <p>What We Do</p>
            <h2>Premium Digital Services</h2>
            <span>
              We design and develop high-performance digital products focused on
              user experience, trust and business growth.
            </span>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <button onClick={() => setSelectedService(service)}>
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          {selectedService && (
            <div className="modal">
              <div className="modal-box">
                <button
                  className="modal-close"
                  onClick={() => setSelectedService(null)}
                >
                  ×
                </button>

                <div className="modal-icon">
                  {selectedService.icon}
                </div>

                <h2>{selectedService.title}</h2>
                <p>{selectedService.details}</p>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                >
                  Start Project
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="container">

          <div className="project-top">
            <div>
              <p>Portfolio</p>
              <h2>
                Built To
                <span>Impress</span>
              </h2>
            </div>

            <span>
              Every project reflects our vision of combining creativity,
              functionality and modern technology into a seamless digital experience.
            </span>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-info">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>

                  <a href={`/projects/${project.slug}`}>
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section section-bg">
        <div className="leaf leaf-5"></div>

        <div className="about-container">

          <div className="about-image-side">
            <img src="/abt.png" alt="TechesPals Team" />

            <div className="about-stats">
              <div>
                <h3>100%</h3>
                <p>Client Focus</p>
              </div>

              <div>
                <h3>24/7</h3>
                <p>Support</p>
              </div>

              <div>
                <h3>Real</h3>
                <p>Commitment</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p>About TechesPals</p>

            <h2>
              Turning Ideas Into
              <span>Digital Reality</span>
            </h2>

            <span>
              TechesPals is a modern software company focused on building premium
              digital experiences, scalable applications and futuristic solutions.
              We believe in transforming ideas into impactful products through
              clean design, smart development and innovative thinking.
            </span>

            <div className="about-cards">
              <div>
                <h3>Modern</h3>
                <p>Clean & scalable development</p>
              </div>

              <div>
                <h3>Creative</h3>
                <p>Futuristic digital experiences</p>
              </div>
            </div>
          </div>

        </div>
      </section>
          
          {/* BRAND ESSENCE SECTION */}
          <section id="brand-essence" className="brand-essence-section">
            <div className="brand-essence-container">

              <div className="brand-essence-heading">
                <p>Brand Essence</p>
                <h2>Our Visual Identity</h2>
                <span>
                  Pictures, posters and creative visuals that represent TechesPals.
                </span>
              </div>

              <div className="brand-essence-grid">
                <div className="brand-showcase-card">
                  <img src="/brand1.png" alt="" />
                  <img src="/brand2.jpg" alt="" />
                  <img src="/brand3.jpg" alt="" />
                  <img src="/brand4.jpg" alt="" />
                </div>

                <div className="brand-showcase-card">
                  <img src="/brand5.png" alt="" />
                  <img src="/brand6.jpg" alt="" />
                  <img src="/brand7.jpg" alt="" />
                  <img src="/brand8.jpg" alt="" />
                </div>

                <div className="brand-showcase-card">
                  <img src="/brand9.jpg" alt="" />
                  <img src="/brand10.jpg" alt="" />
                  <img src="/brand11.jpg" alt="" />
                  <img src="/brand12.jpg" alt="" />
                </div>

                <div className="brand-showcase-card">
                  <img src="/brand13.jpg" alt="" />
                  <img src="/brand14.jpg" alt="" />
                  <img src="/brand15.png" alt="" />
                  <img src="/brand16.png" alt="" />
                </div>
              </div>

            </div>
          </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-container">

          <div className="section-heading">
            <p>Let’s Build</p>
            <h2>Start Your Project</h2>
            <span>
              Tell us about your idea and we’ll help turn it into reality.
            </span>
          </div>

          <div className="form-wrap">
            <ContactForm />
          </div>

          <div className="contact-cards">
            <div>
              <h3>Email</h3>
              <a href="mailto:tech.pals@gmail.com">
                tech.pals@gmail.com
              </a>
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+91 3847787363</p>
            </div>

            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

          <footer>
            © 2026 TechesPals. All rights reserved.
          </footer>

        </div>
      </section>

    </div>
  )
  
}