import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "#"

  return (
    <nav>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-[32px] py-[18px]">
        <div className="flex flex-1 items-center justify-start">
          <Link className="flex items-center" href={"/"}>
            <Image
              className="block"
              src="/logo.svg"
              width={131}
              height={28}
              alt="Beep"
              priority
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="flex space-x-4">
            <Button asChild={true} variant={"secondary"}>
              <Link href={loginUrl}>Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
