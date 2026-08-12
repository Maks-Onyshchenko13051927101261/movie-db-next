// A grid layout component that renders a collection of movie cards, and handles loading and error states

import { IMovieModel } from "@/models/IMovieModel";
import MovieListCard from "../movie-card/MovieListCard";

type Props = {
    movies: IMovieModel[];
    error?: string | null;
};

export const MoviesListCards = ({ movies, error }: Props) => {
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[350px] gap-3 text-center px-4">
                <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xl font-bold">
                    ⚠️
                </div>
                <p className="text-red-500 font-medium bg-red-500/10 px-4 py-2 rounded-xl border border-red-500/20 max-w-md text-sm">
                    {error}
                </p>
            </div>
        );
    }

    if (!movies || movies.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[350px] gap-2 text-center px-4">
                <span className="text-4xl opacity-60">🎬</span>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-base">
                    No movies found.
                </p>
            </div>
        );
    }

    return (
        /* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 — тримає безпечні поля зліва і справа */
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies.map((movie) => (
                    <MovieListCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviesListCards;
