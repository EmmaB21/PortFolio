import React, { useState } from "react";
import { fetchInfo } from "../../service/API";

const FormSignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(fetchInfo.signup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // On réinitialise le formulaire après soumission si nécessaire
        setFormData({ email: "", password: "" });
        setIsSubmitted(true);
      } else {
        // On gère les erreurs en fonction de la réponse du serveur
        const errorData = await response.json();
        setError(errorData.error || "Une erreur s'est produite lors de la connexion.");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion", error);
      setError("Une erreur s'est produite lors de la connexion.");
    }
  };


  return (
    <div className="signup-form-wrapper">
      <form id="form" className="signup-form" onSubmit={submitForm}>
        <div className="form-item">
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="email">Email:</label>
        </div>
        <div className="form-item">
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
          <label htmlFor="password">Password:</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-btn">
          {isSubmitted ? "Enregistré !" : "S'enregistrer"}
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
