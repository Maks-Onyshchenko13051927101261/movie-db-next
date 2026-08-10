// A grid layout component that renders a collection of movie cards, and handles loading and error states

import { IMovieModel } from "@/models/IMovieModel";
import MovieListCard from "../movie-card/MovieListCard";

type Props = {
    movies: IMovieModel[];
    error?: string | null;
};

const MoviesListCards = ({ movies, error }: Props) => {
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <p className="text-red-500 font-medium bg-red-50 dark:bg-red-950/30 px-4 py-2 rounded-lg border border-red-200 dark:border-red-800">
                    {error}
                </p>
            </div>
        );
    }

    if (!movies || movies.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <p className="text-gray-500 dark:text-gray-400 font-medium">No movies found.</p>
            </div>
        );
    }

    return (
        // Tailwind Grid: from mobile to desktop
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center py-6">
            {movies.map((movie) => (
                <MovieListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesListCards;
