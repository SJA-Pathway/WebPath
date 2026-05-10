import PathsClient from "@/components/PathsClient";


export const metadata = {
  title: "All Paths | Cairn",
  description: "Explore all web development learning paths.",
};

export default async function PathsPage() {

  const response = await fetch("http://localhost:3000/api/paths");
  const paths = await response.json()

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