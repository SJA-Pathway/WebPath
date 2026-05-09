"use client";

import { useState } from "react";

export type Level = "all" | "beginner" | "intermediate" | "advanced";
const levels: Level[] = ["beginner", "intermediate", "advanced"];

interface PillFilterProps {
    onChange: (values: Level[]) => void;
}

export default function PillFilter({ onChange }: PillFilterProps) {
    const [selected, setSelected] = useState<Set<Level>>(new Set());

    const handleClick = (value: Level) => {
        const newSelected = new Set(selected);
        if (newSelected.has(value)) {
            newSelected.delete(value);
        } else {
            newSelected.add(value);
        }
        setSelected(newSelected);
        onChange(Array.from(newSelected) as Level[]);
    };
    
    return (
        <div className="flex gap-2">
            {levels.map((Level) => (
                <button
                    key={Level}
                    className={`pill-button ${selected.has(Level as Level) ? "active" : "inactive"}`}
                    onClick={() => handleClick(Level)}
                >
                    {Level.charAt(0).toUpperCase() + Level.slice(1)}
                </button>
            ))}
        </div>
    );
}