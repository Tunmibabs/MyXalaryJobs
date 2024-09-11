import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import TitleSearch from "../components/titleSearch";

function MainLayout() {
  return (
    <div className="app-wrapper">
      <Header />
      <TitleSearch />
      <Footer />
    </div>
  );
}

export default MainLayout;
