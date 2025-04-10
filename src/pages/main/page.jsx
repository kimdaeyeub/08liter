import { useEffect, useState, useRef } from "react";
import CategoryButton from "./components/CategoryButton";
import CampaignCard from "./components/CampaignCard";
import RollingBanner from "./components/RollingBanner";
import GNB from "../../components/Nav/GNB";
import { mainApi } from "../../api/mainApi";

/**
 * 메인 페이지.
 */
export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isCategorySticky, setIsCategorySticky] = useState(false);
  const [mainData, setMainData] = useState({
    menus: [],
    items: [],
  });
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCategorySticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const fetchMainData = async () => {
      const response = await mainApi.getMainData();
      setMainData(response);
    };

    fetchMainData();
  }, []);

  return (
    <main className="w-full md:mt-[78px] mt-8">
      {/* 상단 배너 (롤링) */}
      <RollingBanner />

      <div ref={observerRef} className="h-[1px] w-full" />

      {/* 카테고리 버튼 */}
      <div
        className={`sticky md:top-[68px] top-0 left-0 w-full z-[2] md:py-[14px] py-3 mb-4 transition-colors ${
          isCategorySticky ? "bg-[#1B1B1B]" : "bg-transparent"
        }`}
      >
        <div className="flex md:gap-[16px] gap-3 2xl:px-64 xl:px-24 lg:px-20 md:px-14 sm:px-10 px-5">
          {mainData.menus.map((menu, index) => (
            <CategoryButton
              key={index}
              text={menu.title}
              isCategorySticky={isCategorySticky}
              isSelected={selectedCategory === index}
              onClick={async () => {
                setSelectedCategory(index);
                // console.log(`menu.link: ${menu.link}`)
                const response = await mainApi.getMenuItems(menu.link);
                setMainData((prev) => ({ ...prev, items: response }));
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
