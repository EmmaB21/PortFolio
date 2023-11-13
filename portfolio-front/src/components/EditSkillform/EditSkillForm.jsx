import React, { useState, useEffect } from "react";

const EditSkillForm = ({ onSubmit, isEditing, skillData, onDelete }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [localFormData, setLocalFormData] = useState({
        image: "",
        nom: "",
        alt: "",
    });

    useEffect(() => {
        if (isEditing && skillData) {
            // Si on est en mode édition, on pré-remplit le formulaire avec les données du projet
            setLocalFormData({
                image: skillData.image || "",
                nom: skillData.nom || "",
                alt: skillData.alt || "",
            });
        }
    }, [isEditing, skillData]);

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

        try {
            await onSubmit(localFormData, isEditing, skillData);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'envoi du formulaire", error);
            // Gérer les erreurs ici
        }
    };

    return (
        <div className="admin-form-wrapper">
            <form id='form' className="admin-form" onSubmit={handleFormSubmit}>
            <div className="form-item">
                    <input type="file" name="image" id="image" required onChange={handleFileChange} />
                    <label htmlFor="image">Image:</label>
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
                    {isSubmitted ? "Envoyé !" : "Envoyer"}
                </button>
            </form>
            {isEditing && (
                <button onClick={onDelete} className="delete-btn">
                    Supprimer
                </button>
            )}
        </div>
    );
};

export default EditSkillForm;


