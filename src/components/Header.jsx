import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Buttons from "./buttons";
import { useAuth } from "../Context/AuthContext";
import LoggedInNvabar from "./nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";


function Header() {

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
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
          <GiHamburgerMenu  className="hamburger" onClick=""/>
          {/* <FaX /> */}
        </div>
      </nav>
      {isLoggedIn && (
        <nav className="navLoggedin">
          <LoggedInNvabar />
        </nav>
      )}
    </>
  );
}

export default Header;
