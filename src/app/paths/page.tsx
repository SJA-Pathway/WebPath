import PathsClient from "@/components/PathsClient";
import { paths } from "@/data";


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

      <PathsClient paths={paths} />
    </>
  );
}