import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import JobDisplay from "../components/jobDisplay";

function MainLayout() {
  return (
    <div className="app-wrapper">
      <Header />
      <JobDisplay />
      <Footer />
    </div>
  );
}

export default MainLayout;
