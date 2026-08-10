// A content block that presents movie metadata, including titles and interactive genre tags.
// It automatically truncates long summaries to maintain layout integrity.

import { IGenre } from "@/models/IGenreModel";
import Link from "next/link";
import GenreBadge from "./GenreBadge";

type InfoPropsType = {
    title: string;
    overview: string;
    genreIds: number[];
    genres?: IGenre[];
};

export const MovieInfo = ({ title, overview, genreIds, genres = [] }: InfoPropsType) => {
    return (
        <div className="flex flex-col gap-2 mt-3">
            {/* Movie title */}
            <h3
                className="font-bold text-base text-gray-900 dark:text-gray-100 uppercase tracking-tight line-clamp-1"
                title={title}
            >
                {title}
            </h3>

            {/* List of genres (Badge) */}
            <div className="flex flex-wrap gap-1.5 min-h-[24px]">
                {genreIds.slice(0, 3).map((genreId) => {
                    const genre = genres.find((g) => g.id === genreId);
                    const genreName = genre ? genre.name : `Genre ${genreId}`;

                    return (
                        <Link
                            key={genreId}
                            href={`/?genre=${genreId}&page=1`}
                            className="hover:scale-105 transition-transform"
                        >
                            <GenreBadge name={genreName} />
                        </Link>
                    );
                })}
            </div>

            {/* Movie description */}
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 italic">
                {overview || "Description missing."}
            </p>
        </div>
    );
};

export default MovieInfo;
