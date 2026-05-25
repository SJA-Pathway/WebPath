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
            {levels.map((level) => (
                <button
                    key={level}
                    onClick={() => handleClick(level)}
                    className={
                        `py-1.5 px-3 rounded-full border font-medium transition duration-200 ease-in-out cursor-pointer ` +
                        (selected.has(level as Level)
                            ? "bg-blue-600 text-white border-blue-600 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200")
                    }
                >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
            ))}
        </div>
    );
}