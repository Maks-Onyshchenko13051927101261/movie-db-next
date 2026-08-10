// Description: Client-side persistence layer for user preferences.
// Stores favorites and username in localStorage.

import { IMovieModel } from "@/models/IMovieModel";

const FAVORITES_KEY = "favorites";
const USER_KEY = "user";

export const localService = {
    getFavorites: (): IMovieModel[] => JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"),

    setFavorites: (data: IMovieModel[]) =>
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(data)),

    isFavorite: (id: number) => {
        return localService.getFavorites().some((movie) => movie.id === id);
    },

    addFavorite: (movie: IMovieModel) => {
        const favorites = localService.getFavorites();

        if (!favorites.some((item) => item.id === movie.id)) {
            favorites.push(movie);
            localService.setFavorites(favorites);
        }
    },

    removeFavorite: (id: number) => {
        const favorites = localService.getFavorites().filter((movie) => movie.id !== id);

        localService.setFavorites(favorites);
    },

    getUser: () => localStorage.getItem(USER_KEY),

    setUser: (user: string) => localStorage.setItem(USER_KEY, user),

    clearAll: () => {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(FAVORITES_KEY);
    },
};
