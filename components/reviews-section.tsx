"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "김○○",
    rating: 5,
    comment: "집 앞에서 바로 엔진오일 교체해주셔서 너무 편했어요. 정비사님도 친절하시고 꼼꼼하게 해주셨습니다.",
    date: "2024.01.15",
    service: "출장 엔진오일 교체",
    carModel: "아반떼",
    location: "서울 강남구",
  },
  {
    id: 2,
    name: "박○○",
    rating: 5,
    comment: "배터리가 갑자기 방전되어 당황했는데, 빠른 출동으로 해결해주셨습니다. 가격도 합리적이에요.",
    date: "2024.01.12",
    service: "출장 배터리 교체",
    carModel: "소나타",
    location: "경기 성남시",
  },
  {
    id: 3,
    name: "이○○",
    rating: 5,
    comment: "종합 점검 받았는데 상세한 리포트까지 주셔서 감사했습니다. 앞으로도 계속 이용할게요.",
    date: "2024.01.10",
    service: "종합 점검 서비스",
    carModel: "그랜저",
    location: "서울 송파구",
  },
  {
    id: 4,
    name: "최○○",
    rating: 4,
    comment: "시간 약속도 잘 지키시고 서비스 품질도 만족스럽습니다. 추천해요!",
    date: "2024.01.08",
    service: "출장 엔진오일 교체",
    carModel: "투싼",
    location: "인천 부평구",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Area */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{"이용 후기"}</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {
                "실제 고객들의 생생한 후기를 확인해보세요. 공카 CARE의 전문적인 서비스로 많은 고객들이 만족하고 있습니다."
              }
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center mr-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-900">{"4.9"}</span>
                  <span className="text-xl text-gray-600">{"/ 5.0"}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{"3,247"}</div>
                  <div className="text-sm text-gray-600">{"총 리뷰 수"}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{"98%"}</div>
                  <div className="text-sm text-gray-600">{"재이용률"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Review Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-2">
                    <Card className="bg-white shadow-lg border-0">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                            <img src="/1.jpg" alt="Customer" className="w-8 h-8 object-cover rounded-full" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <p className="text-sm text-gray-600">
                                  {review.carModel} • {review.location}
                                </p>
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex items-center mb-3">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <p className="text-blue-600 text-sm font-medium mb-3">{review.service}</p>
                            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevReview}
                className="rounded-full w-10 h-10 p-0 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextReview}
                className="rounded-full w-10 h-10 p-0 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
