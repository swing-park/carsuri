import { Card, CardContent } from "@/components/ui/card"

const cars = [
  { name: "BMW 3시리즈", price: "66,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "아우디 A4", price: "72,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "벤츠 C클래스", price: "78,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "제네시스 G70", price: "65,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "렉서스 ES", price: "85,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "포르쉐 911", price: "195,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "람보르기니", price: "350,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "페라리 488", price: "420,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "맥라렌 720S", price: "380,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "벤틀리 컨티넨탈", price: "280,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "롤스로이스 고스트", price: "450,000원", image: "/placeholder.svg?height=200&width=300" },
  { name: "아스톤마틴 DB11", price: "320,000원", image: "/placeholder.svg?height=200&width=300" },
]

export default function CarGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">차량 갤러리</h2>
          <p className="text-gray-600">다양한 차량들을 만나보세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-blue-600 font-bold">{car.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
