import Link from "next/link";
import { Topic } from "@/data/types";

const levelColors: Record<string, string> = {
  beginner: "#10B981",
  intermediate: "#F59E0B",
  advanced: "#EF4444",
};

export default function TopicCard({
  topic,
  pathSlug,
  index,
}: {
  topic: Topic;
  pathSlug: string;
  index: number;
}) {
  return (
    <Link
      href={`/paths/${pathSlug}/${topic.slug}`}
      className="topic-card"
    >
      <div className="topic-card-order">{index + 1}</div>
      <div className="topic-card-body">
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
        <span
          className="topic-level"
          style={{ color: levelColors[topic.level] }}
        >
          {topic.level}
        </span>
      </div>
      <div className="topic-card-arrow">&rarr;</div>
    </Link>
  );
}
