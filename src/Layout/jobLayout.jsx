import React from "react";
import { Outlet } from "react-router-dom";
import TitleSearch from "../components/titleSearch";
import JobDisplay from "../components/jobDisplay";

function JobLayout() {
  return <div>
    <TitleSearch />
    <Outlet />
  </div>;
}

export default JobLayout;
