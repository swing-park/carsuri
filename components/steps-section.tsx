"use client"

import { useState } from "react"

const steps = [
  {
    number: 1,
    title: "예약 신청",
    subtitle: "간편한 온라인 예약",
    description: "차번호와 주소만 입력하면\n예약이 완료됩니다.",
    mockupImage: "/placeholder.svg?height=400&width=200",
  },
  {
    number: 2,
    title: "정비사 방문",
    subtitle: "전문 정비사 출동",
    description: "예약 시간에 맞춰\n전문 정비사가 방문합니다.",
    mockupImage: "/placeholder.svg?height=400&width=200",
  },
  {
    number: 3,
    title: "서비스 완료",
    subtitle: "현장에서 바로 완료",
    description: "정비 완료 후 결제하고\n서비스가 마무리됩니다.",
    mockupImage: "/placeholder.svg?height=400&width=200",
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
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{step.description}</p>
                    </div>
                  </div>
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
