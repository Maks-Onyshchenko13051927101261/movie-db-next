// A grid layout component that renders a collection of movie cards, and handles loading and error states

import { IMovieModel } from "@/models/IMovieModel";
import { MovieListCardComponent } from "../movie-card/MovieListCardComponent";

type Props = {
    movies: IMovieModel[];
    error: string | null;
};

export const MoviesListCardsComponent = ({ movies, error }: Props) => {
    if (!movies || movies.length === 0) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieListCardComponent key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
