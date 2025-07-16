"use client"

import { useState } from "react"

const steps = [
  {
    number: 1,
    title: "예약 신청",
    subtitle: "간편한 온라인 예약",
    description: "차번호와 주소만 입력하면\n예약이 완료됩니다.",
    uiContent: (
      <div className="p-4 space-y-4">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">출장 정비 예약</h3>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600">차량번호</label>
            <input className="w-full p-2 border rounded text-sm" placeholder="12가 3456" value="12가 3456" readOnly />
          </div>
          <div>
            <label className="text-xs text-gray-600">서비스</label>
            <div className="w-full p-2 border rounded text-sm bg-gray-50">출장 엔진오일 교체</div>
          </div>
          <div>
            <label className="text-xs text-gray-600">주소</label>
            <input
              className="w-full p-2 border rounded text-sm"
              placeholder="서울시 강남구..."
              value="서울시 강남구 테헤란로 123"
              readOnly
            />
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded text-sm font-medium">예약하기</button>
        </div>
      </div>
    ),
  },
  {
    number: 2,
    title: "정비사 방문",
    subtitle: "전문 정비사 출동",
    description: "예약 시간에 맞춰\n전문 정비사가 방문합니다.",
    uiContent: (
      <div className="p-4 space-y-4">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">정비사 출동 중</h3>
        </div>
        <div className="bg-blue-50 p-3 rounded">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">김</span>
            </div>
            <div>
              <p className="font-medium text-sm">김정비사</p>
              <p className="text-xs text-gray-600">15년 경력 • ★4.9</p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs text-gray-600 mb-1">현재 위치</p>
            <p className="text-sm">고객님 위치에서 5분 거리</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-green-600 text-white p-2 rounded text-sm">전화하기</button>
          <button className="flex-1 bg-yellow-500 text-white p-2 rounded text-sm">카톡하기</button>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    title: "서비스 완료",
    subtitle: "현장에서 바로 완료",
    description: "정비 완료 후 결제하고\n서비스가 마무리됩니다.",
    uiContent: (
      <div className="p-4 space-y-4">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">서비스 완료</h3>
        </div>
        <div className="bg-green-50 p-3 rounded">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">✓</span>
            </div>
          </div>
          <p className="text-center text-sm font-medium">엔진오일 교체 완료</p>
          <p className="text-center text-xs text-gray-600 mt-1">소요시간: 25분</p>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between text-sm mb-2">
            <span>서비스 비용</span>
            <span>68,000원</span>
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded text-sm font-medium">결제하기</button>
        </div>
        <div className="text-center">
          <button className="text-blue-600 text-xs underline">후기 작성하기</button>
        </div>
      </div>
    ),
  },
]

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{"출장정비 어떻게 진행할까요?"}</h2>
          <p className="text-gray-600">{"이렇게 정비합니다"}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Mockups */}
          <div className="flex gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-500 ${
                  activeStep === index ? "scale-110 z-10" : "scale-90 opacity-70"
                }`}
              >
                <div className="w-48 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">{step.uiContent}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="lg:ml-12">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        activeStep === index ? "bg-blue-600" : "bg-gray-400"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {"STEP "}
                        {step.number}
                        {". "}
                        {step.title}
                      </h3>
                      <p className="text-blue-600 mb-2">"{step.subtitle}"</p>
                      <p className="text-gray-600 whitespace-pre-line">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
