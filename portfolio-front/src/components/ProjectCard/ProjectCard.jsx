function ProjectCard({ project }) {
    return (
        <article className="projectCard">
            <div className="cover" style={{ backgroundImage: `url(http://localhost:3001/images/${project.image})` }}>
                <h2 className="card-title">{project.nom}</h2>
                <span className="technos">{project.technos}</span>
                <div className="card-back">
                    <p>{project.description}</p>
                    <div className="card-links">
                        {project.liens && project.liens.map((lien, index) => (
                            <a
                                key={index}
                                href={lien.lien}
                                target='_blank'
                                rel="noopener noreferrer">
                                {lien.nom}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard