import { useState } from "react";

const NewProjectForm = ({updateProjects}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);


  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form); 
    console.log(formData)
    
    

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3001/api/projects", {
        method: "POST",
        headers: {
        //   "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(function () {
          e.target.reset(); // On réinitialise le formulaire
          setIsSubmitted(false);
      }, 1000);
        // Appeler la fonction pour mettre à jour les projets dans le composant parent
        fetch('http://localhost:3001/api/projects')
          .then(response => response.json())
          .then(data => updateProjects(data))
          .catch(error => console.error('Erreur lors du chargement des cartes', error));
      } else {
        const errorData = await response.json();
        console.error(
          errorData.message || "Une erreur s'est produite lors de l'ajout du projet."
        );
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'envoi du formulaire", error);
      // On gère les erreurs ici
    }
  };

  return (
    <div className="admin-project-form-wrapper">
      <form
        id="form"
        className="admin-project-form"
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
              <div className="form-item">
                  <textarea className="" name="description" id="description"  required></textarea>
                  <label htmlFor="description">Description:</label>
              </div>
              <div className="form-item">
                  <input type="text" name="technos" id="technos" required />
                   <label htmlFor="technos">Technos:</label>
               </div>
                <div className="form-item">
                   <textarea name="liens" id="liens" required></textarea>
                    <label htmlFor="liens">Liens (au format JSON : tableau d'objets "nom":"", "lien":"") :</label>
                </div>
                <button type="submit" className="submit-btn">
                     {isSubmitted ? "Envoyé !" : "Envoyer"}
                </button>
      </form>
    </div>
  );
};

export default NewProjectForm;