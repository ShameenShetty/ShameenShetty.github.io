function Cherp() {

    return (
        <div className="project-page">

            {/* HERO */}

            <section className="project-hero">

                <p className="project-date">
                    Jan 2025 - Present
                </p>

                <h1>
                    ChERP - Poultry Industry ERP
                </h1>

                <p className="project-intro">
                    Full-stack ERP ecosystem designed
                    for poultry wholesalers and distributors,
                    including cloud-connected business
                    management tools and mobile sales workflows.
                </p>

            </section>

            {/* OVERVIEW */}

            <section className="section">

                <h2>
                    Overview
                </h2>

                <p>
                    ChERP (Chicken ERP) is a full-stack
                    Enterprise Resource Planning platform
                    designed for businesses operating in
                    the poultry industry.
                </p>

                <p>
                    The system was built using Flutter
                    for the frontend, NodeJS for backend
                    services, and MySQL for centralized
                    data management.
                </p>

                <p>
                    The platform was designed to help
                    wholesalers and distributors manage
                    inventory, purchases, sales,
                    expenses, and operational workflows
                    through a centralized business system.
                </p>

            </section>

            {/* SYSTEM ARCHITECTURE */}

            <section className="section">

                <h2>
                    System Architecture
                </h2>

                <p>
                    The ChERP ecosystem consists of
                    multiple interconnected software
                    components communicating through
                    centralized backend APIs.
                </p>

                <ul className="project-list">

                    <li>
                        ERP management portal used by
                        wholesalers and distributors
                    </li>

                    <li>
                        NodeJS cloud backend responsible
                        for synchronization, APIs, and
                        centralized business logic
                    </li>

                    <li>
                        MySQL database used for managing
                        operational and financial data
                    </li>

                    <li>
                        Cherp Sales mobile application
                        used by drivers and field staff
                        for real-time sales entry
                    </li>

                </ul>

            </section>

            {/* MOBILE SALES WORKFLOW */}

            <section className="section">

                <h2>
                    Mobile Sales Workflow
                </h2>

                <p>
                    One of the major additions to the
                    platform was the Cherp Sales mobile
                    application designed for field sales
                    operations.
                </p>

                <p>
                    Drivers making deliveries can select
                    customers, enter quantity, weight,
                    pricing information, and submit
                    sales directly from the mobile app.
                </p>

                <p>
                    Instead of recording transactions
                    manually on paper and later entering
                    them into the ERP system, sales data
                    is synchronized directly to the cloud
                    server and inserted into the
                    centralized sales database for the
                    corresponding company.
                </p>

                <p>
                    This significantly reduced manual
                    operational overhead while improving
                    data accuracy and real-time business
                    visibility.
                </p>

            </section>

            {/* REAL-WORLD CHALLENGES */}

            <section className="section">

                <h2>
                    Real-World Challenges
                </h2>

                <p>
                    The poultry industry largely operates
                    within the non-organized sector,
                    requiring the software to adapt to
                    real operational constraints rather
                    than idealized workflows.
                </p>

                <p>
                    Important considerations included
                    offline functionality, responsive
                    mobile workflows, usability for
                    non-technical users, and vernacular
                    language support for users who were
                    not comfortable with English-based
                    interfaces.
                </p>

            </section>

            {/* ENGINEERING EXPERIENCE */}

            <section className="section">

                <h2>
                    Engineering Experience
                </h2>

                <p>
                    This project provided valuable
                    exposure to designing scalable
                    business applications that combine
                    frontend systems, backend APIs,
                    database structures, and operational
                    workflows into a unified platform.
                </p>

                <p>
                    One of the most valuable aspects of
                    the experience was learning how to
                    approach software development from
                    the perspective of business owners
                    and end users rather than purely
                    from a programming standpoint.
                </p>

                <p>
                    The project strengthened my
                    understanding of product thinking,
                    scalability, usability, and how
                    software systems can simplify
                    real-world operations.
                </p>

            </section>

        </div>
    )
}

export default Cherp