# Content Authoring Guide

Thank you for helping us expand the WebPath curriculum! All of our learning paths are stored as JSON files inside the `src/data/paths/` directory.

## How to Add a New Topic

To add a new topic to a learning path, open the relevant file (like `frontend.json` or `backend.json`) and add a new object to the `topics` array.

### Standard Topic Format

Every topic should follow this exact JSON structure:

```json
{
  "slug": "unique-topic-name",
  "title": "Name of the Topic",
  "description": "A short summary of what this topic covers.",
  "level": "beginner",
  "order": 6,
  "content": "A short introduction paragraph.\n\n## Key Concepts\n\n- **Concept 1**: Explanation.\n- **Concept 2**: Explanation.\n\n## Example\n\n```html\n<p>Your code here</p>\n```",
  "resources": [
    {
      "title": "Name of the resource (e.g. MDN Docs)",
      "url": "https://example.com",
      "type": "docs" 
    }
  ]
}
