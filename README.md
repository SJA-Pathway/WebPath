# Cairn — by SJA Pathway

> **Mark the way through web development.**

Cairn is an open-source, community-built roadmap for learning web development. Every contributor adds a stone — every learner finds the way.

- **Production**: [webpath.sjapathway.com](https://webpath.sjapathway.com)
- **Development**: [dev.webpath.sjapathway.com](https://dev.webpath.sjapathway.com)
- **Project Board**: [SJA-Pathway/projects/1](https://github.com/orgs/SJA-Pathway/projects/1/views/1)
- **Repository**: [github.com/SJA-Pathway/WebPath](https://github.com/SJA-Pathway/WebPath) (the repo, deployment slug, and `webpath` subdomain remain `webpath` — `Cairn` is the public-facing brand)

## Why "Cairn"?

A **cairn** is a stack of stones built up by travelers along a trail. Each passing hiker adds one to mark the way for those who follow — a small, generous act that turns a wilderness into a path.

That's the model for this project:

- **Built by the people who walk it.** Every learner who passes through can leave a stone — a topic, a resource, a clearer explanation, a typo fix.
- **Useful even when half-built.** A trail with a few cairns is already easier to follow than no trail at all. You don't need permission or a finished product to start helping the next person.
- **Stronger over time.** Stones don't replace each other; they stack. The roadmap gets richer with every contribution rather than lurching between rewrites.
- **Pairs naturally with SJA Pathway.** The parent brand names the *journey*; Cairn names *what travelers leave behind for each other along the way*.

The repo, Cloudflare Worker, and `webpath.sjapathway.com` URL keep the `webpath` slug — Cairn is the brand on the front of the door, `webpath` is the address on the mailbox.

## Vision

Empowering developers and learners to master web development through structured, community-maintained learning paths — freely, collaboratively, and without limits. Every learner is also a future contributor: pass through, learn, and leave a stone.

## Tech Stack

| Layer            | Technology                              |
|------------------|-----------------------------------------|
| Framework        | Next.js 16 (App Router, Webpack)        |
| Language         | TypeScript 5                            |
| UI               | React 19 + React Compiler               |
| Styling          | Tailwind CSS 4                          |
| Data (current)   | Static JSON in `src/data/paths/`        |
| Data (planned)   | MongoDB Atlas via Mongoose 8            |
| HTTP             | Axios                                   |
| Hosting          | Cloudflare Workers (production + dev)   |
| Linting          | ESLint 9 (`eslint-config-next`)         |
| Version Control  | Git + GitHub                            |

## Project Structure

```
WebPath/  # repo name; the product is "Cairn"
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (Navbar + Footer)
│   │   ├── page.tsx                    # Landing page
│   │   ├── globals.css                 # Tailwind + global styles
│   │   ├── icon.png                    # Favicon
│   │   ├── api/
│   │   │   └── test/route.ts           # Sample API route
│   │   ├── contribute/
│   │   │   └── page.tsx                # Contribution guide
│   │   └── paths/
│   │       ├── page.tsx                # All paths listing
│   │       └── [pathSlug]/
│   │           ├── page.tsx            # Path detail (topic list)
│   │           └── [topicSlug]/
│   │               └── page.tsx        # Topic detail (content + resources)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PathCard.tsx
│   │   └── TopicCard.tsx
│   └── data/
│       ├── index.ts                    # `getPath` / `getTopic` helpers
│       ├── types.ts                    # Path / Topic / Resource interfaces
│       └── paths/
│           ├── frontend.json
│           ├── backend.json
│           └── fullstack.json
├── public/                             # Static assets
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── package.json
```

## Learning Paths

- **Frontend Development** — HTML, CSS, JavaScript, React, Next.js
- **Backend Development** — Node.js, REST APIs, Databases, Authentication
- **Full Stack Development** — Full Stack Overview, Deployment, Git & Collaboration

Each path contains multiple topics with explanations, code examples, and curated resources, defined as `Topic` objects in the path's JSON file.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

1. **Fork** this repository.
2. **Clone** your fork:

```bash
git clone https://github.com/YOUR_USERNAME/WebPath.git
cd WebPath
```

3. Install dependencies:

```bash
npm install
```

4. Run the dev server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Script           | Purpose                                      |
|------------------|----------------------------------------------|
| `npm run dev`    | Start Next.js dev server (Webpack)           |
| `npm run build`  | Production build                             |
| `npm start`      | Run the built app                            |
| `npm run lint`   | Lint with ESLint                             |

## Data Model

```ts
// src/data/types.ts
interface Resource {
  title: string;
  url: string;
  type: "docs" | "tutorial" | "article" | "video";
}

interface Topic {
  slug: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  order: number;
  content: string;        // Markdown-ish: ## headings + ```code``` blocks
  resources: Resource[];
}

interface Path {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}
```

Helpers in `src/data/index.ts`:

- `paths` — array of all paths
- `getPath(slug)` — find a path by slug
- `getTopic(pathSlug, topicSlug)` — find a topic within a path

## How to Contribute

Contributions are endless — here's how you can help.

### Add a Topic

Append a new topic object to a path JSON file in `src/data/paths/`:

```json
{
  "slug": "typescript-basics",
  "title": "TypeScript Basics",
  "description": "Add static typing to JavaScript.",
  "level": "intermediate",
  "order": 6,
  "content": "## Why TypeScript\n\nTypeScript adds...\n\n```ts\nconst greet = (name: string) => `Hello, ${name}`;\n```",
  "resources": [
    { "title": "TypeScript Docs", "url": "https://www.typescriptlang.org/docs/", "type": "docs" }
  ]
}
```

### Add a New Path

1. Create a new JSON file in `src/data/paths/` (e.g., `devops.json`) following the `Path` interface.
2. Import it in `src/data/index.ts` and add it to the `paths` array.

### Other Ways to Contribute

- Add curated resources to existing topics
- Fix typos or improve explanations
- Translate content
- Add code examples
- Improve UI/UX, accessibility, and performance
- Pick up an open task from the [project board](https://github.com/orgs/SJA-Pathway/projects/1/views/1) — see [TASKS.md](./TASKS.md)

## Guidelines

- Keep explanations clear and beginner-friendly
- Include working, self-contained code examples
- Link to official documentation as primary resources
- Use the correct `level`: `beginner`, `intermediate`, or `advanced`
- Keep `order` unique within a path
- Run `npm run lint` and `npm run build` locally before opening a PR

## Branching & Deployment

- `dev` — active development branch; deploys to `dev.webpath.sjapathway.com`
- `main` — production; deploys to `webpath.sjapathway.com`
- Open PRs against `dev`. Production releases are merged from `dev` → `main`.
- Cloudflare Workers auto-deploys on push. Set environment variables (e.g., `MONGODB_URI` once the DB layer lands) in the Cloudflare dashboard.

## Roadmap

See [TASKS.md](./TASKS.md) and the [GitHub project board](https://github.com/orgs/SJA-Pathway/projects/1/views/1) for the current backlog and in-progress work.

## License

Open Source by [SJA Pathway](https://github.com/SJA-Pathway).
