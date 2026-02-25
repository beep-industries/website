import "@/styles/home-page.css"
import Header from "@/components/home/header/header"
import { HeroSection } from "@/components/home/hero-section/hero-section"
import { Features } from "@/components/home/features/features"
import { HomePageBackground } from "@/components/gradients/home-page-background"
import { DocumentationSection } from "./documentation/documentation-section"
import { CollaborationSection } from "./collaborate/collaborate-section"

export function HomePage() {
  return (
    <div className="relative flex min-h-screen h-full flex-col overflow-hidden">
      <HomePageBackground />
      <main className="flex-grow">
        <HeroSection />
        <Features />
        <DocumentationSection />
        <CollaborationSection />
      </main>
    </div>
  )
}
