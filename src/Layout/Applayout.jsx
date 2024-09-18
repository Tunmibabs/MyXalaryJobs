import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div className="app-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
