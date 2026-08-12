// Client component for toggling dark/light theme status.

"use client";

import { THEME_UPDATED_EVENT } from "@/constants/events";
import { localService } from "@/services/local.service";
import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
    window.addEventListener(THEME_UPDATED_EVENT, callback);
    return () => window.removeEventListener(THEME_UPDATED_EVENT, callback);
};

const getSnapshot = () => {
    const saved = localService.getTheme() ?? "";
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getServerSnapshot = () => false;

const ThemeToggle = () => {
    const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggleTheme = () => {
        const nextState = !isDark;
        localService.setTheme(nextState ? "dark" : "light");
        document.documentElement.classList.toggle("dark", nextState);
        window.dispatchEvent(new Event(THEME_UPDATED_EVENT));
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="text-xl transition-transform hover:scale-110 active:rotate-12 outline-none cursor-pointer p-1"
            title="Toggle Dark Mode"
        >
            {isDark ? "☀️" : "🌙"}
        </button>
    );
};

export default ThemeToggle;
