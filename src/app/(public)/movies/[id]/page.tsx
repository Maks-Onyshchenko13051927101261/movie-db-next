import { movieService } from "@/services/movie.service";
import { FC } from "react";

type Props = { params: Promise<{ id: string }> };

export const generateMetadata = async ({ params }: Props) => {
    const { id } = await params;
    const movie = await movieService.getMovieById(id).catch(() => null);

    if (!movie) {
        return {
            title: "Movie Not Found",
        };
    }
    return {
        title: movie.title,
    };
};

const MoviePage: FC<Props> = async ({ params }) => {
    const { id } = await params;
    const movie = await movieService.getMovieById(id).catch(() => null);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>
    );
};

export default MoviePage;
