"use client";

// Description: Small interactive button to toggle
// movie favorites state inside localStorage.

import { MouseEvent, useState } from "react";

import { FAVORITES_UPDATED_EVENT } from "@/constants/events";
import { IMovieModel } from "@/models/IMovieModel";
import { localService } from "@/services/local.service";

type FavoriteButtonProps = {
    movie: IMovieModel;
};

const FavoriteButton = ({ movie }: FavoriteButtonProps) => {
    const [isFavorite, setIsFavorite] = useState(() => {
        if (typeof window === "undefined") {
            return false;
        }

        return localService.isFavorite(movie.id);
    });

    const toggleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (isFavorite) {
            localService.removeFavorite(movie.id);
        } else {
            localService.addFavorite(movie);
        }

        setIsFavorite((prev) => !prev);

        window.dispatchEvent(new Event(FAVORITES_UPDATED_EVENT));
    };

    return (
        <button
            type="button"
            onClick={toggleFavorite}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="absolute top-2 right-2 z-10 rounded-full bg-black/40 p-2 backdrop-blur-md transition-all duration-200 hover:bg-black/60 active:scale-75 cursor-pointer"
        >
            <span
                className={`block text-base transition-transform duration-200 ${
                    isFavorite
                        ? "scale-110"
                        : "grayscale opacity-70 hover:opacity-100 hover:scale-110"
                }`}
            >
                {isFavorite ? "❤️" : "🤍"}
            </span>
        </button>
    );
};

export default FavoriteButton;
