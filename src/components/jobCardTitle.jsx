import React from "react";
import Buttons from "./buttons";

function JobCardHeader() {
  return (
    <div className="jobCardHeader">
      <div className="jobCardTitle">
        <h2>Senior Product Designer</h2>

        <Buttons className="apply-btn">Appply</Buttons>
      </div>

      <div className="cardText">
        <h4>LAGOS, NGA / ATB TECH / INFORMATION TECHNOLOGY</h4>

        <h6>Date Posted: 20/07/2021</h6>
      </div>
    </div>
  );
}

export default JobCardHeader;
