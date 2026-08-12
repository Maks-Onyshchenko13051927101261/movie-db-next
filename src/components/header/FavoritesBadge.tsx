"use client";

// Description: Small client-side badge displaying the active number of favorite movies from localStorage.

import { FAVORITES_UPDATED_EVENT } from "@/constants/events";
import { localService } from "@/services/local.service";
import Link from "next/link";
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

export const FavoritesBadge = () => {
    const favoritesRaw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const count = JSON.parse(favoritesRaw).length;

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

export default FavoritesBadge;
