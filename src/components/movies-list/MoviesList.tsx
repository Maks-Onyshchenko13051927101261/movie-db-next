// A server component that fetches movie data from the service layer
//  and delegates rendering to the MoviesListCardsComponent.
import { movieService } from "@/services/movie.service";
import MoviesListCardsComponent from "./MoviesListCardsComponent";

type MoviesListProps = {
    page: number;
};

const MoviesList = async ({ page }: MoviesListProps) => {
    const movies = await movieService.getAll(page);

    return <MoviesListCardsComponent movies={movies.results} />;
};

export default MoviesList;
