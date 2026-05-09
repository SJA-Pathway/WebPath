"use client";

import { useState } from "react";

interface SearchBarProps {
    placeholder?: string;
    onChange: (value: string) => void;
}

export default function SearchBar({
    placeholder = "Search...",
    onChange,
}: SearchBarProps) {
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange(newValue);
    };

    const handleClear = () => {
        setValue("");
        onChange("");
    };

    return (
        <div className="w-full">
            <label htmlFor="search" className="sr-only">
                Search
            </label>

            <div className="relative w-full">
                <input
                    id="search"
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    style={{ paddingLeft: "1rem", paddingRight: value ? "2rem" : "1rem" }}
                    className="w-full h-9 rounded-lg bg-gray-50 border border-gray-200 text-sm leading-normal outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />

                {value && (
                    <button
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                        aria-label="Clear search"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
}