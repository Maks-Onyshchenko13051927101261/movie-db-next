"use client";

// Description: Small interactive button to toggle
// movie favorites state inside localStorage.
// Client component for toggling favorite status using localService.

import { FAVORITES_UPDATED_EVENT } from "@/constants/events";
import { IMovieModel } from "@/models/IMovieModel";
import { localService } from "@/services/local.service";
import { useSyncExternalStore } from "react";

const SERVER_SNAPSHOT = "[]";

const subscribe = (callback: () => void) => {
    window.addEventListener(FAVORITES_UPDATED_EVENT, callback);
    window.addEventListener("storage", callback);

    return () => {
        window.removeEventListener(FAVORITES_UPDATED_EVENT, callback);
        window.removeEventListener("storage", callback);
    };
};

const getSnapshot = () => localService.getFavoritesSnapshot();
const getServerSnapshot = () => SERVER_SNAPSHOT;

interface FavoriteButtonProps {
    movie: IMovieModel;
}

export const FavoriteButton = ({ movie }: FavoriteButtonProps) => {
    const favoritesRaw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const favorites: IMovieModel[] = JSON.parse(favoritesRaw);
    const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

    const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (isFavorite) {
            localService.removeFavorite(movie.id);
        } else {
            localService.addFavorite(movie);
        }
    };

    return (
        <button
            type="button"
            onClick={toggleFavorite}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="absolute top-2 right-2 z-10 rounded-full bg-black/40 p-2 backdrop-blur-md transition-all hover:bg-black/60 cursor-pointer"
        >
            <span
                className={`block text-base transition-transform duration-200 ${
                    isFavorite ? "scale-110" : "grayscale opacity-70 hover:opacity-100"
                }`}
            >
                {isFavorite ? "❤️" : "🤍"}
            </span>
        </button>
    );
};

export default FavoriteButton;
