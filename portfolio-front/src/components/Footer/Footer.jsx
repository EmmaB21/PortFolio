// 
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const logout = () => {
    // Supprimez le token du local storage et déconnectez l'utilisateur
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <section className="footer">
      <div className="admin">
        {isAuthenticated ? (
          <div>
            <p className="modal-link" onClick={logout}>Logout</p>
            <p className="modal-link" onClick={openModal}>Modifier</p>
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
