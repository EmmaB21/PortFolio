import { useState } from "react"


const FormNewSkill = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const token = localStorage.getItem("token");
            const response = await fetch('http://localhost:3001/api/skills', {
                method: 'POST',
                headers: {
                      Authorization: `Bearer ${token}`,
                    },
                body: formData,
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset(); // On réinitialise le formulaire après soumission si nécessaire
            } else {
                // On gère les erreurs en fonction de la réponse du serveur
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'envoi du formulaire", error);
            // On gère les erreurs ici
        }
    };


    return (
        <div className="admin-form-wrapper">
            <form id='form' className="admin-form"
                onSubmit={submitForm}
            >
                <div className="form-item">
                    <input type="file" name="image" id="image" required />
                    {/* <label htmlFor="image">Image:</label> */}
                </div>
                <div className="form-item">
                    <input type="text" name="nom" id="nom" required />
                    <label htmlFor="nom">Nom:</label>
                </div>
                <div className="form-item">
                    <input type="text" name="alt" id="alt" required />
                    <label htmlFor="alt">Alt:</label>
                </div>
                <button type="submit" className="submit-btn">
                    {isSubmitted ? "Envoyé !" : "Envoyer"}
                </button>
            </form>
        </div>
    )
}

export default FormNewSkill;