function ProjectCard({ project }) {
    return (
            <article className="projectCard">
                <div className={`cover cover${project.id}`}>
					<h2 className="card-title">{project.nom}</h2>
					<span className="technos">{project.technos}</span>
					<div className="card-back">
                        <p>{project.description}</p>
						<a href="https://github.com/EmmaB21">github</a>	
					</div>
				</div>
            </article>
    )
}

export default ProjectCard