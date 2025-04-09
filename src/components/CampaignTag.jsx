export default function CampaignTag({ text }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className={`inline-flex items-center justify-center bg-[#458EF6] rounded-[2px] ${
        isMobile ? "px-[12px] h-[27px]" : "px-[16px] h-[40px]"
      }`}
    >
      <span
        className={`text-white font-medium ${
          isMobile ? "text-[11px]" : "text-base"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
