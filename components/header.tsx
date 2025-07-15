import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">CARSURI</div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              차량관리
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              예약하기
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              서비스
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              고객센터
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-400" />
            <Button className="bg-blue-600 hover:bg-blue-700">예약하기</Button>
            <Menu className="h-5 w-5 text-gray-400 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}
