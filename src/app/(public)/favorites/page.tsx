// src/app/(public)/favorites/page.tsx

import FavoritesMovies from "@/components/favorites-movies/FavoritesMovies";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Favorites | MovieStorm",
    description: "Your saved collection of favorite movies.",
};

export default function FavoritesPage() {
    return (
        <main className="min-h-[calc(100vh-140px)] bg-white dark:bg-gray-950 transition-colors duration-300">
            <FavoritesMovies />
        </main>
    );
}
