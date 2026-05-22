import { notFound } from "next/navigation";
import Link from "next/link";
import { paths, getTopic } from "@/data";
import ReactMarkdown from "react-markdown";

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

  

  return (
    <div className="topic-detail">
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
      
      {topic.videoId && (
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${topic.videoId}`}
            title={topic.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="topic-content">
        <ReactMarkdown>{topic.content}</ReactMarkdown>

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
    </div>
  );
}
