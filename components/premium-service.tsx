import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const features = [
  "전문 정비사 직접 방문",
  "정품 부품 사용 보장",
  "서비스 완료 후 품질 보증",
  "24시간 고객 지원",
  "투명한 가격 정책",
  "사후 관리 서비스",
]

export default function PremiumService() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{"프리미엄 점검 서비스"}</h2>
          <p className="text-gray-600">{"전문가의 꼼꼼한 점검으로 차량의 안전을 보장합니다"}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{"종합 점검 패키지"}</CardTitle>
                <p className="text-gray-600">{"차량의 모든 부분을 전문적으로 점검합니다"}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{"89,000원"}</div>
                  <div className="text-lg text-gray-500 line-through">{"120,000원"}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">{"점검 서비스 신청"}</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{"왜 프리미엄 점검인가요?"}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {
                  "공카 CARE의 프리미엄 점검 서비스는 20년 이상의 경력을 가진 전문 정비사들이 직접 방문하여 차량의 모든 부분을 꼼꼼히 점검합니다. 정품 부품만을 사용하며, 서비스 완료 후에도 지속적인 사후 관리를 제공합니다."
                }
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">{"1,234+"}</div>
                <div className="text-sm text-gray-600">{"완료된 점검"}</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">{"4.9/5"}</div>
                <div className="text-sm text-gray-600">{"고객 만족도"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
