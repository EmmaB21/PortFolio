import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../LoginModal/LoginModal';

const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalVisible(true);
  };

  const logout = () => {
    // On supprime le token du local storage et on déconnecte l'utilisateur
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const handleChangePage = () => {
    navigate('/admin-page-projects');
  };

  return (
    <section className="footer">
      <div className="admin">
        {isAuthenticated ? (
          <div>
            <p className="modal-link" onClick={logout}>Logout</p>
            <p className="modal-link" onClick={handleChangePage}>Modifier</p>
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
