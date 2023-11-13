import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';


const Modal = ({ closeModal}) => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>X</span>
        <div>
              <SignUpForm />
              <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
