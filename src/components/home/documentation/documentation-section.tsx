import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowRight, Book } from "lucide-react"

export function DocumentationSection() {
  return (
    <div className="mt-20">
      <Separator className="footer-border" />
      <div className="w-full py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Book className="h-12 w-12 text-white" />
            <h1 className="animate-fade-in-up bg-gradient-to-r bg-clip-text text-[32px] font-bold tracking-tight text-white md:text-[48px]">
              Documentation
            </h1>
          </div>

          <p className="animate-fade-in-up-delay text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300">
            Explore comprehensive guides and API references to get started quickly.
          </p>

          <Link
            href="/documentation"
            className="inline-flex transform items-center justify-center gap-3 rounded-lg bg-[#fcfcfc33] text-white secondary-button-animation disabled:bg-[#191A1A] px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Explore Documentation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
