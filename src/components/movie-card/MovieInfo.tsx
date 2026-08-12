// A content block that presents movie metadata, including titles and interactive genre tags.
// It automatically truncates long summaries to maintain layout integrity.

import { IGenre } from "@/models/IGenreModel";
import { GenresList } from "./GenreBadge";

type InfoPropsType = {
    title: string;
    overview: string;
    genreIds: number[];
    genres?: IGenre[];
};

export const MovieInfo = ({ title, overview, genreIds, genres }: InfoPropsType) => {
    return (
        <div className="flex flex-col gap-1.5 w-full m-0 p-0">
            <h3
                className="font-bold text-sm text-gray-900 dark:text-gray-100 uppercase tracking-tight line-clamp-1 leading-tight text-left"
                title={title}
            >
                {title}
            </h3>

            <GenresList genreIds={genreIds} genres={genres} maxItems={2} />

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 italic text-left">
                {overview || "Description missing."}
            </p>
        </div>
    );
};

export default MovieInfo;
