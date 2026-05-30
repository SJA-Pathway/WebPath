import FrontendData from "@/data/paths/frontend.json";
import BackendData from "@/data/paths/backend.json";
import FullstackData from "@/data/paths/fullstack.json";
// Add more paths as needed

type Topic = {
  slug: string;
  title: string;
  description: string;
  order: number;
};

type PathData = {
  slug: string;
  topics: Topic[];
};

type FeedItem = {
  title: string;
  description: string;
  slug: string;
  pathSlug: string;
};

let cachedXml: string | null = null;
let lastBuildTime = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes
const BASE_URL = "https://dev.webpath.sjapathway.com";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Get latest topic per path (by highest order)
function getLatestTopic(path: PathData, pathSlug: string): FeedItem | null {
  const topics = path?.topics;
  if (!Array.isArray(topics) || topics.length === 0) return null;

  const latest = [...topics].sort((a, b) => b.order - a.order)[0];

  return {
    title: latest.title,
    description: latest.description,
    slug: latest.slug,
    pathSlug,
  };
}

const paths: PathData[] = [
  FrontendData,
  BackendData,
  FullstackData,
];

export async function GET() {
  const now = Date.now();

  // Send cached version if still valid
  if (cachedXml && now - lastBuildTime < CACHE_TTL) {
    return new Response(cachedXml, {
      headers: {
        "Content-Type": "application/rss+xml",
        "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
      },
    });
  }

  // Build latest items per path I used order for latest topic, but you can also use createdAt in the future if available
  const latestTopics = paths
    .map((path) => getLatestTopic(path, path.slug))
    .filter(Boolean) as FeedItem[];


  // Since this is a bit messy I'll explain, I need to show 5 items in the feed, but I wanted to show at least 1 latest topic from each path,
  // so I pick the latest topic from each path first, then I fill the remaining slots with the next highest order topics across all paths, 
  // while preventing duplicates from the first step. This way we get a mix of the latest topics.

  const allTopics = paths.flatMap((path) =>
    path.topics.map((topic) => ({
      title: topic.title,
      description: topic.description,
      slug: topic.slug,
      pathSlug: path.slug,
      order: topic.order,
    }))
  );

  // Prevent duplicates (already used in latestTopics)
  const usedSlugs = new Set(latestTopics.map((t) => t.slug));

  // Pick top 2 highest order remaining topics
  const additionalTopics = allTopics
    .filter((t) => !usedSlugs.has(t.slug))
    .sort((a, b) => b.order - a.order)
    .slice(0, 2);

  // Merge feed
  const finalTopics = [...latestTopics, ...additionalTopics];

  // Convert to RSS items
  const items = finalTopics
    .map((t) => {
      return `
        <item>
          <title>${escapeXml(t.title)}</title>
          <link>${BASE_URL}/paths/${t.pathSlug}/${t.slug}</link>
          <description>${escapeXml(t.description)}</description>
        </item>`;
    })
    .join("");

  // Build final RSS feed
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0">
      <channel>
          <title>Learning Paths Feed</title>
          <link>${BASE_URL}/</link>
          <description>Latest topic from each learning path</description>
          ${items}
      </channel>
      </rss>`;

  // Cache the generated XML
    cachedXml = xml;
    lastBuildTime = now;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
    },
  });
} 