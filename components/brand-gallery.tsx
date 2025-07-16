"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const brands = [
  {
    name: "현대자동차",
    logo: "/로고-현대.webp",
    services: [
      {
        type: "출장 엔진오일",
        price: "68,000원~",
        originalPrice: "58,000원~",
        image: "/현대1.webp",
      },
      {
        type: "출장 배터리",
        price: "77,000원~",
        originalPrice: "67,000원~",
        image: "/현대2.webp",
      },
    ],
  },
  {
    name: "기아자동차",
    logo: "/로고-기아.webp",
    services: [
      {
        type: "출장 엔진오일",
        price: "67,900원~",
        originalPrice: "57,900원~",
        image: "/기아1.webp",
      },
      {
        type: "출장 배터리",
        price: "77,000원~",
        originalPrice: "67,000원~",
        image: "/기아2.webp",
      },
    ],
  },
  {
    name: "제네시스",
    logo: "/로고-제네시스.webp",
    services: [
      {
        type: "출장 엔진오일",
        price: "98,900원~",
        originalPrice: "88,900원~",
        image: "/제네시스1.webp",
      },
      {
        type: "출장 배터리",
        price: "192,000원~",
        originalPrice: "182,000원~",
        image: "/제네시스2.webp",
      },
    ],
  },
  {
    name: "르노삼성",
    logo: "/로고-르노삼성.webp",
    services: [
      {
        type: "출장 엔진오일",
        price: "69,900원~",
        originalPrice: "59,900원~",
        image: "/르노삼성1.webp",
      },
      {
        type: "출장 배터리",
        price: "99,000원~",
        originalPrice: "89,000원~",
        image: "/르노삼성2.webp",
      },
    ],
  },
  {
    name: "벤츠",
    logo: "/로고-벤츠.webp",
    services: [
      {
        type: "출장 엔진오일",
        price: "143,000원~",
        originalPrice: "133,000원~",
        image: "/벤츠1.webp",
      },
      {
        type: "출장 배터리",
        price: "142,000원~",
        originalPrice: "132,000원~",
        image: "/벤츠2.webp",
      },
    ],
  },
  {
    name: "BMW",
    logo: "/로고-bmw.webp",
    services: [
      {
        type: "출장 엔진오일",
        price: "155,600원~",
        originalPrice: "145,600원~",
        image: "/bmw1.webp",
      },
      {
        type: "출장 배터리",
        price: "142,000원~",
        originalPrice: "132,000원~",
        image: "/bmw2.webp",
      },
    ],
  },
  {
    name: "아우디",
    logo: "/로고-아우디.webp",
    services: [
      {
        type: "출장 엔진오일",
        price: "135,000원~",
        originalPrice: "125,000원~",
        image: "/아우디1.webp",
      },
      {
        type: "출장 배터리",
        price: "122,000원~",
        originalPrice: "112,000원~",
        image: "/아우디2.webp",
      },
    ],
  },
  {
    name: "렉서스",
    logo: "/로고-렉서스.webp",
    services: [
      {
        type: "출장 엔진오일",
        price: "125,000원~",
        originalPrice: "115,000원~",
        image: "/렉서스1.webp",
      },
      {
        type: "출장 배터리",
        price: "87,000원~",
        originalPrice: "77,000원~",
        image: "/렉서스2.webp",
      },
    ],
  },
]

export default function BrandGallery() {
  const handleKakaoContact = () => {
    window.location.href = "https://pf.kakao.com/_xfxaaAxb/chat"
  }

  const handlePhoneContact = () => {
    const phoneNumber = "1533-7476"
    window.location.href = `tel:${phoneNumber}`
  }

  // 모든 서비스 카드를 하나의 배열로 만들기 (브랜드 정보 포함)
  const allServices = brands.flatMap((brand) =>
    brand.services.map((service) => ({
      ...service,
      brandName: brand.name,
      brandLogo: brand.logo,
    })),
  )

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{"주요 브랜드 전용관"}</h2>
        </div>

        {/* 4개씩 그리드로 표시 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {allServices.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg?height=200&width=400"}
                    alt={`${service.brandName} ${service.type}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  {/* Brand Header */}
                  <div className="flex items-center space-x-2 mb-3">
                    <img
                      src={service.brandLogo || "/placeholder.svg"}
                      alt={service.brandName}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">{service.brandName}</span>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-3">{service.type}</h4>

                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900">{service.price}</div>
                    <div className="text-sm text-blue-600">
                      {"앱 구매시 "}
                      <span className="line-through text-gray-500">{service.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{"다른 브랜드의 출장 정비가 필요하신가요?"}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {"위에 없는 브랜드도 전문 정비사가 직접 방문하여 서비스를 제공합니다. 언제든지 문의해주세요."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleKakaoContact} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              {"카카오톡 문의"}
            </Button>
            <Button
              onClick={handlePhoneContact}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              {"전화 문의"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
