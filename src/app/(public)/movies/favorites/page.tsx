// src/app/(public)/favorites/page.tsx

import FavoritesMovies from "@/components/favorites-movies/FavoritesMovies";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Favorites | MovieStorm",
    description: "Your saved collection of favorite movies.",
};

export default function FavoritesPage() {
    return (
        <main>
            <FavoritesMovies />
        </main>
    );
}
