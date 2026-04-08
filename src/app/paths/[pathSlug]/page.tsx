import { notFound } from "next/navigation";
import Link from "next/link";
import { paths, getPath } from "@/data";
import TopicCard from "@/components/TopicCard";

export function generateStaticParams() {
  return paths.map((p) => ({ pathSlug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pathSlug: string }>;
}) {
  const { pathSlug } = await params;
  const path = getPath(pathSlug);
  if (!path) return {};
  return {
    title: `${path.title} | WebPath`,
    description: path.description,
  };
}

export default async function PathPage({
  params,
}: {
  params: Promise<{ pathSlug: string }>;
}) {
  const { pathSlug } = await params;
  const path = getPath(pathSlug);
  if (!path) notFound();

  const sorted = [...path.topics].sort((a, b) => a.order - b.order);

  return (
    <>
      <div className="page-header">
        <div className="breadcrumb">
          <Link href="/paths">Paths</Link>
          <span>/</span>
          <span>{path.title}</span>
        </div>
        <h1>{path.title}</h1>
        <p>{path.description}</p>
      </div>
      <section className="section">
        <div className="topics-list">
          {sorted.map((topic, i) => (
            <TopicCard
              key={topic.slug}
              topic={topic}
              pathSlug={path.slug}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
