"use client";

// The application's navigation hub. Features a responsive layout,
// dark mode toggle, search bar, genres menu, and user favorites integration.

import { IGenre } from "@/models/IGenreModel";
import { localService } from "@/services/local.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import GenresList from "../genres-list/GenresList";
import SearchForm from "../search-form/SearchForm";
import UserInfo from "../user-info/UserInfo";

// --- Theme switcher (Light / Dark) ---
const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Initialize theme on page load
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);

        if (nextDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            type="button"
            className="text-xl transition-transform hover:scale-110 active:rotate-12 outline-none cursor-pointer p-1"
            title="Toggle Dark Mode"
        >
            {isDark ? "☀️" : "🌙"}
        </button>
    );
};

// --- Favorite counter ---
const FavoritesBadge = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            const favs = localService.getFavorites();
            setCount(favs.length);
        };

        updateCount();
        window.addEventListener("storage", updateCount);
        return () => window.removeEventListener("storage", updateCount);
    }, []);

    return (
        <Link
            href="/movies/favorites"
            className="flex items-center gap-1.5 font-bold transition-all hover:scale-105 active:scale-95 group"
            title="Go to Favorites"
        >
            <span className="text-lg group-hover:animate-bounce">⭐</span>
            <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md shadow-orange-500/20 font-black min-w-[20px] text-center">
                {count}
            </span>
        </Link>
    );
};

// --- Main Header ---
type HeaderProps = {
    genres?: IGenre[];
    activeGenreId?: string;
};

export const Header = ({ genres = [], activeGenreId }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/80 dark:border-gray-800 transition-colors duration-300 shadow-sm">
            {/* Top row: Logo, Search, Theme, Favorites, Profile */}
            <div className="flex flex-row justify-between items-center px-4 sm:px-6 h-16 max-w-7xl mx-auto gap-4">
                {/* Logo */}
                <Link
                    href="/?page=1"
                    className="text-xl sm:text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity flex-shrink-0 text-gray-900 dark:text-white uppercase"
                >
                    MOVIE<span className="text-orange-500">STORM</span>
                </Link>

                {/* Desktop search */}
                <div className="flex-1 max-w-md hidden sm:flex items-center justify-center">
                    <SearchForm />
                </div>

                {/* Right side: Theme, Favorites, User Info */}
                <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0 justify-end">
                    <ThemeToggle />
                    <FavoritesBadge />
                    <UserInfo />
                </div>
            </div>

            {/* Mobile search */}
            <div className="sm:hidden px-4 pb-3">
                <SearchForm />
            </div>

            {/* Bottom bar with genres */}
            {genres.length > 0 && (
                <div className="border-t border-gray-100 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-950/40 px-4 py-1.5 overflow-x-auto no-scrollbar">
                    <GenresList genres={genres} activeGenreId={activeGenreId} />
                </div>
            )}
        </header>
    );
};

export default Header;
