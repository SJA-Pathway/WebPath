import { Path, Topic } from "./types";
import frontend from "./paths/frontend.json";
import backend from "./paths/backend.json";
import fullstack from "./paths/fullstack.json";

export const paths: Path[] = [frontend, backend, fullstack] as Path[];

export function getPath(slug: string): Path | undefined {
  return paths.find((p) => p.slug === slug);
}

export function getTopic(
  pathSlug: string,
  topicSlug: string
): { path: Path; topic: Topic } | undefined {
  const path = getPath(pathSlug);
  if (!path) return undefined;
  const topic = path.topics.find((t) => t.slug === topicSlug);
  if (!topic) return undefined;
  return { path, topic };
}

export type { Path, Topic, Resource } from "./types";
