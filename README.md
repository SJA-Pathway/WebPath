# WebPath by SJA Pathway

An open-source, community-driven interactive roadmap for learning web development through structured learning paths.
Pick a path, learn at your own pace, and contribute your own educational content along the way to improve the platform for others.

**Production**: [webpath.sjapathway.com](https://webpath.sjapathway.com)
**Development**: [dev.webpath.sjapathway.com](https://dev.webpath.sjapathway.com)

## Vision

Empowering developers and learners to master web development through structured, community-maintained learning paths — freely, collaboratively, and without limits.

## Features

- Structured learning paths (Frontend, Backend, and Full Stack)
- Topic based content system
- Code examples and curated resources
- Community-driven contributions
- Scalable Architecture

## Tech Stack

| Layer           | Technology                   |
|-----------------|------------------------------|
| Frontend        | Next.js 16 (React 19 + TypeScript) |
| Backend         | Next.js API Routes (Node.js) |
| Database        | MongoDB Atlas (Mongoose)     |
| Styling         | Tailwind CSS 4               |
| Version Control | Git + GitHub                 |

## Project Structure

```
src/
├── app/
│   ├── page.tsx                        # Landing page
│   ├── layout.tsx                      # Root layout (Navbar + Footer)
│   ├── paths/
│   │   ├── page.tsx                    # All paths listing
│   │   └── [pathSlug]/
│   │       ├── page.tsx                # Path detail with topic list
│   │       └── [topicSlug]/
│   │           └── page.tsx            # Topic detail with content & resources
│   ├── contribute/
│   │   └── page.tsx                    # Contribution guide
│   └── api/
│       └── test/route.ts              # Test API endpoint
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PathCard.tsx
│   └── TopicCard.tsx
└── data/
    ├── index.ts                        # Data access helpers
    ├── types.ts                        # TypeScript interfaces
    └── paths/
        ├── frontend.json               # Frontend path & topics
        ├── backend.json                # Backend path & topics
        └── fullstack.json              # Full Stack path & topics
```

## Learning Paths

- **Frontend Development** — HTML, CSS, JavaScript, React, Next.js
- **Backend Development** — Node.js, REST APIs, Databases, Authentication
- **Full Stack Development** — Full Stack Overview, Deployment, Git & Collaboration

Each path contains multiple topics with explanations, code examples, and curated resources.

## Getting Started

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

4. Run locally:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Please read the contributing guide and code of conduct before making changes:

- [Contributing Guide](./CONTRIBUTING.MD)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

## License

Open Source by [SJA Pathway](https://github.com/SJA-Pathway)
