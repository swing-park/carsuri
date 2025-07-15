export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">{"공카 CARE"}</div>
            <p className="text-gray-400 mb-4">{"전문적인 출장 정비 서비스로 고객의 편의와 안전을 제공합니다."}</p>
            <div className="text-sm text-gray-500">
              <p>{"사업자등록번호: 123-45-67890"}</p>
              <p>{"대표: 홍길동"}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{"서비스"}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  {"출장 엔진오일 교체"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {"출장 배터리 교체"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {"종합 점검 서비스"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {"긴급 출동 서비스"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{"고객센터"}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  {"공지사항"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {"자주 묻는 질문"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {"1:1 문의"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {"이용약관"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{"연락처"}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{"전화: 1588-1234"}</li>
              <li>{"이메일: info@gongka.co.kr"}</li>
              <li>{"주소: 서울시 강남구 테헤란로 123"}</li>
              <li>{"운영시간: 09:00 - 18:00"}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{"© 2024 공카 CARE. All rights reserved."}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              {"개인정보처리방침"}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              {"서비스 이용약관"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
