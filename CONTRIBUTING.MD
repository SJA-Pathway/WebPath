# How to Contribute

Contributions are endless — here's how you can help:

## Add a Topic

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
- When coding keep components reuseable
- Avoid breaking changes
- Test locally before submitting a PR

## Deployment

- Push to main → Vercel auto-deploys frontend + API routes
- Set environment variables (e.g., `MONGODB_URI`) in the Vercel dashboard

## Workflow

```bash
git checkout -b feature/your-feature
# make changes
git commit -m "feat: add feature"
git push origin feature/your-feature
```

Then open a Pull Request.
