import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
      style={{
        backgroundImage: "url('/hero-banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">{"공카 CARE"}</h1>
          <div className="text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed">
            <p className="mb-2">{"공카 파트너스의 모든 MRO는 여기서,"}</p>
            <p>
              <span className="text-blue-600 font-bold">{"차번호와 주소만 입력"}</span>
              <span className="font-bold">{"하면 예약 완료"}</span>
            </p>
          </div>

          {/* 예약 폼 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">차량번호</label>
                <input
                  type="text"
                  placeholder="예) 12가 3456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">서비스 선택</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>출장 엔진오일 교체</option>
                  <option>출장 배터리 교체</option>
                  <option>종합 점검</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">주소</label>
              <input
                type="text"
                placeholder="서비스 받을 주소를 입력해주세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
              {"예약하기"}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 bg-transparent"
            >
              {"서비스 안내"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-400 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-3 bg-transparent"
            >
              {"이용 후기"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
