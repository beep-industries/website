import { HomePage } from "@/components/home/home-page"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Beep",
  applicationCategory: "CommunicationApplication",
  operatingSystem: "Web, Self-hosted",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "A modern, open-source communication platform built with microservices architecture. Real-time messaging, voice channels, and complete data ownership.",
  author: {
    "@type": "Organization",
    name: "Beep Industries",
    url: "https://github.com/beep-industries",
  },
  softwareVersion: "1.0.0",
  keywords: "chat, messaging, voice, open source, self-hosted, microservices",
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  )
}
