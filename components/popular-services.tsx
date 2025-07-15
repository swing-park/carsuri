import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: 1,
    title: "출장 엔진오일 예약",
    subtitle: "정품 엔진오일로 교체",
    tag: "국산차",
    price: "29,000원",
    originalPrice: "35,000원",
    discount: "17%",
    bgColor: "bg-blue-50",
    features: ["정품 오일 사용", "필터 교체 포함", "30분 내 완료"],
    rating: 4.9,
    reviews: 1234,
  },
  {
    id: 2,
    title: "출장 배터리 예약",
    subtitle: "고품질 배터리로 교체",
    tag: "수입차",
    price: "89,000원",
    originalPrice: "120,000원",
    discount: "26%",
    bgColor: "bg-gray-50",
    features: ["정품 배터리 사용", "무료 점검 포함", "1년 품질보증"],
    rating: 4.8,
    reviews: 892,
  },
  {
    id: 3,
    title: "종합 점검 서비스",
    subtitle: "전문가의 꼼꼼한 점검",
    tag: "전차종",
    price: "49,000원",
    originalPrice: "70,000원",
    discount: "30%",
    bgColor: "bg-green-50",
    features: ["50개 항목 점검", "점검 리포트 제공", "사후 상담"],
    rating: 4.9,
    reviews: 567,
  },
  {
    id: 4,
    title: "긴급 출동 서비스",
    subtitle: "24시간 긴급 출동",
    tag: "긴급",
    price: "15,000원",
    originalPrice: "25,000원",
    discount: "40%",
    bgColor: "bg-red-50",
    features: ["24시간 대기", "30분 내 출동", "현장 수리"],
    rating: 4.7,
    reviews: 2341,
  },
]

export default function PopularServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{"인기 서비스"}</h2>
          <p className="text-xl text-gray-600">{"고객들이 가장 많이 선택하는 서비스입니다"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border-0 shadow-lg"
            >
              <CardContent className="p-0">
                <div className="relative">
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-red-500 text-white font-bold px-2 py-1">
                      {service.discount} {"할인"}
                    </Badge>
                  </div>

                  {/* Service Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="secondary" className="bg-blue-600 text-white font-medium">
                      {service.tag}
                    </Badge>
                  </div>

                  {/* Image Box */}
                  <div className={`${service.bgColor} h-48 flex items-center justify-center overflow-hidden`}>
                    <img
                      src="/1.jpg"
                      alt={service.title}
                      className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>

                  {/* Features */}
                  <ul className="text-xs text-gray-500 mb-4 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium ml-1">{service.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({service.reviews.toLocaleString()})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{service.originalPrice}</span>
                    </div>
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
