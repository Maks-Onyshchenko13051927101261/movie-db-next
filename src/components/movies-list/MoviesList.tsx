// A server component that fetches movie data from the service layer
//  and delegates rendering to the MoviesListCardsComponent.

import { movieService } from "@/services/movie.service";
import MoviesListCards from "./MoviesListCards";

type MoviesListProps = {
    page: number;
    query?: string;
    genre?: string;
};

const MoviesList = async ({ page, query, genre }: MoviesListProps) => {
    const movies = await movieService.getMovies({
        page,
        query,
        genre,
    });

    return <MoviesListCards movies={movies.results} />;
};

export default MoviesList;
