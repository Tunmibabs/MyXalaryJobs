import React from "react";
import ListDescription from "./ListDescription";
import {
  aboutCompany,
  responsibilities,
  jobTitle,
  qualifications,
  mustHaves,
  benefits,
} from "./JobDetails";
import { FaNairaSign } from "react-icons/fa6";

function JobCardDescription() {
  return (
    <div className="description">
      <div className="top">
        <h5>Product Designer Job Description</h5>

        <h4>Job Overview</h4>
        <span>
          ATB Techsoft Solutions Limited, a leading firm in Information
          Technology industry in the metro area. We're pleased to have a 4.0
          Glassdoor rating. We are looking to hire an experienced Product
          Designer to help us keep growing. If you're hard-working and
          dedicated, ATB Techsoft Solutions Limited, is an ideal place to get
          ahead. Apply today!
        </span>
      </div>

      <ListDescription heading={`Responsibilities for ${jobTitle}`} items={responsibilities}/>

      <ListDescription heading={`Qualifications for ${jobTitle}`} items={qualifications}/>

      <ListDescription heading="Must Haves" items={mustHaves}/>

      <ListDescription heading="Benefits of Working With Us" items={benefits}/>

      <h4 className="others">Required Education Level:<span> Graduate</span></h4>
      <h4 className="others">Experience Level:<span> Professional</span></h4>
      <h4 className="others">Job Type:<span> Remote</span></h4>
      <h4 className="others">Location:<span> Lagos, NGA</span></h4>
      <h4 className="others">Salary:<span> <FaNairaSign />450,000 - <FaNairaSign />890,000</span></h4>
    </div>
  );
}

export default JobCardDescription;
