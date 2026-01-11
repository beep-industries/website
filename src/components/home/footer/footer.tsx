import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, GitBranch } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-24">
      <Separator className={"footer-border"} />
      <div
        className={
          "text-muted-foreground flex flex-col items-center justify-center gap-4 py-[24px] text-sm leading-[14px]"
        }
      >
        <div className={"flex items-center justify-center gap-2"}>
          <span className={"text-sm leading-[14px]"}>An open source project by</span>
          <span className={"text-foreground font-semibold"}>Beep Industries</span>
        </div>
        <div className={"flex flex-wrap items-center justify-center gap-4"}>
          <Link
            className={"hover:text-foreground text-sm leading-[14px] transition-colors"}
            href={"https://github.com/beep-industries"}
            target={"_blank"}
          >
            <span className={"flex items-center gap-1"}>
              <GitBranch className={"h-4 w-4"} />
              GitHub
              <ArrowUpRight className={"h-4 w-4"} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
