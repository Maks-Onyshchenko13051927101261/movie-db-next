// The primary interactive unit of the catalog. It encapsulates movie data, navigation,
// and state-driven "favorite" toggling. Uses React.memo for performance optimization during large list renders.

import { IMovieModel } from "@/models/IMovieModel";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import MovieInfo from "./MovieInfo";
import PosterPreview from "./PosterPreview";
import StarsRating from "./StarsRating";

type MoviePropsType = {
    movie: IMovieModel;
};

export const MovieListCard = ({ movie }: MoviePropsType) => {
    const { id, title, overview, poster_path, vote_average, genre_ids } = movie;

    return (
        <div className="relative group w-full sm:w-[220px] bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/80 flex flex-col h-full overflow-hidden">
            {/* Client favorite button */}
            <FavoriteButton movie={movie} />

            {/* Link to movie details */}
            <Link
                href={`/movies/${id}`}
                className="block overflow-hidden relative group-hover:opacity-95 transition-opacity"
            >
                <PosterPreview path={poster_path} alt={title} />
            </Link>

            {/* Information block */}
            <div className="p-3.5 flex flex-col grow justify-between gap-2">
                <div>
                    <StarsRating rating={vote_average} />
                    <MovieInfo title={title} overview={overview} genreIds={genre_ids} />
                </div>
            </div>
        </div>
    );
};

export default MovieListCard;
