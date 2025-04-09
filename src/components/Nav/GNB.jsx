import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import NotificationPopover from "../notification/NotificationPopover";

/**
 * 상단 네비게이션 바. (Global Navigation Bar)
 */
export default function GNB() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // 알림창 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav className="w-full fixed hidden 2xl:px-64 xl:px-24 lg:px-20 md:px-14 top-0 z-10 h-[68px] bg-[#1A1B1F] md:flex justify-between items-center">
        {/* 공팔리터 로고 */}
        <Link to={"/"}>
          <img
            src="/icons/gnb_logo.svg"
            alt="로고"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex items-center gap-[14px] relative">
          {/* [TEST] 마이페이지 이동  */}
          {/* <div
              onClick={() => navigate('/mypage/liter')}
              className="font-medium text-sm text-[#458EF6] cursor-pointer"
            >
              마이페이지로 이동
            </div> */}

          {/* 알림 버튼*/}
          <img
            src="/icons/gnb_notification.svg"
            alt="알림"
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          {/* 알림 팝업창 */}
          {isOpen && (
            <NotificationPopover
              dropdownRef={dropdownRef}
              setIsOpen={setIsOpen}
            />
          )}

          {/* 로그인 버튼 & 프로필 이미지 */}
          {false ? (
            <img
              src="/icons/gnb_profile.svg"
              className="cursor-pointer"
              onClick={() => navigate("/mypage/liter")}
            />
          ) : (
            <Link
              to={"/signin"}
              className="bg-white w-[81px] h-[38px] flex justify-center items-center rounded-[100px] cursor-pointer"
            >
              <span className="text-[#1B1B1B] font-medium text-sm">로그인</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
