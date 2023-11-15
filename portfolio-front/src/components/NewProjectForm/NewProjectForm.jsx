import { useState } from "react";

const FormNewProject = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
// formDataObject.append("image", formData.image);
//   };

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form); 

    // const liens = JSON.parse(formData.get("liens"));
    // formData.set("liens", JSON.stringify(liens));
    
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
        form.reset(); // On réinitialise le formulaire après soumission si nécessaire
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
    <div className="admin-form-wrapper">
      <form
        id="form"
        className="admin-form"
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
                    <label htmlFor="liens">Liens (au format JSON) :</label>
                </div>
                <button type="submit" className="submit-btn">
                     {isSubmitted ? "Envoyé !" : "Envoyer"}
                </button>
      </form>
    </div>
  );
};

export default FormNewProject;


// import { useState } from "react";

// const FormNewProject = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const submitForm = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formDataObject = new FormData(form);
  
//     // Gérer le champ de fichier (image)
//     formDataObject.set('image', form.querySelector('input[type="file"]').files[0]);
  
//     // Gérer le champ de liens
//     const liens = JSON.parse(formDataObject.get('liens'));
//     formDataObject.set('liens', JSON.stringify(liens));
  
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:3001/api/projects", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formDataObject,
//       });
  
//       if (response.ok) {
//         setIsSubmitted(true);
//         form.reset(); // On réinitialise le formulaire après soumission si nécessaire
//       } else {
//         const errorData = await response.json();
//         console.error(
//           errorData.message || "Une erreur s'est produite lors de l'ajout du projet."
//         );
//       }
//     } catch (error) {
//       console.error("Une erreur s'est produite lors de l'envoi du formulaire", error);
//       // On gère les erreurs ici
//     }
//   };

//   return (
//     <div className="admin-form-wrapper">
//       <form
//         id="form"
//         className="admin-form"
//         onSubmit={submitForm}
//         encType="multipart/form-data"
//       >
//         <div className="form-item">
//           <input type="file" name="image" id="image" required />
//           <label htmlFor="image">Image:</label>
//         </div>
//         <div className="form-item">
//           <input type="text" name="nom" id="nom" required />
//           <label htmlFor="nom">Nom:</label>
//         </div>
//         <div className="form-item">
//           <input type="text" name="alt" id="alt" required />
//           <label htmlFor="alt">Alt:</label>
//         </div>
//         <div className="form-item">
//           <textarea className="" name="description" id="description" required></textarea>
//           <label htmlFor="description">Description:</label>
//         </div>
//         <div className="form-item">
//           <input type="text" name="technos" id="technos" required />
//           <label htmlFor="technos">Technos:</label>
//         </div>
//         <div className="form-item">
//           <textarea name="liens" id="liens" required></textarea>
//           <label htmlFor="liens">Liens (au format JSON) :</label>
//         </div>
//         <button type="submit" className="submit-btn">
//           {isSubmitted ? "Envoyé !" : "Envoyer"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormNewProject;

// // import { useState } from "react";

// // const FormNewProject = () => {
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [formData, setFormData] = useState();

// //   const handleChange = (e) => {
// //     // if (e.target.type === 'file') {
// //     //   formData.append('image', e.target.files[0]);
// //     // } else {
// //       setFormData({ ...formData, [e.target.name]: e.target.value });
// //     // }
// //   };
  

// //   const submitForm = async (e) => {
// //     e.preventDefault();
// //     const form = e.target;
// //     const formDataObject = new FormData(form); // Utiliser un autre nom ici

// //     // Gérer le champ de fichier (image)
// //     formDataObject.set('image', form.querySelector('input[type="file"]').files[0]);

// //     // Gérer le champ de liens
// //     const liens = JSON.parse(formDataObject.get('liens'));
// //     formDataObject.set('liens', JSON.stringify(liens));

// //     try {
// //       const token = localStorage.getItem("token");
// //       const response = await fetch("http://localhost:3001/api/projects", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         setIsSubmitted(true);
// //         form.reset(); // On réinitialise le formulaire après soumission si nécessaire
// //       } else {
// //         const errorData = await response.json();
// //         console.error(
// //           errorData.message || "Une erreur s'est produite lors de l'ajout du projet."
// //         );
// //       }
// //     } catch (error) {
// //       console.error("Une erreur s'est produite lors de l'envoi du formulaire", error);
// //       // On gère les erreurs ici
// //     }
// //   };

// //     return (
// //         <div className="admin-form-wrapper">
// //             <form id='form' className="admin-form"
// //                 onSubmit={submitForm}
// //                 encType="multipart/form-data"
// //             >
// //                 <div className="form-item">
// //                     <input type="file" name="image" id="image" onChange={handleChange} required />
// //                     <label htmlFor="image">Image:</label>
// //                 </div>
// //                 <div className="form-item">
// //                     <input type="text" name="nom" id="nom" onChange={handleChange} required />
// //                     <label htmlFor="nom">Nom:</label>
// //                 </div>
// //                 <div className="form-item">
// //                     <input type="text" name="alt" id="alt" onChange={handleChange} required />
// //                     <label htmlFor="alt">Alt:</label>
// //                 </div>
// //                 <div className="form-item">
// //                     <textarea className="" name="description" id="description" onChange={handleChange} required></textarea>
// //                     <label htmlFor="description">Description:</label>
// //                 </div>
// //                 <div className="form-item">
// //                     <input type="text" name="technos" id="technos" onChange={handleChange} required />
// //                     <label htmlFor="technos">Technos:</label>
// //                 </div>
// //                 <div className="form-item">
// //                     <textarea name="liens" id="liens" onChange={handleChange} required></textarea>
// //                     <label htmlFor="liens">Liens (au format JSON) :</label>
// //                 </div>
// //                 <button type="submit" className="submit-btn">
// //                     {isSubmitted ? "Envoyé !" : "Envoyer"}
// //                 </button>
// //             </form>
// //         </div>
// //     )
// // }

// // export default FormNewProject;