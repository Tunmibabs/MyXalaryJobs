import React from "react";
import TitleSearch from "./titleSearch";
import Sidebar from "./sidebar";
import JobCard from "./jobCard";

function JobDisplay() {
  return (
    <section className="jobDisplay">
      <TitleSearch />

      <div className="displayJobs">
        <Sidebar />
        <JobCard />
      </div>
    </section>
  );
}

export default JobDisplay;
