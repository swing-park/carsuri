import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const brands = [
  { name: "현대 자동차", services: ["엔진오일", "배터리"], logo: "H" },
  { name: "기아 자동차", services: ["엔진오일", "배터리"], logo: "KIA" },
  { name: "제네시스", services: ["엔진오일", "배터리"], logo: "G" },
  { name: "르노삼성", services: ["엔진오일", "배터리"], logo: "RS" },
  { name: "벤츠", services: ["엔진오일", "배터리"], logo: "MB" },
  { name: "BMW", services: ["엔진오일", "배터리"], logo: "BMW" },
  { name: "아우디", services: ["엔진오일", "배터리"], logo: "AUDI" },
  { name: "렉서스", services: ["엔진오일", "배터리"], logo: "L" },
]

export default function BrandGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{"주요 브랜드 전용관"}</h2>
          <p className="text-xl text-gray-600">{"브랜드별 전문 서비스를 제공합니다"}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-md"
            >
              <CardContent className="p-6 text-center">
                {/* Brand Logo */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-blue-600 font-bold text-sm">{brand.logo}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{brand.name}</h3>
                <div className="space-y-1">
                  {brand.services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">
                        {"출장 "}
                        {service}
                      </span>
                    </div>
                  ))}
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
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">{"카카오톡 문의"}</Button>
            <Button
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
