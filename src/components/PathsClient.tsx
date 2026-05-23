"use client";

import { useMemo, useState } from "react";
import { Path } from "@/data/types";
import PathCard from "./PathCard";
import SearchBar from "./SearchBar";

export default function PathsClient({ paths }: { paths: Path[] }) {
    const [query, setQuery] = useState("");

    const filteredPaths = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return paths;

        return paths.filter((path) => {
            const matchesTitle = path.title.toLowerCase().includes(q);
            const matchesDescription = path.description
                .toLowerCase()
                .includes(q);
            const matchesLevel = path.topics.some((topic) =>
                topic.level.toLowerCase().includes(q)
            );

            return matchesTitle || matchesDescription || matchesLevel;
        });
    }, [query, paths]);

    return (
        <>
            <div className="section">
                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        <SearchBar
                            placeholder="Search paths by name, description, or level..."
                            onChange={setQuery}
                        />
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="paths-grid">
                    {filteredPaths.length > 0 ? (
                        filteredPaths.map((path) => (
                            <PathCard key={path.slug} path={path} />
                        ))
                    ) : (
                        <div className="col-span-full">
                            <p className="text-center text-sm md:text-base text-muted-foreground py-12">
                                No paths found.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}