import React from "react";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="copyright">
          <p>© All rights reserved. MyXalary 2024</p>
        </div>

        <div className="bottom-links">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
        <div className="menu-links">
          <img src={facebook} className="menu-icons"/>
          <img src={twitter} className="menu-icons"/>
          <img src={instagram} className="menu-icons"/>
          <img src={linkedin} className="menu-icons"/>
        </div>
      </footer>
    </>
  );
}

export default Footer;
