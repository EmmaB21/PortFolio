import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';
import EditModal from '../../components/EditModal/EditModal';


function AdminProjects() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalMode, setModalMode] = useState(null);
    const [projects, setProjects] = useState([]);


    const handleOpenModal = (project, mode) => {
        setSelectedProject(project);
        setModalMode(mode);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setModalMode(null);
        setModalOpen(false);
    };

    const handleChangePage = () => {
        const navigate = useNavigate
        navigate('/admin-page-skills');
    }

    const handleDelete = async () => {
        try {
            // Effectuez la requête DELETE pour supprimer le projet
            const response = await fetch(`/api/projects/${selectedProject.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Gérez la suppression côté client (mise à jour de l'interface, fermeture de la modale, etc.)
                setProjects((prevProjects) => prevProjects.filter((project) => project.id !== selectedProject.id));
                handleCloseModal();
            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la suppression du projet", error);
            // Gérer les erreurs ici
        }
    };

    const handleUpdateProject = async (formData, projectId) => {
        try {
            const response = await fetch(`URL_DE_L_API/${projectId}`, {
                method: "PUT",
                body: formData,
            });

            if (response.ok) {
                // Gérer la mise à jour côté client (mise à jour de l'interface, etc.)
            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la mise à jour du projet", error);
            // Gérer les erreurs ici
        }
    };

    useEffect(() => {
        // Effectue une requête GET 
        fetch('/api/projects')
            .then(response => response.json())
            .then(data =>
                setProjects(data))
            .catch(error => console.error('Erreur lors du chargement des projets', error));
    }, []);

  

    return (
        <div className="projects" id="Projects">
            <h2 className='projects__title'>Page Admin - Mes réalisations</h2>
            <btn onClick={handleChangePage}>Page Compétences</btn>
            <section className="projects-container">
                {projects.map(project => (
                    <div key={project.id} onClick={() => handleOpenModal(project, 'edit')}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </section>
            <NewProjectForm />
            {isModalOpen &&
                <EditModal
                    project={selectedProject}
                    mode={modalMode}
                    onClose={handleCloseModal}
                    onDeleteProject={handleDelete}
                    onUpdateProject={handleUpdateProject}
                />}
        </div>
    );
}


export default AdminProjects