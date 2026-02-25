"use client"
import { Features } from "@/components/home/features/features"
import { HeroSection } from "@/components/home/hero-section/hero-section"
import "@/styles/home-page.css"
import { ChevronsDown } from "lucide-react"
import { CollaborationSection } from "./collaborate/collaborate-section"
import { DocumentationSection } from "./documentation/documentation-section"

export function HomePage() {
  return (
    <div className="relative flex h-full min-h-screen flex-col overflow-hidden">
      <main className="flex-grow">
        <div className="flex h-[calc(100dvh-64px)] flex-col items-center justify-between">
          <div className="flex flex-col justify-center h-full pb-50">
            <HeroSection />
            <Features />
          </div>
          <button
            className="mb-10 cursor-pointer text-white"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <ChevronsDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
        <div className="h-full">
          <DocumentationSection />
          <CollaborationSection />
        </div>
      </main>
    </div>
  )
}
