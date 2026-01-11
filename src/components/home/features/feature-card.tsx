import { LucideIcon } from "lucide-react"

interface Props {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="bg-background/70 pricing-card-border h-full rounded-lg p-6 backdrop-blur-[6px]">
      <div className="mb-4 flex items-center gap-4">
        <div className="rounded-lg bg-[oklch(0.6665_0.2329_0.87_/_0.1)] p-2">
          <Icon className="h-6 w-6 text-[oklch(0.6665_0.2329_0.87)]" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
