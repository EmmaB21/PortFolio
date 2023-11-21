import React, { useState, useEffect } from "react";
import { fetchInfo } from "../../service/API";

const EditSkillForm = ({ skillData, updateSkills }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [localFormData, setLocalFormData] = useState({
        image: "",
        nom: "",
        alt: "",
    });

    useEffect(() => {

        setLocalFormData({
            image: skillData.image || "",
            nom: skillData.nom || "",
            alt: skillData.alt || "",
        });
    },
        [skillData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setLocalFormData((prevData) => ({
            ...prevData,
            image: file,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        console.log('body :', localFormData)
        try {
            const response = await fetch(`${fetchInfo.skills}/${skillData.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: localFormData,
                
            });

            if (response.ok) {
                setIsSubmitted(true)
                setTimeout(function () {
                    e.target.reset(); // On réinitialise le formulaire
                    setIsSubmitted(false);
                }, 1000);
                // Appeler la fonction pour mettre à jour les projets dans le composant parent
                fetch(fetchInfo.skills)
                  .then(response => response.json())
                  .then(data => updateSkills(data))
                  .catch(error => console.error('Erreur lors du chargement des cartes', error));
            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la mise à jour de la carte", error);
            // Gérer les erreurs ici
        }
    };

    const handleDelete = async () => {
        const token = localStorage.getItem("token");
        try {
            // Effectuer la requête DELETE pour supprimer la carte
            const response = await fetch(`${fetchInfo.skills}/${skillData.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                // setIsSubmitted(true)
                // Appeler la fonction pour mettre à jour les projets dans le composant parent
                fetch(fetchInfo.skills)
                  .then(response => response.json())
                  .then(data => updateSkills(data))
                  .catch(error => console.error('Erreur lors du chargement des cartes', error));
            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la suppression de la carte", error);
            // Gérer les erreurs ici
        }
    };

    return (
        <div className="edit-skill-form-wrapper">
            <form id='form' className="edit-skill-form" onSubmit={handleFormSubmit}>
                <div className="form-item">
                    <input type="file" name="image" id="image" required onChange={handleFileChange} />
                    {/* <label htmlFor="image">Image:</label> */}
                </div>
                <div className="form-item">
                    <input type="text" name="nom" id="nom" required onChange={handleInputChange} />
                    <label htmlFor="nom">Nom:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="alt" id="alt" required onChange={handleInputChange} />
                    <label htmlFor="alt">Alt:</label>
                </div>
                <button type="submit" className="submit-btn">
                    {isSubmitted ? "Envoyé !" : "Modifier"}
                </button>
            </form>

            <button onClick={handleDelete} className="delete-btn">
            Supprimer
            </button>

        </div>
    );
};

export default EditSkillForm;