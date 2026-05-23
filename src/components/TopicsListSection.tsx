"use client";

import { useState } from "react";
import PillFilter, { Level } from "./PillFilter";
import TopicCard from "./TopicCard";
import { Topic } from "@/data";

interface TopicsListSectionProps {
    topics: Topic[];
    pathSlug: string;
}

export default function TopicsListSection({ topics, pathSlug }: TopicsListSectionProps) {
    const [filter, setFilter] = useState<Level[]>([]);
    const filteredTopics = filter.length === 0 ? topics : topics.filter(t => filter.includes(t.level as Level));
    
    return (
        <div className="mx-auto max-w-6xl space-y-6">
            <div>
                <PillFilter onChange={setFilter} />
            </div>
            <div className="grid gap-6">
                {filteredTopics.map((topic) => {
                    const originalIndex = topics.findIndex(t => t.slug === topic.slug);
                    return (
                        <TopicCard
                            key={topic.slug}
                            topic={topic}
                            pathSlug={pathSlug}
                            index={originalIndex}
                        />
                    );
                })}
            </div>
        </div>
    );
}