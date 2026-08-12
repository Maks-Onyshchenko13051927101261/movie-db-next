// @file Movie Details Page
// @module app/(public)/movies/[id]/page
// Dynamic route component for displaying comprehensive information about a single movie.
// Fetches targeted movie metadata by ID, including poster backdrops, detailed overviews,
// genres, ratings, and runtime specifications.

import MovieDetails from "@/components/movie-details/MovieDetails";
import { movieService } from "@/services/movie.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { id } = await params;
    const movie = await movieService.getById(id).catch(() => null);

    if (!movie) {
        return {
            title: "Movie Not Found | MovieStorm",
        };
    }

    return {
        title: `${movie.title} | MovieStorm`,
        description: movie.overview || `Watch details for ${movie.title}`,
    };
};

const MoviePage = async ({ params }: Props) => {
    const { id } = await params;
    const movie = await movieService.getById(id).catch(() => null);

    if (!movie) {
        notFound();
    }

    return (
        <main className="min-h-[calc(100vh-80px)] bg-white dark:bg-gray-950 transition-colors">
            <MovieDetails movie={movie} />
        </main>
    );
};

export default MoviePage;
