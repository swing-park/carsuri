import { Card, CardContent } from "@/components/ui/card"

const newsItems = [
  {
    title: "신규 서비스 런칭 안내",
    description: "더욱 향상된 차량 관리 서비스를 만나보세요.",
    date: "2024.01.15",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "겨울철 차량 관리 팁",
    description: "추운 겨울, 차량을 안전하게 관리하는 방법을 알려드립니다.",
    date: "2024.01.10",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "정기 점검의 중요성",
    description: "정기적인 차량 점검으로 큰 사고를 예방하세요.",
    date: "2024.01.05",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "고객 만족도 조사 결과",
    description: "고객님들의 소중한 의견을 바탕으로 서비스를 개선합니다.",
    date: "2024.01.01",
    image: "/placeholder.svg?height=150&width=200",
  },
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">최신 소식</h2>
          <p className="text-gray-600">카서리의 새로운 소식을 확인하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-32 h-24 bg-gray-200 rounded-l-lg flex-shrink-0"></div>
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
