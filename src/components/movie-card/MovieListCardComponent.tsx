// The primary interactive unit of the catalog. It encapsulates movie data, navigation and state-driven "favorite" toggling

import { IMovieModel } from "@/models/IMovieModel";
import { imageUrl } from "@/services/api.config";
import Image from "next/image";

type MoviePropsType = {
    movie: IMovieModel;
};

export const MovieListCardComponent = ({ movie }: MoviePropsType) => {
    const { title, overview, poster_path, vote_average, genre_ids } = movie;
    const posterUrl = poster_path ? `${imageUrl}${poster_path}` : "/images/no-poster.png";
    return (
        <div>
            <h2>{title}</h2>
            <p>{overview}</p>
            <Image src={posterUrl} alt={title} width={300} height={450} />
            <p>Rating: {vote_average}</p>
            <p>Genres: {genre_ids.join(", ")}</p>
        </div>
    );
};
