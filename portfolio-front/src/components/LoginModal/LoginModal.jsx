import LoginForm from '../LoginForm/LoginForm';
// import SignUpForm from '../SignUpForm/SignUpForm';


const Modal = ({ closeModal}) => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <button className="close" onClick={closeModal}>X</button>
        <div>
              {/* <SignUpForm /> */}
              <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
