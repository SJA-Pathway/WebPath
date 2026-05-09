import Link from "next/link";
import { paths } from "@/data";
import PathCard from "@/components/PathCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          Mark the way through
          <br />
          <span className="highlight">Web Development</span>
        </h1>
        <p>
          Cairn is an open-source roadmap built stone by stone by the
          community. Every contributor adds a marker; every learner finds the
          way. Pick a path, learn at your pace, and leave a stone for whoever
          comes next.
        </p>
        <div className="hero-actions">
          <Link href="/paths" className="btn-primary">
            Explore Paths &rarr;
          </Link>
          <Link href="/contribute" className="btn-secondary">
            Contribute
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Learning Paths</h2>
        <p className="section-subtitle">
          Choose a path that matches your goals. Each path guides you from
          fundamentals to advanced topics.
        </p>
        <div className="paths-grid">
          {paths.map((path) => (
            <PathCard key={path.slug} path={path} />
          ))}
        </div>
      </section>
    </>
  );
}
