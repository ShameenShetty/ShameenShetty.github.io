import './App.css'

function App() {
  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">
            Full-Stack & Flutter Developer
          </p>

          <h1>
            Shameen Shetty
          </h1>

          <p className="hero-description">
            Building production-grade systems in ERP, Fintech,
            Logistics, and Offline-First distributed architectures.
          </p>

          <div className="hero-buttons">
            <a
              href="https://github.com/ShameenShetty"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shameen-shetty-7648791a4/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="/resume.pdf">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>

        <p>
          I build scalable full-stack and mobile applications with
          a focus on offline-first systems, synchronization-heavy
          architectures, and production-ready engineering.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="card">
            <h3>Languages</h3>
            <p>C++, Dart, JavaScript, Python, Java</p>
          </div>

          <div className="card">
            <h3>Frontend</h3>
            <p>Flutter, React, HTML, CSS</p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>Node.js, REST APIs</p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>MySQL, SQLite</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>TCS – Ticket Collection System</h3>

            <p>
              Offline-first distributed ticketing system
              for bus operations.
            </p>

            <span>
              Flutter • Node.js • MySQL • SQLite
            </span>
          </div>

          <div className="project-card">
            <h3>Cherp App – Poultry ERP</h3>

            <p>
              ERP platform for inventory, trading,
              and financial management.
            </p>

            <span>
              Flutter • Node.js • MySQL
            </span>
          </div>

        </div>
      </section>

    </div>
  )
}

export default App