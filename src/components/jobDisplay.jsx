import React from "react";
import TitleSearch from "./titleSearch";
import Sidebar from "./sidebar";
import JobCard from "./jobCard";
import MJobBar from "./MJobBar";

function JobDisplay() {
  return (
    <section className="jobDisplay">
      <div className="displayJobs">
        <MJobBar />
        <Sidebar />
        <JobCard />
      </div>
    </section>
  );
}

export default JobDisplay;
