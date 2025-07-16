export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">{"공카 CARE"}</div>
            <p className="text-gray-400 mb-4">{"전문적인 출장 정비 서비스로 고객의 편의와 안전을 제공합니다."}</p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>{"사업자등록번호: 698-87-01826"}</p>
              <p>{"대표: 황기연"}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{"연락처"}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{"전화: 1533-7476"}</li>
              <li>{"이메일: info@gongcarcare.com"}</li>
              <li>{"주소: 경기도 성남시 분당구 대왕판교로 950번길24"}</li>
              <li>{"운영시간: 10:00~19:00"}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{"© 2025 공카 CARE. All rights reserved."}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://gongcar.notion.site/619c1685f2184ef18b563409a53d9f71"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              {"개인정보처리방침"}
            </a>
            <a
              href="https://gongcar.notion.site/090ba8274cb44876af12f729551dafcd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              {"서비스 이용약관"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
