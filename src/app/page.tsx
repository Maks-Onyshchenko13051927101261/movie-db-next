// @file Main Catalog Page
// @module app/page
// Primary landing page of the application that renders the dynamic movie catalog.
// Features grid layouts, search and genre query synchronization via Next.js URL search params,
// and paginated data navigation.

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
        <main>
            <MoviesList page={currentPage} query={query} genre={genre} />

            <Pagination totalPages={500} currentPage={currentPage} query={query} genre={genre} />
        </main>
    );
}
