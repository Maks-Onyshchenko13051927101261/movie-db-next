// A horizontal navigation bar for genre-based discovery.
// Transforms a static list into a scrollable set of interactive "pills"
//  that update the global search context.

import { IGenre } from "@/models/IGenreModel";
import Link from "next/link";

type GenresNavProps = {
    genres: IGenre[];
    activeGenreId?: string;
};

export const GenresNav = ({ genres, activeGenreId }: GenresNavProps) => {
    return (
        <nav className="flex flex-wrap gap-2 py-3 justify-center" aria-label="Genre discovery">
            <Link
                href="/?page=1"
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                    !activeGenreId
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 border border-gray-200 dark:border-gray-700"
                }`}
            >
                All
            </Link>

            {genres.map((genre) => {
                const isActive = activeGenreId === genre.id.toString();

                return (
                    <Link
                        key={genre.id}
                        href={`/?genre=${genre.id}&page=1`}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                            isActive
                                ? "bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 border border-gray-200 dark:border-gray-700"
                        }`}
                    >
                        {genre.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default GenresNav;
