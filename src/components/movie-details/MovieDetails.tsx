// Detailed movie view component utilizing central TMDB image configuration.

import { IMovieDetailsModel } from "@/models/IMovieDetailsModel";
import { imageUrl } from "@/services/api.service"; // підключи твій шлях до файлу з axios
import Image from "next/image";
import FavoriteButton from "../movie-card/FavoriteButton";
import StarsRating from "../movie-card/StarsRating";

type MovieDetailsProps = {
    movie: IMovieDetailsModel;
};

const MovieDetails = ({ movie }: MovieDetailsProps) => {
    const {
        title,
        poster_path,
        backdrop_path,
        release_date,
        runtime,
        vote_average,
        genres,
        overview,
    } = movie;

    const posterUrl = poster_path && imageUrl ? `${imageUrl}${poster_path}` : "/placeholder.png";

    const backdropBaseUrl = imageUrl
        ? imageUrl.replace("/w500", "/w1280")
        : "https://image.tmdb.org/t/p/w1280";
    const backdropUrl = backdrop_path ? `${backdropBaseUrl}${backdrop_path}` : null;

    return (
        <div className="relative min-h-[calc(100vh-80px)] bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
            {backdropUrl && (
                <div className="absolute inset-0 z-0 h-[500px] w-full overflow-hidden opacity-20 dark:opacity-30">
                    <Image
                        src={backdropUrl}
                        alt={title}
                        fill
                        priority
                        className="object-cover blur-lg scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 dark:via-gray-950/80 to-white dark:to-gray-950" />
                </div>
            )}

            <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 sm:py-12">
                <div className="flex flex-col md:flex-row gap-8 items-start bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-2xl">
                    {/* Постер + Кнопка обраного */}
                    <div className="relative w-full max-w-[280px] aspect-[2/3] mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 flex-shrink-0">
                        <Image
                            src={posterUrl}
                            alt={title}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 280px"
                        />
                        <FavoriteButton movie={movie} />
                    </div>

                    <div className="flex-1 flex flex-col justify-between h-full gap-5">
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                {release_date && (
                                    <span className="px-3 py-1 bg-orange-500/10 dark:bg-orange-500/20 text-orange-500 font-black text-xs rounded-full uppercase tracking-wider">
                                        {release_date.slice(0, 4)}
                                    </span>
                                )}
                                {runtime && (
                                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        ⏱️ {runtime} min
                                    </span>
                                )}
                            </div>

                            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white uppercase mb-4">
                                {title}
                            </h1>

                            <div className="flex items-center gap-3 mb-5">
                                <StarsRating rating={vote_average} />
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                    {vote_average?.toFixed(1)} / 10
                                </span>
                            </div>

                            {genres && genres.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {genres.map((genre) => (
                                        <span
                                            key={genre.id}
                                            className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60"
                                        >
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="space-y-2">
                                <h3 className="text-xs font-black uppercase text-gray-400 dark:text-gray-500 tracking-widest">
                                    Overview
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                                    {overview || "No overview available for this movie."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
