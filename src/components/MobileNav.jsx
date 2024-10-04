import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileImg from "../assets/Status.png";
import {
  FaRegBookmark,
  FaBook,
  FaRegClock,
  FaRegCheckCircle,
} from "react-icons/fa";
import Buttons from "./buttons";

function MobileNav() {
  return (
    <div className="mobileNav">
      <nav className="navLeft">
        <Buttons className="profileBtn">Profile Score:0%</Buttons>
        <Buttons className="completePBtn">Complete your Profile</Buttons>
        {/* <Buttons className="appProfileBtn">Profile Score:100%</Buttons> */}
        <figure>
          <figcaption>Jane Jes</figcaption>
          <img src={ProfileImg} alt="" className="figImg" />
        </figure>
      </nav>
      <nav className="rightNav">
        <ul>
          <li>
            <NavLink
              to="/jobs"
            >
              <FaRegCheckCircle className="icons" />
              <span>Jobs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appliedJobs"
            >
              <FaRegClock className="icons" />
              <span>My Application</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/offers"
            >
              <FaBook className="icons" />
              <span>My Offers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
            >
              <FaRegBookmark className="icons" />
              <span>My Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="logoutnav">
        <Buttons className="logoutbtn" >Logout</Buttons>
      </nav>
    </div>
  );
}

export default MobileNav;
