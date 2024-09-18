import React from "react";
import Footer from "../components/footer";
import LoggedInHeader from "../components/loggedInHeader";
import JobDisplay from "../components/jobDisplay";
import TitleSearch from "../components/titleSearch";

function LoggedInPage() {
  return (
    <div className="app-wrapper">
      <LoggedInHeader />
      <TitleSearch />
      <JobDisplay />
      <Footer />
    </div>
  );
}

export default LoggedInPage;
