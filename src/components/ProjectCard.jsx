import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({
    title,
    summary,
    components,
    technologies,
    tags,
    link
}) {
    return (
        <Link
            className="project-card"
            to={link}
        >
            <h3>{title}</h3>

            <p className="project-summary">
                {summary}
            </p>

            <div className="project-section">
                <h4>Components</h4>

                <ul>
                    {components.map((component, index) => (
                        <li key={index}>
                            {component}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="project-technologies">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="tech-badge"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="project-tags">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="tag-badge"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    )
}

export default ProjectCard