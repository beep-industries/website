"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
            <DropdownMenu open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
              <DropdownMenuTrigger asChild>
                <Button asChild variant="ghost" className="hover:bg-transparent">
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
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.name}>
                    <Link href={link.href} className="w-full">{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
