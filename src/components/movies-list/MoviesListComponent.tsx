// A grid layout component that renders a collection of movie cards, and handles loading and error states

import { IMovieModel } from "@/models/IMovieModel";
import { MovieCardComponent } from "../movie-card/MovieCardComponent";

type Props = {
    movies: IMovieModel[];
    error: string | null;
};

export const MoviesListComponent = ({movies, error}: Props) => {
    if (!movies || movies.length === 0) {
        return <p>{error}</p>;
    };

    return (
        <div>
            {movies.map((movie) => (
                <MovieCardComponent key={movie.id} movie={movie} />
            ))}
        </div>
    );
};