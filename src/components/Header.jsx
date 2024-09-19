import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Buttons from "./buttons";
import { useAuth } from "../Context/AuthContext";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log("is Logged")
  };
  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    console.log("Not Logged")

  };

  return (
    <>
      <nav className="header-loggedout">
        <div>
          <img src={Logo} className="logo" />
        </div>

        <div className="loggedout">
          {isLoggedIn ? (
            <Buttons className="logout-btn" onClick={logOut}>
              Logout
            </Buttons>
          ) : (
            <>
              <Buttons className="login-btn" onClick={logIn}>
                Login
              </Buttons>
              <Buttons className="signup-btn">Signup</Buttons>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
