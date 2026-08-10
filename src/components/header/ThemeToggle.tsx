"use client";

// Description: Client component for toggling dark/light theme status.

import { useEffect, useState } from "react";

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return false;
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className="text-xl transition-transform hover:scale-110 active:rotate-12 outline-none cursor-pointer p-1"
            title="Toggle Dark Mode"
        >
            {isDark ? "☀️" : "🌙"}
        </button>
    );
};

export default ThemeToggle;
