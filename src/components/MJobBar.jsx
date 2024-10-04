import React from "react";
import Cardpp from "../assets/jobspp.png";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function MJobBar() {
  return (
    <div className="mobile">
      <section className="jobList">
        <ul>
          <li>
            {Array.from({ length: 10 }, (job, index) => (
              <NavLink
                key={index}
                to={`/jobs/${index}`}
              >
                <div className="cardpp">
                  <img src={Cardpp} />
                </div>

                <div className="jobInfo">
                  <h3>Senior Product Designer</h3>
                  <p>ATB TECH</p>

                  <div className="jobloc">
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} id="locIcon" />
                      Lagos, Nigeria
                    </span>
                    <span>₦1,000,000.00</span>
                  </div>
                </div>
              </NavLink>
            ))}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MJobBar;
