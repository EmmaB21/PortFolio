import React from 'react';
import FormLogin from '../FormLogin/FormLogin';
import FormSignUp from '../FormSignUp/FormSignUp';
import ProjectCard from '../ProjectCard/ProjectCard';
import data from '../../data/projects.json';

const Modal = ({ closeModal, isAuthenticated }) => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>X</span>
        <div>
          {isAuthenticated ? (
            // Affichez la liste des projets à partir du composant Projects
            <div className="projects-container">
                {data.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          ) : (
            // Affichez le formulaire de connexion si l'utilisateur est déconnecté
            <div>
              <FormSignUp />
              <FormLogin />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
