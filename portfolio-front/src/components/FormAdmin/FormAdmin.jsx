import { useState } from "react"


const FormAdmin = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('URL_DE_L_API', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset(); // Réinitialisez le formulaire après soumission si nécessaire
            } else {
                // Gérez les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'envoi du formulaire', error);
            // Gérez les erreurs ici
        }
    };


    return (
        <div className="admin-form-wrapper">
            <form id='form' className="admin-form"
                onSubmit={submitForm}
            >
                <div className="form-item">
                    <input type="file" name="image" id="image" required />
                    <label htmlFor="image">Image:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="nom" id="nom" required />
                    <label htmlFor="nom">Nom:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="alt" id="alt" required />
                    <label htmlFor="alt">Alt:</label>
                </div>
                <div className="form-item">
                    <textarea className="" name="description" id="description" required></textarea>
                    <label htmlFor="description">Description:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="technos" id="technos" required />
                    <label htmlFor="technos">Technos:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="liens" id="liens" required />
                    <label htmlFor="liens">liens:</label>
                </div>
                <button type="submit" className="submit-btn">
                    {isSubmitted ? "Envoyé !" : "Envoyer"}
                </button>
            </form>
        </div>
    )
}

export default FormAdmin;