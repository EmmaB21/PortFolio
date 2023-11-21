import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchInfo } from "../../service/API";

const FormLogin = () => {

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(fetchInfo.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData),
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
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="email">Email:</label>
        </div>
        <div className="form-item">
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
          <label htmlFor="password">Password:</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-btn">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
