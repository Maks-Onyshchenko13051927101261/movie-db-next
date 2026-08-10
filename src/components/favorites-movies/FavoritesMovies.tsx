"use client";

// Displays the user's favorite movies stored in localStorage.
// Reuses the shared MoviesListCards to keep the UI consistent.

import { IMovieModel } from "@/models/IMovieModel";
import { localService } from "@/services/local.service";
import { useEffect, useState } from "react";
import MoviesListCards from "../movies-list/MoviesListCards";

const FavoritesMovies = () => {
    const getInitialFavorites = (): IMovieModel[] => {
        if (typeof window === "undefined") {
            return [];
        }

        return localService.getFavorites();
    };

    const [favorites, setFavorites] = useState<IMovieModel[]>(getInitialFavorites);

    useEffect(() => {
        const handleStorageChange = () => {
            setFavorites(localService.getFavorites());
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
        <section className="max-w-7xl mx-auto py-10 px-5">
            <div className="flex items-center gap-4 mb-8 border-l-4 sm:border-l-8 border-orange-500 pl-4 sm:pl-6">
                <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-gray-100">
                    My <span className="text-orange-500">Favorites</span>
                </h1>

                <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50">
                    {favorites.length} {favorites.length === 1 ? "movie" : "movies"}
                </span>
            </div>

            {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center py-20 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 my-6">
                    <span className="text-5xl mb-4">🍿</span>
                    <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
                        Your favorites list is empty
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Explore movies and click the heart icon to save them here!
                    </p>
                </div>
            ) : (
                <MoviesListCards movies={favorites} error={null} />
            )}
        </section>
    );
};

export default FavoritesMovies;
