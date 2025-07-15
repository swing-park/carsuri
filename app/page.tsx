import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PopularServices from "@/components/popular-services"
import ReviewsSection from "@/components/reviews-section"
import BrandGallery from "@/components/brand-gallery"
import PremiumService from "@/components/premium-service"
import StepsSection from "@/components/steps-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <PopularServices />
      <ReviewsSection />
      <BrandGallery />
      <PremiumService />
      <StepsSection />
      <Footer />
    </div>
  )
}
