/**
 * 알림 카테고리 버튼.
 */
export default function NotificationCategoryButton({
  text,
  isSelected,
  onClick,
}) {
  return isSelected ? (
    <li
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer w-[61px] h-[34px] rounded-[100px] bg-[#458EF6]/10 border border-[#458EF6]"
    >
      <span className="font-bold text-sm text-[#458EF6]">{text}</span>
    </li>
  ) : (
    <li
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer w-[61px] h-[34px] rounded-[100px] border border-[#B5B5B5] bg-white"
    >
      <span className="block font-medium text-sm text-[#B5B5B5]">{text}</span>
    </li>
  );
}
