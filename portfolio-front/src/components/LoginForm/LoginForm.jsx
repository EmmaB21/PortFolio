import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('URL_DE_L_API/login', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // On Stocke le token dans le local storage
        localStorage.setItem('token', token);

        navigate('/admin-page-projects');
        
      } else {
        // On gère les erreurs en fonction de la réponse du serveur
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion", error);
      setError("Une erreur s'est produite lors de la connexion.");
    }
  };

  return (
    <div className="login-form-wrapper">
      <form id="form" className="login-form" onSubmit={submitForm}>
        <div className="form-item">
          <input type="email" name="email" id="email" required />
          <label htmlFor="email">Email:</label>
        </div>
        <div className="form-item">
          <input type="password" name="password" id="password" required />
          <label htmlFor="password">Password:</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-btn">
          "Se connecter"
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
