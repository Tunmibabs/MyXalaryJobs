import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import JobDisplay from "../components/jobDisplay";
import TitleSearch from "../components/titleSearch";

function MainLayout() {
  return (
    <div className="app-wrapper">
      <Header />
      <TitleSearch />
      <JobDisplay />
      <Footer />
    </div>
  );
}

export default MainLayout;
