import React from "react";
import Buttons from "./buttons";
import ProfileImg from "../assets/Status.png";
import { FaRegBookmark, FaBook, FaRegClock, FaRegCheckCircle } from "react-icons/fa";

function LoggedInNvabar() {
  return (
    <div className="loggedInNav">
      <nav className="loggedinLinks">
        <ul className="navRight">
          <li id="a">
            <FaRegCheckCircle />
            Jobs</li>
          <li id="b">
            <FaRegClock />
            My Application
          </li>
          <li id="c">
            <FaBook />
            My Offers</li>
          <li id="d">
            <FaRegBookmark />
            My Profile</li>
        </ul>
      </nav>
      <nav className="navLeft">
        <Buttons className="profileBtn">Profile Score:0%</Buttons>
        <Buttons className="completePBtn">Complete your Profile</Buttons>

        <figure>
          <figcaption>Jane Jes</figcaption>
          <img src={ProfileImg} alt="" className="figImg" />
        </figure>
      </nav>
    </div>
  );
}

export default LoggedInNvabar;
