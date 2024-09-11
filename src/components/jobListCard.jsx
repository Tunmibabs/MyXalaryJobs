import React from "react";
import Cardpp from "../assets/jobspp.png";
import mapPin from "../assets/map-pin.svg"

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
            <span><p><img src={mapPin}/>Lagos, Nigeria</p></span>
            <span><p>₦1,000,000.00</p></span>
        </div>
      </div>
    </section>
  );
}

export default JobListCard;
