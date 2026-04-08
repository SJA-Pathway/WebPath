import { paths } from "@/data";
import PathCard from "@/components/PathCard";

export const metadata = {
  title: "All Paths | WebPath",
  description: "Explore all web development learning paths.",
};

export default function PathsPage() {
  return (
    <>
      <div className="page-header">
        <h1>All Learning Paths</h1>
        <p>
          Pick a path and start building your skills. Each path is a structured
          journey from beginner to advanced topics.
        </p>
      </div>
      <section className="section">
        <div className="paths-grid">
          {paths.map((path) => (
            <PathCard key={path.slug} path={path} />
          ))}
        </div>
      </section>
    </>
  );
}
