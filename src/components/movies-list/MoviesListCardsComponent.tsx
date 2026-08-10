// A grid layout component that renders a collection of movie cards, and handles loading and error states

import { IMovieModel } from "@/models/IMovieModel";
import MovieListCardComponent from "../movie-card/MovieListCardComponent";

type Props = {
    movies: IMovieModel[];
};

const MoviesListCardsComponent = ({ movies }: Props) => {
    if (!movies || movies.length === 0) {
        return <p>No movies found.</p>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieListCardComponent key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesListCardsComponent;
