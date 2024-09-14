import React from 'react'
import Logo from "../assets/Logo.png"
import Buttons from './buttons'
import LoggedInNvabar from './loggedInNvabar'
import { Link } from 'react-router-dom'

function LoggedInHeader() {
  return (
    <>
      <nav className="header-loggedin">
        <div>
          <img src={Logo} className="logo" />
        </div>

        <div className="loggedout">
          <Link to='/'><Buttons className="logout-btn">Logout</Buttons></Link>
        </div>
      </nav>
      <nav className='navLoggedin'>
        <LoggedInNvabar />
      </nav>
    </>
  )
}

export default LoggedInHeader
