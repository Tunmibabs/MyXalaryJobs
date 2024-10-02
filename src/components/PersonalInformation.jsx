import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Infoheader from "./Infoheader";

function PersonalInformation() {
  return (
    <div className="Biodata">
      <Infoheader heading="Personal Information" />

      <figure className="profilePic">
        <img src="" alt="User" />

        <figcaption>
          <h4>Ronke Bosola</h4>
          <p>Product Designer</p>

          <span>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaXTwitter />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export default PersonalInformation;
