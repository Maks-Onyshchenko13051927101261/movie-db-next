// A server component that fetches movie data from the service layer
//  and delegates rendering to the MoviesListCardsComponent.

import { movieService } from "@/services/movie.service";
import MoviesListCards from "./MoviesListCards";

type MoviesListProps = {
    page: number;
};

const MoviesList = async ({ page }: MoviesListProps) => {
    const movies = await movieService.getAll(page);

    return <MoviesListCards movies={movies.results} />;
};

export default MoviesList;
