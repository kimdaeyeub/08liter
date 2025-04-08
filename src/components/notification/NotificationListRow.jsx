/**
 * 알림 목록 항목.
 */
export default function NotificationListRow({
  imageUrl,
  title,
  content,
  date,
}) {
  return (
    <div className="w-full bg-white rounded-[4px] p-[16px] flex gap-[10px]">
      <img src={imageUrl} className="w-[40px] h-[40px]" />
      <div className="flex flex-col gap-[6px]">
        <strong className="font-bold text-sm text-[#1B1B1B]">{title}</strong>
        <span className="font-medium text-sm text-[#1B1B1B]">{content}</span>
        <span className="font-medium text-sm text-[#B5B5B5]">{date}</span>
      </div>
    </div>
  );
}
