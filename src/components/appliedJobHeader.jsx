import React from "react";
import Buttons from "./buttons";

function AppliedJobHeader() {
  return (
    <div>
      <div className="jobCardHeader">
        <div className="jobCardTitle">
          <h2>Senior Product Designer</h2>

          <Buttons className='applied-btn'>Applied</Buttons>
        </div>

        <div className="cardText">
          <h4>LAGOS, NGA / ATB TECH / INFORMATION TECHNOLOGY</h4>

          <h6>Date Posted: 20/07/2021</h6>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobHeader;
