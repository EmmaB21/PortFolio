import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchInfo } from '../../service/API';
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';
import EditModal from '../../components/EditModal/EditModal';


const AdminProjects = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    const updateProjects = (newProjects) => {
        setProjects(newProjects);
    };

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setModalOpen(false);
    };


    const navigateToSkills = () => {
        navigate('/admin-page-skills');
    };

    const navigateToHome = () => {
        navigate('/');
    };


    useEffect(() => {
        // Effectue une requête GET 
        fetch(fetchInfo.projects)
            .then(response => response.json())
            .then(data =>
                setProjects(data))
            .catch(error => console.error('Erreur lors du chargement des projets', error));
    }, []);



    return (
        <div className="admin-projects">
            <aside className='sidebar'>
                <h2 className='sidebar__title'>Mes réalisations</h2>
                <button className="sidebar__btn" onClick={navigateToSkills}>Page Compétences</button>
                <button className="sidebar__btn" onClick={navigateToHome}>Page Principale</button>
            </aside>
            <div className='main-content'>
                <div className='projects__part'>
                    <section className="projects__part-container">
                        {projects.map(project => (
                            <div key={project.id} onClick={() => handleOpenModal(project)}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </section>
                </div>
                <NewProjectForm updateProjects={updateProjects} />
                {isModalOpen && (
                    <EditModal
                        data={selectedProject}
                        type="project"
                        onClose={handleCloseModal}
                        updateProjects={updateProjects}
                    />
                )}
            </div>
        </div>
    );
}


export default AdminProjects
