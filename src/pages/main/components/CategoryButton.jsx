/**
 * 카테고리 버튼.
 * 반응형으로 구현된 카테고리 버튼 컴포넌트입니다.
 */
export default function CategoryButton({
  text,
  isCategorySticky,
  isSelected,
  onClick,
}) {
  return isSelected ? (
    <li
      onClick={onClick}
      className={`inline-flex items-center justify-center cursor-pointer rounded-[100px] duration-500 
        h-[32px] md:h-[40px]
        ${
          isCategorySticky
            ? "border border-white bg-[rgba(255,255,255,0.1)]"
            : "bg-[#1B1B1B]"
        }`}
    >
      <span className="px-[14px] md:px-[22px] font-medium md:font-bold text-white text-[12px] md:text-base">
        {text}
      </span>
    </li>
  ) : (
    <li
      onClick={onClick}
      className="inline-flex items-center justify-center cursor-pointer rounded-[100px] border border-[#B5B5B5]
        h-[32px] md:h-[40px]"
    >
      <span className="px-[14px] md:px-[22px] font-medium text-[#B5B5B5] text-[12px] md:text-base">
        {text}
      </span>
    </li>
  );
}
