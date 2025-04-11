import React from "react";
import GNB from "../components/Nav/GNB";
import { Outlet } from "react-router";
import Footer from "../components/footer/footer";
import LiterCard from "../pages/mypage/components/LiterCard";
import CategoryBar from "../pages/mypage/components/CategoryBar";

const MyPageLayout = () => {
  return (
    <>
      <GNB />
      <div className="w-full md:mt-[140px] min-h-screen 2xl:px-72 xl:px-32 lg:px-20 md:px-14 sm:px-10 px-5 grid grid-cols-4 xl:gap-10 gap-5">
        <CategoryBar />
        <div className="col-span-3 flex flex-col justify-start items-center">
          <LiterCard />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPageLayout;
