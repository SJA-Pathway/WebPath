# Contributing to WebPath

Thank you for your interest in contributing to WebPath!
This project is built by the community, for the community, and any contribution counts.

Contributions are endless — here's how you can help:

## Ways to Contribute

- Add curated resources to existing topics
- Fix typos or improve explanations
- Improve UI/UX
- Translate content
- Add code examples

<div align="center">

**Author your own topics:** [Topic Authoring Guide](/CONTENT_AUTHORING.md)

</div>

## Guidelines

- Keep explanations clear and beginner-friendly
- Include working code examples
- Link to official documentation as primary resources
- Use correct `level`: beginner, intermediate, or advanced
- When coding keep components reuseable
- Avoid breaking changes
- Test locally before submitting a PR
- Use proper branch naming and commit message conventions:
  - Use `example/description...` for branch naming (e.g. `feature/landing-page-redesign`)
  - Use `example: description` for commit messages (e.g. `docs: add authoring guide`)

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

## Development

1. Create a new branch:

```bash
git checkout -b feature/your-feature
```

2. Make your changes

3. Commit with a clear message:

```bash
git commit -m "feat: add feature"
```

4. Push your branch:
```bash
git push origin feature/your-feature
```

5. Open a Pull Request

## Reporting Issues

If you find a bug or problem:

- Check if it exists in issues
- Provide clear description of the issue
- Include reproduction steps
- Add relevant screenshots

## Deployment

- Push to main → Vercel auto-deploys frontend + API routes
- Set environment variables (e.g., `MONGODB_URI`) in the Vercel dashboard

---

Thanks for contributing!
Every little thing helps make WebPath better for everyone!
