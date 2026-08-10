import MoviesList from "@/components/movies-list/MoviesList";

type HomePageProps = {
    searchParams: Promise<{
        page?: string;
        query?: string;
        genre?: string;
    }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
    const params = await searchParams;

    return <MoviesList page={Number(params.page ?? 1)} query={params.query} genre={params.genre} />;
}
