import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
      // Effectue une requête GET 
      fetch('http://localhost:3001/api/projects')
        .then(response => response.json())
        .then(data => 
            setProjects(data))
        .catch(error => console.error('Erreur lors du chargement des projets', error));
    }, []); 
    console.log("Project Data:", projects);
    return (
        <section className="projects" id="Projects">
            <h2 className='projects__title'>Mes réalisations</h2>
            <div className="projects-container">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;