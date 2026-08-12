import { IGenre } from "@/models/IGenreModel";
import Link from "next/link";

const TMDB_GENRES: Record<number, string> = {
    12: "Adventure",
    14: "Fantasy",
    16: "Animation",
    18: "Drama",
    27: "Horror",
    28: "Action",
    35: "Comedy",
    36: "History",
    37: "Western",
    53: "Thriller",
    80: "Crime",
    99: "Documentary",
    878: "Sci-Fi",
    9648: "Mystery",
    10402: "Music",
    10749: "Romance",
    10751: "Family",
    10752: "War",
    10770: "TV Movie",
};

type GenreBadgeProps = {
    name: string;
};

export const GenreBadge = ({ name }: GenreBadgeProps) => {
    return (
        <span className="inline-block px-2 py-0.5 bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 text-[10px] font-bold rounded-md uppercase tracking-wider border border-orange-200 dark:border-orange-900/50 hover:bg-orange-500 hover:text-white transition-colors duration-200">
            {name}
        </span>
    );
};

type GenresListProps = {
    genreIds: number[];
    genres?: IGenre[];
    maxItems?: number;
};

export const GenresList = ({ genreIds, genres = [], maxItems = 2 }: GenresListProps) => {
    if (!genreIds || genreIds.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-1.5 min-h-[22px] items-center">
            {genreIds.slice(0, maxItems).map((genreId) => {
                const genre = genres.find((g) => g.id === genreId);
                const genreName = genre?.name || TMDB_GENRES[genreId] || `Genre ${genreId}`;

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
    );
};

export default GenreBadge;
