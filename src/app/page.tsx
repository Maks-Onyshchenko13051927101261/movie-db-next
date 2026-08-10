import MoviesList from "@/components/movies-list/MoviesList";

export default function Home() {
    return (
        <div>
            <MoviesList page={1} />
        </div>
    );
}
