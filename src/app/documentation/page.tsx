import "@/styles/home-page.css"
import { HomePageBackground } from "@/components/gradients/home-page-background"
import { FeatureCard } from "@/components/home/features/feature-card"
import { MessageSquare } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const document = `# Beep

**Beep** is an open source communication platform designed as an alternative to current big real-time platforms.  
It allows users to create servers, exchange messages, manage communities, and collaborate within a structured environment.

Beep is developed and maintained by **beep-industries** and is currently deployed in production at [https://beep.ovh](https://beep.ovh), where validated contributions are progressively integrated through continuous integration.

---

## Why Beep?

Beep was created to provide a structured, production-ready communication platform built on open source principles.

Core objectives:

- **Accessibility** — Publicly available source code
- **Maintainability** — Clear standards, conventions, and repository structure
- **Modular architecture** — Independent services with explicit responsibilities
- **Open governance** — Shared contribution rules across the organization
- **Production integration** — Continuous deployment of validated contributions

---

## Architecture Overview

Beep follows a strict microservices architecture. Each domain is isolated into its own repository to ensure modularity, clarity, and maintainability.

Main services include:

- **Auth** — Authentication system  
- **Authz** — Authorization system  
- **User** — User management  
- **Messages** — Messaging service  
- **Communities** — Community and server management  
- **Media Server** — Media handling  
- **Real Time** — Real-time communication layer  
- **Client** — Frontend application  
- **Platform** — Core platform services  
- **Admin** — Administration interface  
- **Notifications** — Notification service  

Each service:

- Has its own \`README.md\`
- Documents prerequisites, installation, and local setup
- Exposes clearly defined responsibilities
- Is containerized with Docker for reproducible environments
- Follows a standardized repository structure

This microservices refactor was a fundamental step in the transition to open source, ensuring the project is accessible and maintainable at scale.

---

## Getting Started

Every repository provides:

- Prerequisites
- Environment configuration
- Local development instructions
- Docker configuration
- Links to governance documents

Typical development workflow:

1. Fork and clone the repository
2. Create a dedicated branch (\`feat/\`, \`fix/\`, \`hotfix/\`, etc.)
3. Configure environment variables
4. Run the service locally
5. Submit a pull request following contribution guidelines

---

## Open Source Governance

Beep centralizes governance through a dedicated \`.github\` repository at the organization level.

This repository provides default community health files used across all services:

- \`CONTRIBUTING.md\` — Contribution workflow and commit conventions
- \`CODE_OF_CONDUCT.md\` — Community standards and expected behavior
- Issue templates — Standardized bug reports and feature proposals
- \`LICENSE\` — Apache License 2.0

This structure ensures consistency, clarity, and a safe collaborative environment across the entire organization.

---

## Licensing

Beep is released under the **Apache License 2.0**, a widely recognized permissive open source license.

You may:

- Use the software commercially
- Modify the source code
- Distribute modified or unmodified versions
- Use the software privately

You must:

- Include the license
- Preserve copyright notices
- Document modifications
- Accept the limitation of liability

The name "Beep" remains reserved and cannot be used for derivative branding.

---

## Security Practices

Before publication:

- No API keys, tokens, or private credentials are committed
- All sensitive data is handled through environment variables
- \`.env.example\` files are provided without values
- Repositories are reviewed to prevent accidental exposure of secrets

Security verification is a mandatory step before open source publication.

---

## Project Scope

Beep is:

- A production-deployed communication platform
- A class project structured around real-world open source standards
- A demonstration of microservices organization and governance practices

It provides practical experience in:

- Microservices architecture
- Open source governance
- Repository standardization
- Continuous integration in a live environment
        `

export default function Documentation() {
  return (
    <section
      className={
        "relative mx-auto mb-12 flex max-w-7xl items-center justify-between px-[32px] pt-10"
      }
    >
      <HomePageBackground />
      <div className="flex w-full flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center">
          <h1
            className={
              "animate-fade-in-up text-[48px] leading-[48px] font-medium tracking-[-1.6px] md:text-[80px] md:leading-[80px]"
            }
          >
            Documentation.
          </h1>
          <p
            className={
              "animate-fade-in-up-delay mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]"
            }
          >
            Document yourself. Explore.
          </p>
        </div>
        <FeatureCard
          icon={MessageSquare}
          title={"DOCUMENTATION.md"}
          description=""
          className="w-fit"
        >
          <article className="prose prose-invert mx-12 mt-4 text-left [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-white/10 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-sm [&_:not(pre)>code]:before:content-none [&_:not(pre)>code]:after:content-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{document}</ReactMarkdown>
          </article>
        </FeatureCard>
      </div>
    </section>
  )
}
