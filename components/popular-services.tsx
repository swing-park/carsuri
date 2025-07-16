"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"
import BookingModal from "./booking-modal"

const services = [
  {
    id: 1,
    title: "국산차 출장 엔진오일",
    category: "출장 엔진오일 예약",
    tag: "국산차",
    tagColor: "bg-blue-600",
    price: "73,600원~",
    originalPrice: "63,600원~",
    rating: 4.98,
    reviews: "23,661건",
    image: "/popular_1.webp",
  },
  {
    id: 2,
    title: "수입차 출장 엔진오일",
    category: "출장 엔진오일 예약",
    tag: "수입차",
    tagColor: "bg-orange-500",
    price: "127,400원~",
    originalPrice: "117,400원~",
    rating: 4.97,
    reviews: "6,978건",
    image: "/popular_2.webp",
  },
  {
    id: 3,
    title: "국산차 출장 배터리",
    category: "출장 배터리 예약",
    tag: "국산차",
    tagColor: "bg-blue-600",
    price: "77,000원~",
    originalPrice: "67,000원~",
    rating: 4.96,
    reviews: "5,766건",
    image: "/popular_3.webp",
  },
  {
    id: 4,
    title: "수입차 출장 배터리",
    category: "출장 배터리 예약",
    tag: "수입차",
    tagColor: "bg-orange-500",
    price: "87,000원~",
    originalPrice: "77,000원~",
    rating: 4.97,
    reviews: "1,196건",
    image: "/popular_4.webp",
  },
]

export default function PopularServices() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="popular-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                onClick={() => setIsModalOpen(true)}
                className="hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Service Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`${service.tagColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {service.tag}
                      </span>
                    </div>

                    {/* Image Box */}
                    <div className="bg-gray-50 h-48 flex items-center justify-center overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-1">{service.category}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <Star className="h-4 w-4 text-red-500 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-900 mr-1">{service.rating}</span>
                      <span className="text-xs text-gray-500">이용후기 {service.reviews}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-900">{service.price}</span>
                        <div className="text-sm text-blue-600 line-through">{service.originalPrice}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
