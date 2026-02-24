import { HomePageBackground } from "@/components/gradients/home-page-background"
import "../../styles/home-page.css"
import { FeatureCard } from "@/components/home/features/feature-card"
import { MessageSquare, Mic, Shield, Zap, GitBranch, Users } from "lucide-react"
import ReactMarkdown from "react-markdown"

const contributing = `# Contributing to Beep

Thanks for contributing to Beep!

This document describes the **global contribution rules** applicable to **all repositories** within the Beep Industries organization.

Beep is a social media platform / messaging web application that can handle dozens of concurrent video and audio streams, as well as instant messaging, files, and has tons of features!

## **Organization structure**

This project consists of several independent services (microservices):

**Services:** Messages, Communities, Authz, Files, Conferencing, Users, Authn, Notifications, Content.

Each repository contains its own guide for developing and running the corresponding service.

## Setup and execution

To run a specific service, please refer to the **“Installation and Execution”** section of that repository’s \`README.md\`.

## **Contributing bug reports**

If you have found a bug in Beep, please check whether there is already an open issue for this problem in our [project board](https://github.com/orgs/beep-industries/projects/1).

If no existing issue matches your problem, feel free to open a new one.

A bug may be:

- A technical issue (e.g., runtime error, API misbehavior)
- Or a user experience issue (e.g., unclear documentation, unexpected UI behavior)

If you’re unsure whether your problem qualifies as a bug, please open an issue anyway — we’ll figure it out together.

## Contribution process

1. Fork the repository (see the [official GitHub forking guide](https://docs.github.com/en/contributing))
2. **Clone** your forked repository locally
3. Select the issue you want to work on and assign it to yourself
4. Create a branch (see naming conventions below)
5. Implement your changes
6. Commit your changes (see commit conventions)
7. Run the tests (see the \`README\` of the repository)
8. Open a Pull Request (PR), link it to the related issue, and fill in the description properly
9. Request a review (and update the issue status on the Kanban board)
10. Once the PR is reviewed and approved, merge it into \`main\` (and update the Kanban board again)

## Global conventions

These conventions apply to all repositories under the Beep Industries organization.
They ensure readability, consistency, and code quality across all microservices.

### Commit format

All commits must follow the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) specification.

\`\`\`jsx
<type>(<scope>): <short description>
\`\`\`

**Allowed types :**

| Type | Description |
| --- | --- |
| \`feat\` | New feature |
| \`fix\` | Bug fix |
| \`docs\` | Documentation only |
| \`style\` | Code formatting, indentation, etc. |
| \`refactor\` | Code refactoring (no new features or bug fixes) |
| \`perf\` | Performance improvement |
| \`test\` | Adding or modifying tests |
| \`chore\` | Maintenance tasks (CI, dependencies, build configs, etc.) |

**Allowed scopes :**

| Scope |
| --- |
| \`readme\` |
| \`front\` |
| \`files\` |
| \`ci\` |
| \`message\` |
| \`users\` |
| \`authn\` |
| \`communities\` |
| \`authz\` |
| \`conferencing\` |
| \`notification\` |
| \`content\` |

### Branch format

We use a simplified **Git Flow** convention for branch naming.

\`\`\`jsx
<type>/<short-description>
\`\`\`

**Allowed branch types:**

| Type | Usage |
| --- | --- |
| \`feat/\` | New features |
| \`fix/\` | Bug fixes |
| \`hotfix/\` | Urgent production fixes |
| \`refactor/\` | Code refactoring |
| \`chore/\` | Maintenance or configuration |
| \`docs/\` | Documentation |

### Pull Request (PR) format

**PR title:**

Should follow the same structure as the main commit:

\`\`\`jsx
<type>(<scope>): <short description>
\`\`\`

**PR description:**

In the PR body, make sure to:

- Link the related issue (e.g., \`Fixes #42\`)
- Describe **what** was done
- Explain **why** this change is needed
- List any **tests performed**

**Before merging a PR:**

- [ ]  Code is formatted and linted
- [ ]  All tests pass
- [ ]  Branch name follows the convention
- [ ]  The issue is linked to the PR
- [ ]  The PR has been reviewed by at least one team member

### Naming conventions

- **Variables:** \`camelCase\`
- **Classes:** \`PascalCase\`
- **Constants:** \`UPPER_SNAKE_CASE\`
- **Folders and files:** kebab-case (e.g., \`user-service\`, \`auth-router.js\`)

### Linting

Each repository defines its own technical environment (Node.js, Python, Go, etc.) and therefore its own linter.

However, maintaining **consistency** across projects is a priority.

- Run the linter before committing or pushing
- Ensure no linter errors remain before opening a PR
- Use Prettier, ESLint, Black, or equivalent tools based on your stack

### Code review

All Pull Requests **must be reviewed** before being merged.

**Goals:**

- Improve code quality and consistency
- Detect potential issues before merging
- Share knowledge across the team

**Rules:**

- A PR must be approved by **at least one reviewer** before merging
- Comments should remain **constructive and respectful**
- Reviewers verify:
    - Code readability and consistency
    - Compliance with conventions
    - Test coverage (unit/integration)
    - Absence of regressions or dead code
- After approval, the author merges the PR

### **Merging Strategy**

**Preferred mode:** “Squash and merge” → Produces a single clean commit per PR (easier to track)

### Example workflow

1. You need to fix a bug in the “Files” service → issue \`#42\`
2. Create your branch:
    
    \`\`\`jsx
    fix/files-upload-error
    \`\`\`
    
3. Code, lint, and test your changes
4. Commit:
    
    \`\`\`jsx
    fix(files): correct missing MIME type validation
    \`\`\`
    
5. Open a PR with:
    - Title: \`fix(files): correct missing MIME type validation\`
    - Description: \`Fixes #42\` + explanation
6. Request a review → merge after approval
7. The linked issue closes automatically


## License

All contributions must be made under the [Apache 2.0 License](./LICENSE).

By submitting code, you agree to license it under this license.


Thanks for contributing to Beep !`

export default function Collaboration() {
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
            Collaboration.
          </h1>
          <p
            className={
              "animate-fade-in-up-delay mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]"
            }
          >
            How to contribute to Beep and get involved in the project.
          </p>
        </div>
        <FeatureCard
          icon={MessageSquare}
          title={"CONTRIBUTING.md"}
          description=""
          className="w-fit"
        >
          <article className="prose prose-invert mx-12 mt-4 text-left">
            <ReactMarkdown>{contributing}</ReactMarkdown>
          </article>
        </FeatureCard>
      </div>
    </section>
  )
}
