import React from "react";
import TitleSearch from "./titleSearch";
import Sidebar from "./sidebar";
import AppliedJobCard from "./appliedJobCard";

function AppliedJobDisplay() {
  return (
    <section className="jobDisplay">
      <TitleSearch />

      <div className="displayJobs">
        <Sidebar />
        <AppliedJobCard />
      </div>
    </section>
  );
}

export default AppliedJobDisplay;
