import React from "react";
import CategoryMenu from "./CategoryMenu";

const categoryMenus = [
  {
    title: "나의 정보",
    items: [
      { name: "리터 내역", path: "/mypage/liter" },
      { name: "캠페인 내역", path: "/mypage/campaign" },
    ],
  },
  {
    title: "설정",
    items: [
      { name: "프로필 수정", path: "/mypage/profile/edit" },
      { name: "SNS 연동", path: "/mypage/sns" },
    ],
  },
  {
    title: "고객센터",
    items: [
      { name: "FAQ", path: "/mypage/faq" },
      { name: "1:1 문의", path: "/mypage/inquiry" },
    ],
  },
  {
    title: "약관 및 방침",
    items: [
      { name: "이용 약관", path: "/mypage/terms" },
      { name: "개인정보처리방침", path: "/mypage/privacy" },
    ],
  },
  {
    title: "관리",
    items: [{ name: "로그아웃", path: "/mypage/logout" }],
  },
];

const CategoryBar = () => {
  return (
    <div className="flex flex-col w-full justify-start gap-10">
      <div className="flex flex-col w-full justify-center items-start">
        <span className="text-3xl font-bold">안녕하세요! 🙌🏻</span>
        <span className="text-lg font-medium">
          열심히 달린 나의 활동을 확인해보세요!
        </span>
      </div>
      {categoryMenus.map((menu) => (
        <CategoryMenu title={menu.title} items={menu.items} />
      ))}
      <img src="/images/mypage_ads.png" alt="배너" />
    </div>
  );
};

export default CategoryBar;
