import { useState } from "react";
import { useNavigate } from "react-router";
import CampaignTag from "../../../components/CampaignTag";

/**
 * 캠페인 카드.
 */
export default function CampaignCard({
  // live,
  // liveType,
  // mission,
  // payback,
  // forGongu,
  id,
  name,
  campaignType,
  displayOriginPrice,
  displaySellingPrice,
  thumbnailUrl,
}) {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  const isApplied = false;

  /**
   * 캠페인 이름 파싱. (태그 + 캠페인 설명)
   */
  function parseCampaignName(name) {
    const match = name.match(/^(.*?)]\s*(.*)$/);
    return match
      ? { tag: match[1] + "]", content: match[2] }
      : { tag: "", content: name };
  }

  const { tag, content } = parseCampaignName(name);

  return (
    <div
      className={`w-full aspect-square relative overflow-hidden cursor-pointer`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      {/* 배경 이미지 */}
      <img
        src={`${thumbnailUrl}320`}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          // 불러오기에 실패하면 e.currentTarget.src 를 임의의 테스트 이미지 경로로 교체
          e.currentTarget.src = "/images/campaign_temp.png";
        }}
      />

      <div className="absolute top-[16px] left-[16px] flex gap-[10px]">
        {/* 캠페인 태그 */}
        <CampaignTag text={campaignType == "A" ? "미션 캠페인" : ""} />

        {/* 적립 리터 */}
        {/* {rewardLiter && <RewardLiter liter={rewardLiter} />} */}
      </div>

      {/* Hover 시 어두운 오버레이 & 버튼 */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        {isApplied ? (
          <button className="cursor-pointer flex items-center justify-center bg-white rounded-[4px] w-[280px] h-[60px]">
            <span className="font-bold text-lg text-[#1B1B1B] flex gap-[6px]">
              캠페인 신청 완료 <img src="/icons/campaign_check.svg" />
            </span>
          </button>
        ) : (
          <button className="cursor-pointer flex items-center justify-center border border-white rounded-[4px] w-full aspect-square">
            <span className="font-bold text-lg text-white">
              캠페인 신청 하기
            </span>
          </button>
        )}
      </div>

      {/* 하단 텍스트 영역 */}
      <div className="absolute bottom-0 left-0 p-[28px] flex justify-between w-full bg-gradient-to-t from-[#222222]">
        <div className="flex flex-col justify-end">
          <span className="font-bold text-white text-lg mb-[10px]">{tag}</span>
          <span className="font-medium text-white text-sm">{content}</span>
        </div>
        <div className="flex flex-col items-end justify-end">
          <span className="font-medium text-lg text-white line-through opacity-50">
            {/* ₩{new Intl.NumberFormat('ko-KR').format(reviewPrice)} */}
            {displayOriginPrice}
          </span>
          <span className="font-bold text-end 2xl:text-[22px] xl:text-[16px] text-[18px] text-white">
            리뷰가{" "}
            <span className="whitespace-nowrap">{displaySellingPrice}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
