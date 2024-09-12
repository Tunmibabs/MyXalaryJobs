import React from "react";
import Cardpp from "../assets/jobspp.png";
import mapPin from "../assets/map-pin.svg"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function JobListCard() {
  return (
    <section className="jobList">
      <div className="cardpp">
        <img src={Cardpp}/>
      </div>

      <div className="jobInfo">
        <h3>Senior Product Designer</h3>
        <p>ATB TECH</p>

        <div className="jobloc">
            <span>
              <FontAwesomeIcon icon={faLocationDot} id="locIcon"/>
              Lagos, Nigeria</span>
            <span>₦1,000,000.00</span>
        </div>
      </div>
    </section>
  );
}

export default JobListCard;
