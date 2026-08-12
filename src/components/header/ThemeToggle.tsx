"use client";
// Client component for toggling dark/light theme status.

import { THEME_UPDATED_EVENT } from "@/constants/events";
import { localService } from "@/services/local.service";
import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
    window.addEventListener(THEME_UPDATED_EVENT, callback);
    window.addEventListener("storage", callback);

    return () => {
        window.removeEventListener(THEME_UPDATED_EVENT, callback);
        window.removeEventListener("storage", callback);
    };
};

const getSnapshot = () => localService.getTheme() || "dark";
const getServerSnapshot = () => "dark";

export const ThemeToggle = () => {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const isDark = theme === "dark";

    const toggleTheme = () => {
        const nextTheme = isDark ? "light" : "dark";
        localService.setTheme(nextTheme);
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
