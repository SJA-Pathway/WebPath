import Link from "next/link";
import { Path } from "@/data/types";

export default function PathCard({ path }: { path: Path }) {
  return (
    <Link href={`/paths/${path.slug}`} className="path-card">
      <div className="path-card-header" style={{ borderColor: path.color }}>
        <div className="path-card-icon" style={{ backgroundColor: path.color }}>
          {path.icon === "layout" && "🎨"}
          {path.icon === "server" && "⚙️"}
          {path.icon === "layers" && "🔗"}
        </div>
        <h3>{path.title}</h3>
      </div>
      <p>{path.description}</p>
      <div className="path-card-meta">
        <span>{path.topics.length} topics</span>
        <span className="path-card-arrow">&rarr;</span>
      </div>
    </Link>
  );
}
