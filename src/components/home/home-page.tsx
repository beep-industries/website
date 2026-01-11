import "../../styles/home-page.css"
import Header from "@/components/home/header/header"
import { HeroSection } from "@/components/home/hero-section/hero-section"
import { Features } from "@/components/home/features/features"
import { HomePageBackground } from "@/components/gradients/home-page-background"
import { Footer } from "@/components/home/footer/footer"

export function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <HomePageBackground />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
