import React from "react";

const LiterCard = () => {
  return (
    <div className="w-full py-5 bg-skyblue grid grid-cols-3 divide-x divide-[#cccccc80] text-white">
      <div className="px-14 flex flex-col w-full justify-center items-start gap-2">
        <span className="text-xl font-medium">누적 리터</span>
        <span className="text-4xl font-bold">2,300,000</span>
      </div>
      <div className="px-14 flex flex-col w-full justify-center items-start gap-2">
        <span className="text-xl font-medium">보유 리터</span>
        <span className="text-4xl font-bold">300,000</span>
      </div>
      <div className="h-full flex flex-col justify-end w-full text-skyblue items-end pl-14 px-7">
        <button className="bg-white py-2 px-4 rounded-full flex items-center justify-center gap-2">
          <span className="font-semibold text-lg">현금 전환하기</span>
          <svg
            data-slot="icon"
            fill="none"
            strokeWidth="3.0"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LiterCard;
