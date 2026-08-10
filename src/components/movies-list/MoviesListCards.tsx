// A grid layout component that renders a collection of movie cards, and handles loading and error states

import { IMovieModel } from "@/models/IMovieModel";
import MovieListCard from "../movie-card/MovieListCard";

type Props = {
    movies: IMovieModel[];
};

const MoviesListCards = ({ movies }: Props) => {
    if (!movies || movies.length === 0) {
        return <p>No movies found.</p>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesListCards;
