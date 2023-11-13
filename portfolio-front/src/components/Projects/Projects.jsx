// import { useState, useEffect } from 'react';
import data from '../../data/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {

    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //   // Effectue une requête GET 
    //   fetch('/api/projects')
    //     .then(response => response.json())
    //     .then(data => 
    //         setProjects(data))
    //     .catch(error => console.error('Erreur lors du chargement des projets', error));
    // }, []); 
  
    return (
        <section className="projects" id="Projects">
            <h2 className='projects__title'>Mes réalisations</h2>
            <div className="projects-container">
                {/* {projects.map(project => ( */}
                {data.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;