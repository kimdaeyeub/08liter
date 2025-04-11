import React from "react";
import GNB from "../components/Nav/GNB";
import { Outlet } from "react-router";
import Footer from "../components/footer/footer";
import LiterCard from "../pages/mypage/components/LiterCard";

const MyPageLayout = () => {
  return (
    <>
      <GNB />
      <div className="w-full md:mt-[140px] min-h-screen 2xl:px-64 xl:px-24 lg:px-20 md:px-14 sm:px-10 px-5 grid grid-cols-4 xl:gap-10 gap-5">
        <div className="flex flex-col w-full justify-start">
          <div className="flex flex-col w-full justify-center items-start">
            <span className="text-3xl font-bold">안녕하세요! 🙌🏻</span>
            <span className="text-lg font-medium">
              열심히 달린 나의 활동을 확인해보세요!
            </span>
          </div>
        </div>
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
