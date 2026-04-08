export interface Resource {
  title: string;
  url: string;
  type: "docs" | "tutorial" | "article" | "video";
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  order: number;
  content: string;
  resources: Resource[];
}

export interface Path {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}
