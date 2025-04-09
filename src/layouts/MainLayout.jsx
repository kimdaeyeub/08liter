import React from "react";
import { Outlet } from "react-router";
import GNB from "../components/Nav/GNB";
import Footer from "../components/footer/footer";

const MainLayout = () => {
  return (
    <div>
      <GNB />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
