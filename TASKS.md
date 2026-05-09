# Cairn — Tasks

Backlog of work that can be picked up by contributors. Tasks are mirrored on the [GitHub project board](https://github.com/orgs/SJA-Pathway/projects/1/views/1) under the **Ready** column.

All 100 tasks below are **Ready to Start** — anyone can pick one up. Comment on the corresponding GitHub issue (or open one) and assign yourself before starting.

**Type labels:** `content` · `feature` · `infra` · `ui` · `docs` · `bug`
**Difficulty labels:** `easy` · `medium` · `hard` · `advanced`

The list is ordered roughly from simplest to most advanced — feel free to start anywhere that matches your skill level.

---

## Easy — good first issues

1. **Fix Vercel references in docs** — `docs` `easy`
   Replace any leftover Vercel mentions with Cloudflare Workers (e.g., task #12 below, README footnotes).

2. **Audit and refresh resource links across all paths** — `content` `easy`
   Verify every URL in `frontend.json`, `backend.json`, `fullstack.json` resolves and points to the canonical doc.

3. **Add tooltips on path cards** — `ui` `easy`
   Native `title` attribute or accessible tooltip showing path description on hover/focus.

4. **Add reading time estimate to topics** — `feature` `easy`
   Compute words / 200 wpm in `[topicSlug]/page.tsx` and render under the title.

5. **Breadcrumbs navigation** — `ui` `easy`
   `Home / Paths / Frontend / React Basics` with proper `aria-label="breadcrumb"`.

6. **Loading skeletons for path and topic pages** — `ui` `easy`
   `loading.tsx` files using Tailwind skeleton blocks.

7. **Custom 404 page** — `ui` `easy`
   `not-found.tsx` with branding, "go home" CTA, and a link back to `/paths`.

8. **Topic difficulty badge styling** — `ui` `easy`
   Color-coded pill for `beginner` / `intermediate` / `advanced` on topic cards.

9. **Print-friendly stylesheet for topic pages** — `ui` `easy`
   `@media print` rules: hide nav/footer, expand code blocks, black-on-white.

10. **Remove sample `/api/test` route** — `bug` `easy`
    Delete `src/app/api/test/route.ts` once a real API is in place.

11. **Lock Node engine in `package.json`** — `infra` `easy`
    Add `"engines": { "node": ">=20" }` to match the Cloudflare Workers build runtime.

12. **Document the `Topic` content authoring format** — `docs` `easy`
    Style guide for writing topic content (headings, code blocks, resources).

## Medium — solid contributions

13. **Add a DevOps learning path** — `content` `medium`
    Create `src/data/paths/devops.json` (CI/CD, Docker, Kubernetes, IaC, monitoring) and wire it into `src/data/index.ts`.

14. **Add a TypeScript topic to the Frontend path** — `content` `medium`
    New topic covering TS basics, types, generics, and TSX with curated resources.

15. **Expand Backend path with Auth & Authorization topics** — `content` `medium`
    Topics for sessions, JWT, OAuth2 basics; include code examples.

16. **Search across paths and topics** — `feature` `ui` `medium`
    Client-side search bar on `/paths` filtering by title, description, level.

17. **Filter topics by level (beginner / intermediate / advanced)** — `feature` `ui` `medium`
    Toggle chips on path detail page.

18. **Mark topic as completed (local progress)** — `feature` `medium`
    Persist per-topic completion in `localStorage`; show progress per path.

19. **Render topic `content` as proper Markdown** — `feature` `medium`
    Replace ad-hoc rendering with a markdown renderer (e.g., `react-markdown`) + syntax highlighting (`shiki` or `rehype-highlight`).

20. **Prev / Next topic navigation** — `feature` `ui` `medium`
    On `[topicSlug]/page.tsx`, link to the previous and next topic by `order`.

21. **Add a sitemap and `robots.txt`** — `feature` `infra` `medium`
    Use Next.js metadata routes to generate `sitemap.xml` and `robots.txt`.

22. **SEO metadata per path and topic** — `feature` `medium`
    Per-route `generateMetadata` with title, description, OpenGraph and Twitter cards.

23. **Dynamic `og:image` generation** — `feature` `medium`
    Use `next/og` to render per-topic social preview images at the edge.

24. **RSS feed of newly added topics** — `feature` `medium`
    `app/feed.xml/route.ts` returning the latest topics across all paths.

25. **Bookmarks system (localStorage)** — `feature` `medium`
    Star icon on topic cards; `/bookmarks` page listing saved topics.

26. **Per-path table-of-contents sidebar** — `ui` `medium`
    Sticky left rail on path detail page listing topics with active-state highlighting.

27. **Mobile-responsive Navbar with hamburger menu** — `ui` `medium`
    Audit `Navbar.tsx` and `Footer.tsx` on small viewports.

28. **Add issue and PR templates** — `docs` `medium`
    `.github/ISSUE_TEMPLATE/` for bug, feature, content; `.github/pull_request_template.md`.

29. **Add `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`** — `docs` `medium`
    Move/expand contribution details out of the README; link from PR template.

30. **Add unit tests for data helpers** — `infra` `medium`
    Vitest or Jest covering `getPath`, `getTopic`, JSON schema validation.

31. **GitHub Actions CI** — `infra` `medium`
    Workflow that runs `npm ci`, `npm run lint`, `npm run build` on every PR to `dev`/`main`.

32. **Validate path/topic JSON at build time** — `infra` `medium`
    Zod schema check during `next build` to catch malformed data before deploy.

33. **Dark mode** — `ui` `medium`
    Tailwind-based theme toggle persisted in `localStorage`; respect `prefers-color-scheme`.

34. **Code playground embed (CodeSandbox / StackBlitz)** — `feature` `medium`
    Optional `embed` field on a topic's `Resource` that renders an inline runnable example.

35. **Accessibility pass (a11y)** — `ui` `medium`
    Keyboard nav, focus states, color contrast (WCAG AA), semantic landmarks, alt text.

## Hard — feature-sized work

36. **Migrate static JSON to MongoDB Atlas** — `infra` `hard`
    Define Mongoose models for `Path` and `Topic`, seed from existing JSON, swap `getPath`/`getTopic` to read from the DB. Set `MONGODB_URI` in Cloudflare.

37. **Add API routes for paths and topics** — `infra` `feature` `hard`
    `GET /api/paths`, `GET /api/paths/[slug]`, `GET /api/paths/[slug]/topics/[topicSlug]` backed by MongoDB.

38. **Landing page redesign** — `ui` `hard`
    Stronger hero, "How it works" section, featured paths, animated path graph, CTA to `/contribute`.

39. **User accounts via NextAuth** — `feature` `infra` `hard`
    GitHub OAuth, session storage in MongoDB or Cloudflare KV, protected routes for profile.

40. **Cloud-synced progress** — `feature` `hard`
    Once accounts ship, sync per-topic completion to the user's record so progress persists across devices.

41. **Quizzes / assessments per topic** — `feature` `hard`
    Multiple-choice and short-answer questions stored alongside topic content; results saved to user profile.

42. **Internationalization (i18n)** — `feature` `hard`
    `next-intl` setup, `/[locale]/` segment, translated UI strings, per-locale topic content overrides.

43. **Comment / discussion thread per topic** — `feature` `hard`
    Authenticated comments with markdown support, moderation flags, and rate limiting.

44. **Gamification: XP, badges, streaks, leaderboard** — `feature` `hard`
    Award XP for topic completion + quiz scores; weekly leaderboard backed by MongoDB.

45. **End-to-end tests with Playwright + visual regression** — `infra` `hard`
    Headless smoke tests for the critical flows; snapshot diffing in CI.

46. **Self-hostable Docker image + deployment guide** — `infra` `hard`
    Multi-stage `Dockerfile`, `docker-compose.yml` with MongoDB, docs covering env vars and reverse-proxy setup.

## Advanced — research / multi-week initiatives

47. **AI tutor powered by the Claude API** — `feature` `advanced`
    "Ask the tutor" panel on each topic; streams answers grounded in topic + resource content via prompt caching. Requires anonymous rate limiting and a server-side proxy.

48. **Personalized roadmap recommendations** — `feature` `advanced`
    Based on completion history, quiz scores, and self-reported goals, suggest the next topic / detect gaps. Hybrid rule-based + LLM scoring.

49. **Real-time collaborative learning rooms** — `feature` `advanced`
    Cloudflare Durable Objects-backed rooms where peers walk through a topic together: shared cursor, chat, synced quiz answers.

50. **Plugin / module system for community-built content packs** — `infra` `advanced`
    Define a pack manifest format, server-side validation, sandboxed runtime for custom React components in topics, marketplace listing page.

## Easy — round 2

51. **Add `LICENSE` file** — `docs` `easy`
    MIT (or chosen license) at the repo root with the correct year and owner.

52. **Add `CHANGELOG.md`** — `docs` `easy`
    Use Keep-a-Changelog format; backfill entries for the recent restructure and Cloudflare migration.

53. **README badges** — `docs` `easy`
    Build status, license, contributors, last commit, and "Cloudflare Workers" badges at the top of the README.

54. **Add Prettier config** — `infra` `easy`
    `.prettierrc` plus `npm run format`; document in CONTRIBUTING.

55. **Add `.editorconfig`** — `infra` `easy`
    Consistent indentation / line-ending rules across editors.

56. **Custom SVG icon per path** — `ui` `easy`
    Replace emoji/text icons with crisp inline SVGs in `PathCard.tsx`.

57. **Multiple favicon sizes** — `ui` `easy`
    16/32/180/512 px + `manifest.webmanifest` for PWA-grade icons.

58. **`cspell` spell-check config** — `infra` `easy`
    Word list + GitHub Actions step that flags typos in JSON content.

59. **Link checker in CI (`lychee`)** — `infra` `easy`
    Run on every PR; fail if any resource URL 404s.

60. **Footer: social links and version tag** — `ui` `easy`
    GitHub / X / Discord icons + `vX.Y.Z` (read from `package.json`) on the right.

61. **Add `humans.txt`** — `docs` `easy`
    Credit contributors at `/humans.txt`.

62. **Path card hover micro-interaction** — `ui` `easy`
    Subtle lift + shadow on hover; respect `prefers-reduced-motion`.

## Medium — round 2

63. **Add a Mobile Development path** — `content` `medium`
    React Native, Flutter, native iOS/Android intro topics.

64. **Add a Cybersecurity path** — `content` `medium`
    OWASP Top 10, secure auth, threat modeling, basic pentesting.

65. **Add a Cloud Computing path** — `content` `medium`
    AWS, GCP, Azure fundamentals; serverless vs. containers.

66. **Add a Databases path** — `content` `medium`
    Relational, NoSQL, indexing, transactions, modeling.

67. **Add an AI/ML path** — `content` `medium`
    Python basics, supervised vs. unsupervised, LLM application development.

68. **Add a Game Development path** — `content` `medium`
    Unity, Godot, web game basics with Canvas / WebGL.

69. **Path duration estimate** — `feature` `medium`
    Sum reading times across topics; show "~6h to complete" on path cards.

70. **Topic progress bar in Navbar** — `feature` `ui` `medium`
    Reading-progress bar that tracks scroll on topic pages.

71. **Keyboard shortcuts (`j`/`k`/`/`)** — `feature` `medium`
    Vim-style navigation across topics + `/` to focus search.

72. **Toast notification system** — `ui` `medium`
    Reusable toast for completion saves, copy-to-clipboard, errors.

73. **Newsletter signup (Resend)** — `feature` `medium`
    Email capture in footer; double opt-in via Resend audiences.

74. **Export progress as CSV/JSON** — `feature` `medium`
    Download button on `/profile` (or local progress page) with all completed topics.

75. **Embed YouTube/Vimeo in resources** — `feature` `medium`
    Render `type: "video"` resources with privacy-mode embeds.

76. **Glossary page** — `feature` `content` `medium`
    `/glossary` listing terms across all topics with anchor links back.

77. **FAQ page** — `content` `medium`
    Common contributor / learner questions with collapsible answers.

78. **"Recently updated" feed on landing** — `feature` `medium`
    Last 5 changed topics surfaced from the JSON / DB.

79. **Sticky "edit on GitHub" link per topic** — `feature` `medium`
    Direct contributors to the source JSON file for the current topic.

80. **Path completion certificate (PDF)** — `feature` `medium`
    Generate a PDF certificate when all topics in a path are completed.

81. **Per-topic difficulty estimate from content length** — `feature` `medium`
    Heuristic to flag mismatched levels (e.g., 50-line "beginner" topics).

82. **Algolia-free instant search via Pagefind** — `feature` `medium`
    Static search index built at build time.

## Hard — round 2

83. **Migrate progress / accounts to Cloudflare D1** — `infra` `hard`
    SQLite-backed D1 instead of Mongo for low-latency edge reads. Provide a migration script.

84. **Notion-style WYSIWYG editor for contributors** — `feature` `hard`
    Admin-only editor at `/admin/topics/[id]` writing back to JSON via PR.

85. **Topic versioning + edit history** — `feature` `hard`
    Track changes per topic with diff view and rollback (Git-backed or DB-backed).

86. **Discord bot announcing new topics** — `infra` `hard`
    Webhook on merge to `main` that posts to a configured Discord channel.

87. **Email notifications via Resend** — `feature` `infra` `hard`
    Comment replies, new topic in followed path, weekly digest.

88. **Admin moderation dashboard** — `feature` `hard`
    Flag / hide comments, ban users, review reported content.

89. **Full-text search via MeiliSearch** — `infra` `feature` `hard`
    Self-hosted index with typo tolerance, faceting by path/level.

90. **GraphQL API alongside REST** — `infra` `hard`
    Apollo Server (or GraphQL Yoga) on a Worker route; schema generated from data types.

91. **Edge caching + on-demand revalidation** — `infra` `hard`
    `revalidateTag` for paths/topics; purge from Cloudflare cache on content updates.

92. **Two-factor authentication (TOTP)** — `feature` `hard`
    Optional 2FA on user accounts using a standard authenticator app.

93. **Audit log for content changes** — `infra` `hard`
    Append-only log of who edited what topic, surfaced in the admin dashboard.

94. **Mentor / mentee matching** — `feature` `hard`
    Opt-in profiles; matching on path + level + timezone, with intro messages.

95. **Live cohorts (scheduled group sessions)** — `feature` `hard`
    Calendar of group walk-throughs of a path; RSVP, reminders, post-session notes.

96. **Performance budget + Lighthouse CI** — `infra` `hard`
    Fail PRs that regress LCP / TBT / bundle size beyond defined thresholds.

97. **Cloudflare Stream-hosted video lessons** — `feature` `hard`
    Optional video field per topic; transcoding + signed playback URLs.

## Advanced — round 2

98. **Vector search across topics with embeddings** — `feature` `advanced`
    Build embeddings on content, store in Cloudflare Vectorize, expose semantic-search endpoint and "related topics" widget.

99. **Adaptive spaced-repetition engine** — `feature` `advanced`
    SM-2 / FSRS algorithm against quiz items; daily review queue tailored per user.

100. **React Native companion app** — `feature` `advanced`
    Expo app reusing the public API; offline reading, push notifications for new topics, biometrics for sign-in.

---

## Picking up a task

1. Find a task labeled `ready to start` on the [project board](https://github.com/orgs/SJA-Pathway/projects/1/views/1).
2. Comment "I'd like to take this" on the linked GitHub issue (open one if it doesn't exist yet).
3. Fork → branch off `dev` → open a PR back into `dev` referencing the issue (`Closes #N`).
4. CI must pass: `npm run lint` and `npm run build`. The Cloudflare preview workflow will post a live URL on your PR.
