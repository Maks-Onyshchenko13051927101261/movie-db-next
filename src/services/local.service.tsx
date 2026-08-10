// Description: Client-side persistence layer for user preferences.
// Stores favorites and username in localStorage.

import { IMovieModel } from "@/models/IMovieModel";

const FAVORITES_KEY = "favorites";
const USER_KEY = "user";

export const localService = {
    // Favorites
    getFavorites: (): IMovieModel[] => {
        if (typeof window === "undefined") {
            return [];
        }

        return JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? "[]");
    },

    setFavorites: (data: IMovieModel[]): void => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
    },

    // User
    getUser: (): string | null => {
        if (typeof window === "undefined") return null;

        return localStorage.getItem(USER_KEY);
    },

    setUser: (user: string): void => {
        localStorage.setItem(USER_KEY, user);
    },

    // Clean all
    clearAll: (): void => {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(FAVORITES_KEY);
    },
};
