import { useState } from "react";
import NotificationCategoryButton from "./NotificationCategoryButton";
import NotificationListRow from "./NotificationListRow";

/**
 * GNB 알림 팝업.
 */
export default function NotificationPopover({ dropdownRef, setIsOpen }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div
      ref={dropdownRef}
      className="absolute right-[61px] top-full mt-[20px] w-[420px] h-[680px] bg-white shadow-[0px_2px_20px_rgba(0,0,0,0.2)] rounded-[4px] z-[5]"
    >
      {/* 삼각형 화살표 */}
      <div className="absolute top-[-12px] right-[42px]">
        {/* 
      Tailwind로 삼각형을 생성:
      - 좌우 투명(border-l, border-r)
      - 아래쪽 색상(border-b)
      - 폭: 26px (좌우 각각 13px)
      - 높이: 16px 
    */}
        <div
          className="w-0 h-0
                    border-l-[13px] border-l-transparent
                    border-r-[13px] border-r-transparent
                    border-b-[16px] border-b-white"
        />
      </div>

      {/* 알림 상단 바 */}
      <div className="h-[59px] bg-white px-[24px] flex items-center justify-between">
        <h4 className="text-[#1B1B1B] font-bold text-lg">알림</h4>
        <img
          src="/icons/gnb_notification_close.svg"
          alt="닫기"
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="bg-[#F3F2F8] h-[621px] pt-[24px] px-[24px] overflow-y-auto overscroll-none">
        {/* 카테고리 버튼 */}
        <div className="flex gap-[10px] mb-[20px]">
          {["전체", "활동", "소식", "리터"].map((category, index) => (
            <NotificationCategoryButton
              key={index}
              text={category}
              isSelected={selectedCategory === index}
              onClick={() => setSelectedCategory(index)}
            />
          ))}
        </div>

        {/* 알림 목록 */}
        <div className="flex flex-col gap-[16px]">
          <NotificationListRow
            imageUrl="/icons/notification_avatar_default.svg"
            title="캠페인 활동"
            content="[헬스너] 리뷰 작성 만료일까지 4일 남았습니다."
            date="1일전"
          />
          <NotificationListRow
            imageUrl="/icons/notification_avatar_liter.svg"
            title="리터 적립"
            content="5,000L 적립되었습니다."
            date="1일전"
          />
          <NotificationListRow
            imageUrl="/icons/notification_avatar_default.svg"
            title="공지사항"
            content="2025년 2월 4쨋주 신규 캠페인 업데이트"
            date="1일전"
          />
          <NotificationListRow
            imageUrl="/icons/notification_avatar_liter.svg"
            title="리터 출금"
            content="10,000L 현금으로 인출되었습니다."
            date="6일전"
          />
          <NotificationListRow
            imageUrl="/icons/notification_avatar_default.svg"
            title="캠페인 활동"
            content="[헬스너] 리뷰 작성 만료일까지 4일 남았습니다."
            date="6일전"
          />
          <NotificationListRow
            imageUrl="/icons/notification_avatar_liter.svg"
            title="리터 적립"
            content="5,000L 적립되었습니다."
            date="10일전"
          />
        </div>

        {/* blank */}
        <div className="h-[30px]" />
      </div>
    </div>
  );
}
