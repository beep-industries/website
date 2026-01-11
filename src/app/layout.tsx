import { Inter } from "next/font/google"
import "../styles/globals.css"
import "../styles/layout.css"
import { ReactNode } from "react"
import type { Metadata, Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://beep.example.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Beep - Open Source Communication Platform",
    template: "%s | Beep",
  },
  description:
    "Beep is a modern, open-source communication platform built with microservices architecture. Real-time messaging, voice channels, and complete data ownership. Self-hosted and 100% transparent.",
  keywords: [
    "beep",
    "discord alternative",
    "open source",
    "chat platform",
    "microservices",
    "self-hosted",
    "real-time messaging",
    "voice chat",
    "communication",
    "team collaboration",
  ],
  authors: [{ name: "Beep Industries", url: "https://github.com/beep-industries" }],
  creator: "Beep Industries",
  publisher: "Beep Industries",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Beep",
    title: "Beep - Open Source Communication Platform",
    description:
      "A modern, open-source communication platform built with microservices architecture by 15 students. Real-time messaging, voice channels, and complete data ownership.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Beep - Open Source Communication Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beep - Open Source Communication Platform",
    description:
      "A modern, open-source communication platform built with microservices architecture. Self-hosted and 100% transparent.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  themeColor: "#0f1715",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={"dark min-h-full"}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Preload background images */}
        <link rel="preload" href="/assets/background/grain-blur.svg" as="image" />
        <link rel="preload" href="/assets/background/grid-bg.svg" as="image" />
        <link rel="preload" href="/assets/background/grain-bg.svg" as="image" />
        <link rel="preload" href="/assets/background/small-blur.svg" as="image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
