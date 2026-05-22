import ProjectCard from '../components/ProjectCard'

function Home() {

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
                        Building production-grade systems
                        in ERP, Fintech, Logistics, and
                        Offline-First distributed
                        architectures.
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

                <h2>
                    About Me
                </h2>

                <p>
                    I build scalable full-stack and mobile applications
                    with a focus on offline-first systems,
                    synchronization-heavy architectures, and
                    production-ready engineering.

                    <br /><br />

                    I enjoy understanding how real-world operational
                    problems translate into software systems and
                    choosing technologies based on the requirements
                    of the project rather than relying on a single
                    stack for every use case.

                    <br /><br />

                    My interests include distributed systems,
                    scalable backend architectures, databases,
                    synchronization workflows, and exploring tools
                    specialized for different domains such as
                    PostgreSQL, TimescaleDB for time-series data,
                    React-based web platforms for SEO-focused
                    applications, and Flutter with SQLite for
                    responsive offline-first mobile systems that
                    continue functioning reliably even with poor
                    or unstable internet connectivity.
                </p>

            </section>

            {/* SKILLS */}

            <section className="section">

                <h2>
                    Skills
                </h2>

                <div className="skills-grid">

                    <div className="card">
                        <h3>Languages</h3>

                        <p>
                            C++, Dart,
                            JavaScript/TypeScript,
                            Python
                        </p>
                    </div>

                    <div className="card">
                        <h3>Frontend</h3>

                        <p>
                            Flutter, React,
                            HTML, CSS
                        </p>
                    </div>

                    <div className="card">
                        <h3>Backend</h3>

                        <p>
                            Node.js, REST APIs
                        </p>
                    </div>

                    <div className="card">
                        <h3>Database</h3>

                        <p>
                            MySQL, SQLite
                        </p>
                    </div>

                </div>

            </section>

            {/* PROJECTS */}

            <section className="section">

                <h2>
                    Projects
                </h2>

                <div className="projects-grid">

                    <ProjectCard
                        title="TCS - Ticket Collection System"

                        summary="
                        Offline-first distributed
                        ticketing ecosystem involving
                        mobile devices, cloud
                        synchronization, and depot
                        management software.
                        "

                        components={[
                            "Mobile Ticketing Application",
                            "Cloud Synchronization Server",
                            "Depot Manager Desktop Software"
                        ]}

                        technologies={[
                            "Flutter",
                            "Node.js",
                            "MySQL",
                            "SQLite"
                        ]}

                        tags={[
                            "Offline-First",
                            "Distributed System",
                            "Real-Time Sync"
                        ]}

                        link="/projects/tcs"
                    />

                    <ProjectCard
                        title="ChERP - Poultry ERP"

                        summary="
                        ERP ecosystem for poultry
                        inventory, trade management,
                        and sales synchronization.
                        "

                        components={[
                            "ERP Web Application",
                            "Sales Mobile App",
                            "Cloud Backend Server"
                        ]}

                        technologies={[
                            "Flutter",
                            "Node.js",
                            "MySQL"
                        ]}

                        tags={[
                            "ERP",
                            "Business Management",
                            "Offline Support"
                        ]}

                        link="/projects/cherp"
                    />

                </div>

            </section>

        </div>
    )
}

export default Home