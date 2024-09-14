import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to='/logged'><Buttons className="login-btn">Login</Buttons></Link>
          <Link><Buttons className="signup-btn">Signup</Buttons></Link>
        </div>
      </nav>
    </>
  )
}

export default Header
