import { FeatureCard } from "@/components/home/features/feature-card"
import { MessageSquare, Mic, Shield, Zap, GitBranch, Users } from "lucide-react"
import { FeaturedCardGradient } from "@/components/gradients/featured-card-gradient"

const features = [
  {
    icon: MessageSquare,
    title: "Real-time messaging",
    description: "Instant text communication with channels, threads, and direct messages.",
  },
  {
    icon: Mic,
    title: "Voice channels",
    description: "Crystal-clear voice chat powered by WebRTC for seamless conversations.",
  },
  {
    icon: Zap,
    title: "Microservices architecture",
    description: "Scalable and resilient design with independent, loosely-coupled services.",
  },
  {
    icon: GitBranch,
    title: "100% open source",
    description: "Fully transparent codebase. Fork it, extend it, make it yours.",
  },
  {
    icon: Shield,
    title: "Self-hosted",
    description: "Deploy on your own infrastructure. Your data stays with you.",
  },
  {
    icon: Users,
    title: "Built by students",
    description: "A passionate team of 15 students pushing the boundaries of modern development.",
  },
]

export function Features() {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between px-[32px]">
      <div
        className={
          "border-secondary-foreground/10 featured-card-badge animate-fade-in-up-small relative z-10 mb-8 flex h-[29px] items-center rounded-xs border px-3 py-1 text-[14px] leading-[21px]"
        }
      >
        <FeaturedCardGradient />
        Why Beep?
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`animate-fade-in-up-stagger animate-delay-${index + 1}`}
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  )
}
