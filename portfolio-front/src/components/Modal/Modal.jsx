import React from 'react';
import FormLogin from '../FormLogin/FormLogin';
import Projects from '../Projects/Projects';

const Modal = ({ closeModal, isAuthenticated }) => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>X</span>
        <div>
          {isAuthenticated ? (
            // Affichez la liste des projets à partir du composant Projects
            <Projects />
          ) : (
            // Affichez le formulaire de connexion si l'utilisateur est déconnecté
            <FormLogin />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
