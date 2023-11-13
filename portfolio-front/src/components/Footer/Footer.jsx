// 
import React, { useState } from 'react';
import Modal from '../LoginModal/LoginModal';

const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const logout = () => {
    // On supprime le token du local storage et on déconnecte l'utilisateur
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <section className="footer">
      <div className="admin">
        {isAuthenticated ? (
          <div>
            <p className="modal-link" onClick={logout}>Logout</p>
          </div>
        ) : (
            <p className="modal-link" onClick={openModal}>Login</p>
        )}
        {modalVisible && <Modal closeModal={() => setModalVisible(false)} isAuthenticated={isAuthenticated} />}
      </div>
      <p>Among others things - 2023</p>
    </section>
  );
};

export default Footer;
