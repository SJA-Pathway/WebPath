import { notFound } from "next/navigation";
import Link from "next/link";
import { paths, getTopic } from "@/data";

export function generateStaticParams() {
  return paths.flatMap((p) =>
    p.topics.map((t) => ({ pathSlug: p.slug, topicSlug: t.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pathSlug: string; topicSlug: string }>;
}) {
  const { pathSlug, topicSlug } = await params;
  const result = getTopic(pathSlug, topicSlug);
  if (!result) return {};
  return {
    title: `${result.topic.title} | ${result.path.title} | WebPath`,
    description: result.topic.description,
  };
}

function parseContent(raw: string) {
  const lines = raw.split("\n");
  const elements: { type: string; content: string }[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push({ type: "code", content: codeBuffer.join("\n") });
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push({ type: "h2", content: line.slice(3) });
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
      if (match) {
        elements.push({
          type: "li-bold",
          content: `<strong>${match[1]}</strong>: ${match[2]}`,
        });
      }
    } else if (line.startsWith("- ")) {
      elements.push({ type: "li", content: line.slice(2) });
    } else if (line.trim()) {
      elements.push({ type: "p", content: line });
    }
  }

  return elements;
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ pathSlug: string; topicSlug: string }>;
}) {
  const { pathSlug, topicSlug } = await params;
  const result = getTopic(pathSlug, topicSlug);
  if (!result) notFound();

  const { path, topic } = result;
  const sorted = [...path.topics].sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex((t) => t.slug === topic.slug);
  const prev = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const next = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  const elements = parseContent(topic.content);

  return (
    <>
      <div className="page-header">
        <div className="breadcrumb">
          <Link href="/paths">Paths</Link>
          <span>/</span>
          <Link href={`/paths/${path.slug}`}>{path.title}</Link>
          <span>/</span>
          <span>{topic.title}</span>
        </div>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </div>

      <div className="topic-detail">
        <div className="topic-content">
          {elements.map((el, i) => {
            if (el.type === "h2") return <h2 key={i}>{el.content}</h2>;
            if (el.type === "code")
              return (
                <pre key={i}>
                  <code>{el.content}</code>
                </pre>
              );
            if (el.type === "li-bold")
              return (
                <ul key={i}>
                  <li dangerouslySetInnerHTML={{ __html: el.content }} />
                </ul>
              );
            if (el.type === "li")
              return (
                <ul key={i}>
                  <li>{el.content}</li>
                </ul>
              );
            return <p key={i}>{el.content}</p>;
          })}
        </div>

        {topic.resources.length > 0 && (
          <div className="resources-section">
            <h2>Resources</h2>
            <div className="resource-list">
              {topic.resources.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-item"
                >
                  <span>{r.title}</span>
                  <span className="resource-type">{r.type}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="topic-nav">
          {prev ? (
            <Link href={`/paths/${path.slug}/${prev.slug}`}>
              &larr; {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/paths/${path.slug}/${next.slug}`}>
              {next.title} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </>
  );
}
