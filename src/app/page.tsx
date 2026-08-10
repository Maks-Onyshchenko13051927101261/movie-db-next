import MoviesList from "@/components/movies-list/MoviesList";
import Pagination from "@/components/pagination/Pagination";
import { movieService } from "@/services/movie.service";

type HomePageProps = {
    searchParams: Promise<{
        page?: string;
        query?: string;
        genre?: string;
    }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
    const params = await searchParams;

    const page = Number(params.page ?? "1");
    const query = params.query ?? "";
    const genre = params.genre ?? "";

    const moviesData = await movieService.getMovies({
        page,
        query,
        genre,
    });

    return (
        <main>
            <MoviesList movies={moviesData.results} />

            {moviesData.total_pages > 1 && <Pagination totalPages={moviesData.total_pages} />}
        </main>
    );
}
