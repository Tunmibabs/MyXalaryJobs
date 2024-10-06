import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Modal from "react-modal";
import Buttons from "./buttons";

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "30%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function SignUpModal({ logIn }) {
  let subtitle;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      <Buttons className="signup-btn" onClick={openModal}>
        Signup
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
              <h3>Signup</h3>
              <Buttons className="login-btn">
                Already have an account? Login
              </Buttons>
            </div>
            <div className="Modalbody">
              <div className="loginHead">
                <h2>Signup to apply for jobs</h2>
                <h5>
                  We need certain one time information which will make the
                  employer able to evaluate your CV. It will make it easier for
                  us to send your profile to employers and for employers to have
                  a thorough review of your profile.
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
              <div className="modalForm">
                <label htmlFor="">
                  Confirm Password <span>*</span>
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="Modalfooter">
              <Buttons
                className="signup-btn"
              >
                Signup
              </Buttons>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default SignUpModal;
