import MoviesList from "@/components/movies-list/MoviesList";
import { Pagination } from "@/components/pagination/Pagination";

type HomePageProps = {
    searchParams: Promise<{
        page?: string;
        query?: string;
        genre?: string;
    }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
    const { page, query, genre } = await searchParams;

    const currentPage = Number(page ?? 1);

    return (
        <main className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-8 min-h-[calc(100vh-140px)]">
            <MoviesList page={currentPage} query={query} genre={genre} />

            <Pagination totalPages={500} currentPage={currentPage} query={query} genre={genre} />
        </main>
    );
}
