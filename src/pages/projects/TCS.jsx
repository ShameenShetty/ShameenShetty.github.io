function TCS() {

    return (
        <div className="project-page">

            <section className="project-hero">

                <p className="project-date">
                    Oct 2025 – Present
                </p>

                <h1>
                    TCS – Ticket Collection System
                </h1>

                <p className="project-intro">
                    Large-scale offline-first ticketing
                    ecosystem designed to modernize and
                    replace traditional ETM hardware
                    used by bus operators.
                </p>

            </section>

            <section className="section">

                <h2>Overview</h2>

                <p>
                    The project consisted of multiple
                    interconnected systems including
                    a mobile ticketing application,
                    centralized cloud infrastructure,
                    and desktop-based depot management
                    software.
                </p>

            </section>

            <section className="section">

                <h2>Mobile Ticketing System</h2>

                <p>
                    The mobile application used an
                    offline-first architecture powered
                    by SQLite local storage, allowing
                    conductors to continue operations
                    even without internet connectivity.
                </p>

                <p>
                    Features included ticket generation,
                    GPS tracking, transaction storage,
                    synchronization workflows, and
                    Bluetooth printer integration.
                </p>

            </section>

            <section className="section">

                <h2>Scalability</h2>

                <p>
                    A few hundred mobile devices
                    synchronized operational data
                    with a centralized NodeJS cloud
                    server in real time.
                </p>

                <p>
                    This provided practical experience
                    working with distributed systems,
                    synchronization-heavy architectures,
                    backend APIs, and operational datasets
                    at scale.
                </p>

            </section>

        </div>
    )
}

export default TCS