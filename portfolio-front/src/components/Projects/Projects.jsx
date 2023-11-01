import data from '../../data/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {

    return (
        <section className="projects" id="Projects">
            <h2 className='projects__title'>Mes réalisations</h2>
            <div className="projects-container">
                {data.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;