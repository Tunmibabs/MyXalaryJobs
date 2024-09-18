import React from "react";
import Buttons from "./buttons";
import { useLocation } from "react-router-dom";

function JobCardHeader() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="jobCardHeader">
      <div className="jobCardTitle">
        <h2>Senior Product Designer</h2>

        {location.pathname === "/" && (
          <Buttons className="apply-btn">Appply</Buttons>
        )}
        {location.pathname === "/logged" && (
          <Buttons className="apply-btn">Appply</Buttons>
        )}
        {location.pathname === "/appliedJobs" && (
          <Buttons className="applied-btn">Applied</Buttons>
        )}
        {location.pathname === "/jobOffers" && (
          <Buttons className="interview-btn">Invited For Interview</Buttons>
        )}
      </div>

      <div className="cardText">
        <h4>LAGOS, NGA / ATB TECH / INFORMATION TECHNOLOGY</h4>

        <h6>Date Posted: 20/07/2021</h6>
      </div>
    </div>
  );
}

export default JobCardHeader;
