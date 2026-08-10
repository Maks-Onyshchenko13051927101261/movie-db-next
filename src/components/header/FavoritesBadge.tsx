"use client";

// Description: Small client-side badge displaying the active number of favorite movies
//  from localStorage.

import { localService } from "@/services/local.service";
import Link from "next/link";
import { useEffect, useState } from "react";

export const FavoritesBadge = () => {
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

export default FavoritesBadge;
