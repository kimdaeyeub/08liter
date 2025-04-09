import { useEffect, useState } from "react";
import CategoryButton from "./components/CategoryButton";
import CampaignCard from "./components/CampaignCard";
import RollingBanner from "./components/RollingBanner";
import GNB from "../../components/Nav/GNB";

const testMainData = {
  menus: [
    { title: "전체", link: "/all" },
    { title: "모금중", link: "/ongoing" },
    { title: "종료된", link: "/ended" },
    { title: "공개예정", link: "/upcoming" },
  ],
  items: [
    {
      id: 1,
      name: "[리뷰] 첫 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "50,000원",
      displaySellingPrice: "30,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 2,
      name: "[리뷰] 두 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "70,000원",
      displaySellingPrice: "45,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 3,
      name: "[리뷰] 세 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "100,000원",
      displaySellingPrice: "65,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 4,
      name: "[리뷰] 네 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "80,000원",
      displaySellingPrice: "55,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 5,
      name: "[리뷰] 다섯 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "120,000원",
      displaySellingPrice: "85,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 6,
      name: "[리뷰] 여섯 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "60,000원",
      displaySellingPrice: "40,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 7,
      name: "[리뷰] 일곱 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "90,000원",
      displaySellingPrice: "60,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 8,
      name: "[리뷰] 여덟 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "150,000원",
      displaySellingPrice: "95,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 9,
      name: "[리뷰] 아홉 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "110,000원",
      displaySellingPrice: "75,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 10,
      name: "[리뷰] 열 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "130,000원",
      displaySellingPrice: "88,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 11,
      name: "[리뷰] 열한 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "75,000원",
      displaySellingPrice: "50,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 12,
      name: "[리뷰] 열두 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "95,000원",
      displaySellingPrice: "65,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 13,
      name: "[리뷰] 열세 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "140,000원",
      displaySellingPrice: "92,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 14,
      name: "[리뷰] 열네 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "85,000원",
      displaySellingPrice: "58,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
    {
      id: 15,
      name: "[리뷰] 열다섯 번째 테스트 캠페인입니다.",
      campaignType: "A",
      displayOriginPrice: "160,000원",
      displaySellingPrice: "105,000원",
      thumbnailUrl: "https://picsum.photos/",
    },
  ],
};

/**
 * 메인 페이지.
 */
export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isCategorySticky, setIsCategorySticky] = useState(false);
  const [mainData, setMainData] = useState(testMainData);
  // const [mainData, setMainData] = useState({
  //   menus: [],
  //   items: [],
  // });

  useEffect(() => {
    const handleScroll = () => {
      setIsCategorySticky(window.scrollY > 238);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const fetchMainData = async () => {
  //     const response = await mainApi.getMainData();
  //     setMainData(response);
  //   };

  //   fetchMainData();
  // }, []);

  return (
    <main className="w-full md:mt-[78px] mt-8">
      {/* 상단 배너 (롤링) */}

      <RollingBanner />

      {/* 카테고리 버튼 */}
      <div
        className={`sticky md:top-[68px] top-0 left-0 w-full z-[2] py-[14px] mb-4 transition-colors ${
          isCategorySticky ? "bg-[#1B1B1B]" : "bg-transparent"
        }`}
      >
        <div className="flex gap-[16px] md:mt-10 2xl:px-64 xl:px-24 lg:px-20 md:px-14 sm:px-10 px-5">
          {mainData.menus.map((menu, index) => (
            <CategoryButton
              key={index}
              text={menu.title}
              isCategorySticky={isCategorySticky}
              isSelected={selectedCategory === index}
              onClick={async () => {
                // setSelectedCategory(index);
                // // console.log(`menu.link: ${menu.link}`)
                // const response = await mainApi.getMenuItems(menu.link);
                // setMainData((prev) => ({ ...prev, items: response }));
              }}
            />
          ))}
        </div>
      </div>

      {/* 캠페인 그리드 */}
      {/* <div className="h-[400vh]"></div> */}
      <div className="w-full mt-16 grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:px-64 xl:px-24 lg:px-20 md:px-14 sm:px-10 px-5 xl:gap-8 gap-3 mb-[100px]">
        {mainData.items.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </div>
    </main>
  );
}
