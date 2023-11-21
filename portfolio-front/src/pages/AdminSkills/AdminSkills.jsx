import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchInfo } from '../../service/API';
import TechCard from '../../components/TechCard/TechCard'
import NewSkillForm from '../../components/NewSkillForm/NewSkillForm';
import EditModal from '../../components/EditModal/EditModal';


const AdminSkills = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [skills, setSkills] = useState([]);
    const navigate = useNavigate();

    const updateSkills = (newSkills) => {
        setSkills(newSkills);
    };

    const handleOpenModal = (skill) => {
        setSelectedSkill(skill);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedSkill(null);
        setModalOpen(false);
    };


    const navigateToProjects = () => {
        navigate('/admin-page-projects');
    };

    const navigateToHome = () => {
        navigate('/');
    };


    useEffect(() => {
        // Effectue une requête GET 
        fetch(fetchInfo.skills)
            .then(response => response.json())
            .then(data =>
                setSkills(data))
            .catch(error => console.error('Erreur lors du chargement des projets', error));
    }, []);



    return (
        <div className="admin-skills">
            <div className='skills__part'>
                <h2 className='skills__part__title'>Page Admin - Mes compétences</h2>
                <button className="skills__part__btn" onClick={navigateToProjects}>Page Projets</button>
                <button className="skills__part__btn" onClick={navigateToHome}>Page Principale</button>
                <section className="skills__part-container">
                    {skills.map(skill => (
                        <div key={skill.id} onClick={() => handleOpenModal(skill, 'edit')}>
                            <TechCard skill={skill} />
                        </div>
                    ))}
                </section>
            </div>
            <NewSkillForm updateSkills={updateSkills}/>
            {isModalOpen && (
                <EditModal
                    data={selectedSkill}
                    type="skill"
                    onClose={handleCloseModal}
                    updateSkills={updateSkills}
                />
            )}

        </div>
    );
}


export default AdminSkills
