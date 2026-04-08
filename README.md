# WebPath by SJA Pathway

An open-source, community-driven interactive roadmap for learning web development. Pick a path, learn at your own pace, and contribute along the way.

**Production**: [webpath.sjapathway.com](https://webpath.sjapathway.com)
**Development**: [dev.webpath.sjapathway.com](https://dev.webpath.sjapathway.com)

## Vision

Empowering developers and learners to master web development through structured, community-maintained learning paths — freely, collaboratively, and without limits.

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

## How to Contribute

Contributions are endless — here's how you can help:

### Add a Topic

Add a new topic object to any path JSON file in `src/data/paths/`:

```json
{
  "slug": "typescript-basics",
  "title": "TypeScript Basics",
  "description": "Add static typing to JavaScript.",
  "level": "intermediate",
  "order": 6,
  "content": "Your content here with ## headings and ```code blocks```",
  "resources": [
    { "title": "TypeScript Docs", "url": "https://www.typescriptlang.org/docs/", "type": "docs" }
  ]
}
```

### Add a New Path

1. Create a new JSON file in `src/data/paths/` (e.g., `devops.json`)
2. Import it in `src/data/index.ts`

### Other Ways to Contribute

- Add curated resources to existing topics
- Fix typos or improve explanations
- Translate content
- Add code examples
- Improve UI/UX

## Guidelines

- Keep explanations clear and beginner-friendly
- Include working code examples
- Link to official documentation as primary resources
- Use correct `level`: beginner, intermediate, or advanced
- Test locally before submitting a PR

## Deployment

- Push to main → Vercel auto-deploys frontend + API routes
- Set environment variables (e.g., `MONGODB_URI`) in the Vercel dashboard

## License

Open Source by [SJA Pathway](https://github.com/SJA-Pathway)
