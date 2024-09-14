import React from "react";
import Footer from "../components/footer";
import LoggedInHeader from "../components/loggedInHeader";
import JobDisplay from "../components/jobDisplay";

function LoggedInPage() {
  return (
    <div className="app-wrapper">
      <LoggedInHeader />
      <JobDisplay />
      <Footer />
    </div>
  );
}

export default LoggedInPage;
