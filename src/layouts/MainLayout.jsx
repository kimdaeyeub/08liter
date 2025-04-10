import React from "react";
import { Outlet } from "react-router";
import GNB from "../components/Nav/GNB";
import Footer from "../components/footer/footer";

const MainLayout = () => {
  return (
    <div>
      <GNB />
      <div className="w-full md:mt-[68px] min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
