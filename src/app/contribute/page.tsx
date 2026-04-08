import Link from "next/link";

export const metadata = {
  title: "Contribute | WebPath",
  description: "Learn how to contribute to WebPath — add topics, paths, resources, and more.",
};

export default function ContributePage() {
  return (
    <>
      <div className="page-header">
        <h1>Contribute to WebPath</h1>
        <p>
          WebPath is open source and community-driven. Every contribution helps
          someone learn web development.
        </p>
      </div>

      <div className="contribute-content">
        <div className="ways-grid">
          <div className="way-card">
            <h3>Add Topics</h3>
            <p>Write content for new or existing topics in any path.</p>
          </div>
          <div className="way-card">
            <h3>Add Resources</h3>
            <p>Link helpful tutorials, docs, videos, and articles.</p>
          </div>
          <div className="way-card">
            <h3>New Paths</h3>
            <p>Propose entire new learning paths (DevOps, AI, etc.).</p>
          </div>
          <div className="way-card">
            <h3>Fix & Improve</h3>
            <p>Fix typos, improve explanations, or update outdated content.</p>
          </div>
        </div>

        <h2>How to Contribute</h2>
        <ol>
          <li>
            <strong>Fork the repository</strong> at{" "}
            <a
              href="https://github.com/sja-thedude/WebPath"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary)" }}
            >
              github.com/sja-thedude/WebPath
            </a>
          </li>
          <li>
            <strong>Clone your fork</strong> and create a new branch:
          </li>
        </ol>
        <pre>
          <code>{`git clone https://github.com/YOUR_USERNAME/WebPath.git
cd WebPath/webpath
git checkout -b feature/add-typescript-topic`}</code>
        </pre>

        <h2>Adding a New Topic</h2>
        <p>
          Topics live in JSON files under{" "}
          <code>src/data/paths/[path-name].json</code>. Each topic has:
        </p>
        <pre>
          <code>{`{
  "slug": "typescript-basics",
  "title": "TypeScript Basics",
  "description": "Add static typing to JavaScript.",
  "level": "intermediate",
  "order": 6,
  "content": "Your markdown-style content here...",
  "resources": [
    {
      "title": "TypeScript Handbook",
      "url": "https://www.typescriptlang.org/docs/",
      "type": "docs"
    }
  ]
}`}</code>
        </pre>

        <h2>Adding a New Path</h2>
        <p>
          Create a new JSON file in <code>src/data/paths/</code> (e.g.,{" "}
          <code>devops.json</code>) following the existing structure, then
          import it in <code>src/data/index.ts</code>.
        </p>

        <h2>Guidelines</h2>
        <ul>
          <li>Keep explanations clear and beginner-friendly.</li>
          <li>Include working code examples where possible.</li>
          <li>Link to official documentation as primary resources.</li>
          <li>
            Use the correct <code>level</code>: beginner, intermediate, or
            advanced.
          </li>
          <li>Test your changes locally before submitting a PR.</li>
        </ul>

        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <a
            href="https://github.com/sja-thedude/WebPath"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on GitHub &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
