import React, { useState, useEffect } from "react";

const EditProjectForm = ({ projectData, updateProjects }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [localFormData, setLocalFormData] = useState({
        image: "",
        nom: "",
        alt: "",
        description: "",
        technos: "",
        liens: "",
    });

    useEffect(() => {

        setLocalFormData({
            image: projectData.image || "",
            nom: projectData.nom || "",
            alt: projectData.alt || "",
            description: projectData.description || "",
            technos: projectData.technos || "",
            liens: projectData.liens || "",
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
            const response = await fetch(`http://localhost:3001/api/projects/${projectData.id}`, {
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
                fetch('http://localhost:3001/api/projects')
                    .then(response => response.json())
                    .then(data => updateProjects(data))
                    .catch(error => console.error('Erreur lors du chargement des projets', error));
            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la mise à jour du projet", error);
            // Gérer les erreurs ici
        }
    };

    const handleDelete = async () => {
        const token = localStorage.getItem("token");
        try {
            // Effectuer la requête DELETE pour supprimer le projet
            const response = await fetch(`http://localhost:3001/api/projects/${projectData.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setIsSubmitted(true)
                // Appeler la fonction pour mettre à jour les projets dans le composant parent
                fetch('http://localhost:3001/api/projects')
                    .then(response => response.json())
                    .then(data => updateProjects(data))
                    .catch(error => console.error('Erreur lors du chargement des cartes', error));

            } else {
                // Gérer les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la suppression du projet", error);
            // Gérer les erreurs ici
        }
    };

    return (
        <div className="edit-project-form-wrapper">
            <form id='form' className="edit-project-form" onSubmit={handleFormSubmit}>
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
                <div className="form-item">
                    <input type="text" name="description" id="description" required onChange={handleInputChange} />
                    <label htmlFor="description">description:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="technos" id="technos" required onChange={handleInputChange}/>
                    <label htmlFor="technos">Technos:</label>
                </div>
                <div className="form-item">
                    <textarea name="liens" id="liens" required onChange={handleInputChange}></textarea>
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