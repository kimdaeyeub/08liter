import React from "react";
import { Outlet } from "react-router";
import GNB from "../components/Nav/GNB";

const MainLayout = () => {
  return (
    <div>
      <GNB />
      <Outlet />
    </div>
  );
};

export default MainLayout;
