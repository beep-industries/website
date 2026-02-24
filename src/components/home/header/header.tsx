"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Documentation", href: "/documentation" },
  { name: "Collaboration", href: "/collaboration" },
]

export default function Header() {
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "#"
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[32px] py-[18px]">
        <div className="flex flex-1 items-center justify-start">
          <Link className="flex items-center" href={"/"}>
            <Image className="block" src="/logo.svg" width={131} height={28} alt="Beep" priority />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="flex space-x-4">
            <Button asChild={true} variant={"secondary"}>
              <Link href={loginUrl}>Sign in</Link>
            </Button>
          </div>
          <div>
            <X
              className={cn(
                "absolute h-6 w-6 rotate-90 cursor-pointer transition-all duration-300",
                isOpen ? "rotate-90 opacity-100" : "rotate-0 opacity-0"
              )}
              onClick={() => setIsOpen(!isOpen)}
            />
            <Menu
              className={cn("h-6 w-6 cursor-pointer", isOpen ? "opacity-0" : "opacity-100")}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="border-border bg-background/50 absolute top-full right-0 z-50 flex flex-col gap-2 rounded border">
          {navLinks.map((link) => (
            <Link
              className="block cursor-pointer px-4 py-2 underline-offset-4 hover:underline"
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(!isOpen)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
