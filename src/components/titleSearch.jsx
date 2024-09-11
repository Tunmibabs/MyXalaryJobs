import React from "react";
import Buttons from "./buttons";

function TitleSearch() {
  return (
    <nav className="searchFilter">
      <div className="filters">
        <select name="" id="numberDropdown">
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>

        <select name="" id="">
          <option value="">All</option>
          <option value="">Recent</option>
        </select>

        <input placeholder="Job Role" id="roleDropdown"/>

        <select name="" id="timeDropdown">
          <option value="">Past 24 hours</option>
          <option>Past Week</option>
          <option>Past Month</option>
          <option>Anytime</option>
        </select>
      </div>

      <div className="filter-btn">
        <Buttons className="filter-jobs">Filter Jobs</Buttons>
        <Buttons className="reset-filter">Reset Filter</Buttons>
      </div>
    </nav>
  );
}

export default TitleSearch;
