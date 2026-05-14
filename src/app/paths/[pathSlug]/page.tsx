import { notFound } from "next/navigation";
import Link from "next/link";
import { paths, getPath } from "@/data";
import TopicCard from "@/components/TopicCard";
import { ChevronRight } from "lucide-react";

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
    title: `${path.title} | Cairn`,
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
    <main className="min-h-screen bg-slate-50">
      {/* Header مع معالجة الـ Navbar الثابت */}
      <div className="bg-[#0F172A] pt-32 pb-20">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8">
            <Link href="/paths" className="hover:text-white transition-colors">
              Paths
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#8B5CF6] truncate">{path.title}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter italic">
            {path.title}
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            {path.description}
          </p>
        </div>
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {sorted.map((topic, i) => (
            <TopicCard key={topic.slug} topic={topic} pathSlug={path.slug} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
