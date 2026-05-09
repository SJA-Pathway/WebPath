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
        <div>
            <div>
                <PillFilter onChange={setFilter} />
            </div>
            <div className="topics-list">
                {filteredTopics.map((topic, i) => (
                    <TopicCard
                        key={topic.slug}
                        topic={topic}
                        pathSlug={pathSlug}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}