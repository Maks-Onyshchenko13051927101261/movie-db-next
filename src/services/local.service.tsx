// Description: Client-side persistence layer for user preferences.
// Stores favorites and username in localStorage.

import {
    FAVORITES_UPDATED_EVENT,
    THEME_UPDATED_EVENT,
    USER_UPDATED_EVENT,
} from "@/constants/events";
import { IMovieModel } from "@/models/IMovieModel";

const FAVORITES_KEY = "favorites";
const EMPTY_FAVORITES = "[]";
const USER_KEY = "user";
const THEME_KEY = "theme";

export const localService = {
    getFavorites: (): IMovieModel[] =>
        JSON.parse(localStorage.getItem(FAVORITES_KEY) || EMPTY_FAVORITES),

    setFavorites: (data: IMovieModel[]) => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
        window.dispatchEvent(new Event(FAVORITES_UPDATED_EVENT));
    },

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

    getFavoritesSnapshot: () => localStorage.getItem(FAVORITES_KEY) ?? "[]",

    getUser: (): string | null => localStorage.getItem(USER_KEY),

    setUser: (user: string): void => {
        localStorage.setItem(USER_KEY, user);
        window.dispatchEvent(new Event(USER_UPDATED_EVENT));
    },

    getTheme: (): string | null => localStorage.getItem(THEME_KEY),

    setTheme: (theme: "light" | "dark"): void => {
        localStorage.setItem(THEME_KEY, theme);
        window.dispatchEvent(new Event(THEME_UPDATED_EVENT));
    },

    clearAll: () => {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(FAVORITES_KEY);
    },
};
