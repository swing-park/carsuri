"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    carNumber: "",
    service: "",
    address: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api-v2.gongcarapp.com/partner-company/care-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carNumber: formData.carNumber,
          service: formData.service,
          address: formData.address,
        }),
      })

      if (response.ok) {
        // 응답 본문이 없는 성공 (예: 204 No Content)을 처리
        if (response.status === 204 || response.headers.get("Content-Length") === "0") {
          console.log("예약 성공: 응답 본문 없음 (No Content)")
          alert("예약이 완료되었습니다!")
        } else {
          const result = await response.json()
          console.log("예약 성공:", result)
          alert("예약이 완료되었습니다!")
        }
        setFormData({ carNumber: "", service: "", address: "" })
      } else {
        // 오류 응답 처리: JSON 본문이 있을 수도 있고 없을 수도 있음
        let errorData = { message: "알 수 없는 오류가 발생했습니다." }
        try {
          errorData = await response.json()
        } catch (jsonError) {
          console.warn("오류 응답 JSON 파싱 실패:", jsonError)
          // JSON 파싱 실패 시 기본 오류 메시지 사용
        }
        console.error("예약 실패:", errorData)
        alert(`예약에 실패했습니다: ${errorData.message || "다시 시도해주세요."}`)
      }
    } catch (error) {
      console.error("API 호출 오류:", error)
      alert("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

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
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">차량번호</label>
                <input
                  type="text"
                  placeholder="예) 12가 3456"
                  value={formData.carNumber}
                  onChange={(e) => setFormData({ ...formData, carNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">서비스 선택</label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="w-full px-4 py-3 h-12">
                    <SelectValue placeholder="서비스를 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="출장 엔진오일 교체">출장 엔진오일 교체</SelectItem>
                    <SelectItem value="출장 배터리 교체">출장 배터리 교체</SelectItem>
                    <SelectItem value="종합 점검">종합 점검</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">주소</label>
              <input
                type="text"
                placeholder="서비스 받을 주소를 입력해주세요"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "예약 중..." : "예약하기"}
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("popular-services")}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 bg-transparent"
            >
              {"서비스 안내"}
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("reviews-section")}
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
