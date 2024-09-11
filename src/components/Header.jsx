import React from 'react'
import Logo from "../assets/Logo.png"
import Buttons from './buttons'

function Header() {
  return (
    <>
      <nav className="header-loggedout">
        <div>
          <img src={Logo} className="logo" />
        </div>

        <div className="loggedout">
          <Buttons className="login-btn">Login</Buttons>
          <Buttons className="signup-btn">Signup</Buttons>
        </div>
      </nav>
    </>
  )
}

export default Header
