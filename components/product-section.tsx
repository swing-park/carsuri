import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "기본 관리 패키지",
    price: "25,000원",
    originalPrice: "30,000원",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "프리미엄 케어",
    price: "45,000원",
    originalPrice: "55,000원",
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "종합 점검 서비스",
    price: "35,000원",
    originalPrice: "42,000원",
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "긴급 출동 서비스",
    price: "15,000원",
    originalPrice: "20,000원",
    rating: 4.6,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ProductSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">인기 서비스</h2>
          <p className="text-gray-600">고객들이 가장 많이 선택하는 서비스입니다</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gray-100 rounded-t-lg"></div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">예약하기</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
