import React from "react";
import Buttons from "./buttons";
import ProfileImg from "../assets/Status.png";
import {
  FaRegBookmark,
  FaBook,
  FaRegClock,
  FaRegCheckCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function LoggedInNvabar() {
  return (
    <div className="loggedInNav">
      <nav className="loggedinLinks">
        <ul className="navRight">
          <li id="a">
            <NavLink
              to="/logged"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <FaRegCheckCircle />
              Jobs
            </NavLink>
          </li>

          <li id="b">
            <NavLink
              to="/appliedJobs"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <FaRegClock />
              My Application
            </NavLink>
          </li>

          <li id="c">
            <NavLink
              to="/offers"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <FaBook />
              My Offers
            </NavLink>
          </li>

          <li id="d">
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <FaRegBookmark />
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="navLeft">
        <Buttons className="profileBtn">Profile Score:0%</Buttons>
        <Buttons className="completePBtn">Complete your Profile</Buttons>
        {/* <Buttons className="appProfileBtn">Profile Score:100%</Buttons> */}
        <figure>
          <figcaption>Jane Jes</figcaption>
          <img src={ProfileImg} alt="" className="figImg" />
        </figure>
      </nav>
    </div>
  );
}

export default LoggedInNvabar;
