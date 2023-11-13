import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TechCard from '../../components/TechCard/TechCardCard'
import NewSkillForm from '../../components/NewSkillForm/NewSkillForm';
import EditModal from '../../components/EditModal/EditModal';


function AdminSkills() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [modalMode, setModalMode] = useState(null);
    const [skills, setSkills] = useState([]);


    const handleOpenModal = (skill, mode) => {
        setSelectedSkill(skill);
        setModalMode(mode);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedSkill(null);
        setModalMode(null);
        setModalOpen(false);
    };

    const handleChangePage = () => {
        const navigate = useNavigate
        navigate('/admin-page-projects');
    }

    const handleDelete = async () => {
        try {
            // Effectuez la requête DELETE pour supprimer la carte
            const response = await fetch(`/api/skills/${selectedSkill.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Gérez la suppression côté client (mise à jour de l'interface, fermeture de la modale, etc.)
                setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== selectedSkill.id));
                handleCloseModal();
            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la suppression de la carte", error);
            // Gérer les erreurs ici
        }
    };

    const handleUpdateSkill = async (formData, skillId) => {
        try {
            const response = await fetch(`URL_DE_L_API/${skillId}`, {
                method: "PUT",
                body: formData,
            });

            if (response.ok) {
                // Gérer la mise à jour côté client (mise à jour de l'interface, etc.)
            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la mise à jour de la carte", error);
            // Gérer les erreurs ici
        }
    };

    useEffect(() => {
        // Effectue une requête GET 
        fetch('/api/skills')
            .then(response => response.json())
            .then(data =>
                setSkills(data))
            .catch(error => console.error('Erreur lors du chargement des skills', error));
    }, []);

    return (
        <div className="skills" id="Skills">
            <h2 className='skills__title'>Page Admin - Mes compétences</h2>
            <btn onClick={handleChangePage}>Page Projets</btn>
            <section className="skills-container">
                {skills.map(skill => (
                    <div key={skill.id} onClick={() => handleOpenModal(skill, 'edit')}>
                        <TechCard skill={skill} />
                    </div>
                ))}
            </section>
            <NewSkillForm />
            {isModalOpen &&
                <EditModal
                skill={selectedSkill}
                    mode={modalMode}
                    onClose={handleCloseModal}
                    onDeleteSkill={handleDelete}
                    onUpdateSkill={handleUpdateSkill}
                />}
        </div>
    );
}


export default AdminSkills