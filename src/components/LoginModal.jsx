
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Modal from "react-modal";
import Buttons from "./buttons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "30%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function LoginModal({ logIn }) {
  let subtitle;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleLogin = () => {
    if (!email || !password) {
    //   setError("Both email and password are required!");
    } else {
      logIn(); // Call the passed logIn function only when both fields are filled
      closeModal(); // Close modal after successful login
    }
  };

  return (
    <div>
      <Buttons className="login-btn" onClick={openModal}>
        Login
      </Buttons>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modalBackground">
          <div className="modalcontainer">
            <div className="Modalheader">
              <h3>Login</h3>
              <Buttons className="signup-btn">
                Don't have an account? Signup
              </Buttons>
            </div>
            <div className="Modalbody">
              <div className="loginHead">
                <h2>Login to apply for jobs</h2>
                <h5>
                  There's no limit to what you can achieve. Login to start
                  applying for jobs now
                </h5>
              </div>

              <div className="modalForm">
                <label htmlFor="">
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="modalForm">
                <label htmlFor="">
                  Password <span>*</span>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="Modalfooter">
              <Buttons className="login-btn" onClick={handleLogin} disabled={!email || !password}>
                Login
              </Buttons>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default LoginModal;

// ReactDOM.render(<App />, appElement);
