import React, { useState, useEffect } from "react";
import { fetchInfo } from "../../service/API";

const EditProjectForm = ({ projectData, updateProjects }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [localFormData, setLocalFormData] = useState({
        image: null,
        nom: "",
        alt: "",
        description: "",
        technos: "",
        liens: "",
    });

    useEffect(() => {

        setLocalFormData({
            image: projectData.image,
            nom: projectData.nom,
            alt: projectData.alt,
            description: projectData.description,
            technos: projectData.technos,
            liens: projectData.liens,
        });
    },
        [projectData]);

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

        try {
            const response = await fetch(`${fetchInfo.projects}/${projectData.id}`, {
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
                fetch(fetchInfo.projects)
                    .then(response => response.json())
                    .then(data => updateProjects(data))
                    .catch(error => console.error('Erreur lors du chargement des projets', error));
            } else {
                const errorData = await response.json();
                console.error("Erreur lors de la requête :", errorData);
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la mise à jour du projet", error);
        }
    };

    const handleDelete = async () => {
        const token = localStorage.getItem("token");
        try {
            // Effectuer la requête DELETE pour supprimer le projet
            const response = await fetch(`${fetchInfo.projects}/${projectData.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                // setIsSubmitted(true)
                // Appeler la fonction pour mettre à jour les projets dans le composant parent
                fetch(fetchInfo.projects)
                    .then(response => response.json())
                    .then(data => updateProjects(data))
                    .catch(error => console.error('Erreur lors du chargement des cartes', error));

            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la suppression du projet", error);
        }
    };

    return (
        <div className="edit-project-form-wrapper">
            <form id='form' className="edit-project-form" onSubmit={handleFormSubmit}>
                <div className="form-item">
                    <input type="file" name="image" id="image" required onChange={handleFileChange} />
                </div>
                <div className="form-item">
                    <input type="text" name="nom" id="nom" value={localFormData.nom} required onChange={handleInputChange} />
                    <label htmlFor="nom">Nom:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="alt" id="alt" value={localFormData.alt} required onChange={handleInputChange} />
                    <label htmlFor="alt">Alt:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="description" id="description" value={localFormData.description} required onChange={handleInputChange} />
                    <label htmlFor="description">description:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="technos" id="technos" value={localFormData.technos} required onChange={handleInputChange} />
                    <label htmlFor="technos">Technos:</label>
                </div>
                <div className="form-item">
                    <textarea name="liens" id="liens" value={JSON.stringify(localFormData.liens)} required onChange={handleInputChange}></textarea>
                    <label htmlFor="liens">Liens (au format JSON) :</label>
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

export default EditProjectForm;