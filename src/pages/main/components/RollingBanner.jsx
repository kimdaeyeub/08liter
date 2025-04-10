import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 커스텀 dots 스타일.
import "../styles/slick.css";
import { Link } from "react-router";

/**
 * 롤링 배너.
 */
export default function RollingBanner() {
  const settings = {
    dots: true, // 하단 점 네비게이션
    infinite: true, // 무한 롤링
    speed: 500, // 넘김 속도 (ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘길 슬라이드 개수
    autoplay: true, // 자동 재생
    autoplaySpeed: 5000, // 자동 재생 간격 (ms)
    pauseOnHover: true, // 마우스 올리면 자동 재생 일시정지
  };

  return (
    <div className="w-full 2xl:px-64 xl:px-24 lg:px-20 md:px-14 sm:px-10 px-5 md:py-8">
      <Slider {...settings}>
        {[
          {
            title: "리뷰를 쓰고, 리워드를 받아보세요! 💰",
            description:
              "캠페인에 참여하고 리뷰를 작성해서, 현금 리워드를 받아보세요!",
            link: "/mypage/review/submit",
          },
          {
            title: "신규 회원은 3,000원을 바로 적립해드립니다!",
            description: "SNS 연동까지 완료하면 즉시 적립금 지급!",
            link: "/signup",
          },
          {
            title: "친구에게 추천하고 10,000원 받기!",
            description: "친구에게 공팔리터를 소개하면, 리워드 적립!",
            link: "/",
          },
          /*{
            title: "캠페인 타입별 수익 보기! how to us",
            description:
              "리뷰만으로 수익 창출! 어떤 캠페인이 나에게 맞을지, 확인해보세요!",
            link: "",
          },*/
        ].map((item, index) => (
          <Link to={item.link} key={index} className="w-full">
            <h3 className="block font-bold text-[26px] md:text-[38px] mt-4 md:mt-0 text-[#1B1B1B] break-keep">
              {item.title}
            </h3>
            <span className="block font-medium text-[12px] md:text-[24px] text-[#1B1B1B]">
              {item.description}
            </span>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
