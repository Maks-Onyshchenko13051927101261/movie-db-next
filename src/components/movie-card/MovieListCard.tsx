// The primary interactive unit of the catalog. It encapsulates movie data, navigation,
// and state-driven "favorite" toggling. Uses React.memo for performance optimization during large list renders.

import { IMovieModel } from "@/models/IMovieModel";
import Link from "next/link";
import MovieInfo from "./MovieInfo";
import PosterPreview from "./PosterPreview";
import StarsRating from "./StarsRating";

type MoviePropsType = {
    movie: IMovieModel;
};

export const MovieListCard = ({ movie }: MoviePropsType) => {
    const { id, title, overview, poster_path, vote_average, genre_ids } = movie;

    return (
        <div className="relative group w-[220px] bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full overflow-hidden">
            {/* Wrapper with a link to the movie's detailed page */}
            <Link href={`/movies/${id}`} className="block overflow-hidden">
                <PosterPreview path={poster_path} alt={title} />
            </Link>

            {/* Information block */}
            <div className="p-3 flex flex-col grow justify-between gap-2">
                <div>
                    <StarsRating rating={vote_average} />
                    <MovieInfo title={title} overview={overview} genreIds={genre_ids} />
                </div>
            </div>
        </div>
    );
};

export default MovieListCard;
