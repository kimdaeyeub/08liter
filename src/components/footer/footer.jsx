export default function Footer() {
  return (
    <div className="w-screen px-10 fixed bottom-0 border-t border-[#CCCCCC] flex py-[38px]">
      {/* 공팔리터 로고 */}
      <img src="/icons/footer_logo.svg" alt="로고" />

      <div className="ml-[40px] flex flex-col gap-[20px]">
        {/* 푸터 메뉴 */}
        <ul className="flex gap-[34px]">
          <li className="font-medium text-sm">비전</li>
          <li className="font-medium text-sm">이용약관</li>
          <li className="font-medium text-sm">판매 이용약관</li>
          <li className="font-medium text-sm">개인정보처리방침</li>
          <li className="font-medium text-sm">판매자센터</li>
          <li className="font-medium text-sm">광고/입점문의</li>
          <li className="font-medium text-sm">앱 다운로드</li>
        </ul>

        {/* 하단 정보 영역 */}
        <div>
          <strong className="mr-[10px] font-bold text-sm text-[#AAABAF]">
            회사명
          </strong>
          <span className="font-medium text-sm text-[#AAABAF]">
            주식회사 공팔리터글로벌
          </span>
          <span className="px-[10px] text-[#AAABAF]">|</span>

          <strong className="mr-[10px] font-bold text-sm text-[#AAABAF]">
            대표자
          </strong>
          <span className="font-medium text-sm text-[#AAABAF]">최창우</span>
          <span className="px-[10px] text-[#AAABAF]">|</span>

          <strong className="mr-[10px] font-bold text-sm text-[#AAABAF]">
            CS문의
          </strong>
          <span
            onClick={() => {
              window.open("https://pf.kakao.com/_ssRfxl", "_blank");
            }}
            className="font-medium text-sm text-[#AAABAF] cursor-pointer"
          >
            https://pf.kakao.com/_ssRfxl
          </span>
          <span className="px-[10px] text-[#AAABAF]">|</span>

          <strong className="mr-[10px] font-bold text-sm text-[#AAABAF]">
            브랜드 광고문의
          </strong>
          <span
            onClick={() => {
              window.open("https://pf.kakao.com/_XxcDhxl/chat", "_blank");
            }}
            className="font-medium text-sm text-[#AAABAF] cursor-pointer"
          >
            https://pf.kakao.com/_XxcDhxl/chat
          </span>
          <br />

          <strong className="mr-[10px] font-bold text-sm text-[#AAABAF]">
            통신판매 신고번호
          </strong>
          <span className="font-medium text-sm text-[#AAABAF]">
            2024-서울성동-0129호
          </span>
          <span className="px-[10px] text-[#AAABAF]">|</span>

          <strong className="mr-[10px] font-bold text-sm text-[#AAABAF]">
            개인 정보 보호 책임자
          </strong>
          <span className="font-medium text-sm text-[#AAABAF]">박종호</span>
        </div>
      </div>

      {/* SNS 버튼 */}
      <div className="ml-auto flex gap-[14px]">
        <div className="w-4 h-4">
          <img src="/icons/footer_instagram.svg" alt="인스타그램" />
        </div>
        <div className="w-4 h-4">
          <img src="/icons/footer_facebook.svg" alt="페이스북" />
        </div>
      </div>
    </div>
  );
}
