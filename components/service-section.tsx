import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "차량 점검 서비스",
    description: "전문가의 꼼꼼한 차량 점검으로 안전을 보장합니다.",
    price: "25,000원",
    features: ["엔진 점검", "브레이크 점검", "타이어 점검", "배터리 점검"],
  },
  {
    title: "긴급 출동 서비스",
    description: "24시간 언제든지 긴급상황에 신속하게 출동합니다.",
    price: "45,000원",
    features: ["24시간 대기", "신속한 출동", "현장 수리", "견인 서비스"],
  },
]

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 서비스 안내</h2>
          <p className="text-gray-600">고객 맞춤형 서비스를 제공합니다</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">서비스 신청</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
