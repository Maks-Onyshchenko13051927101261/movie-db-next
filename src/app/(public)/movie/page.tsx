// // app/(public)/movies/[id]/page.tsx
// import FavoriteButton from "@/components/movie-card/FavoriteButton";
// // import StarsRating from "@/components/stars-rating/StarsRating";
// import { movieService } from "@/services/movie.service";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// type MovieDetailPageProps = {
//     params: Promise<{
//         id: string;
//     }>;
// };

// export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
//     const { id } = await params;

//     const movie = await movieService.getMovieById(id).catch(() => null);

//     if (!movie) {
//         notFound();
//     }

//     const posterUrl = movie.poster_path
//         ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//         : "/placeholder.png";

//     const backdropUrl = movie.backdrop_path
//         ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
//         : null;

//     return (
//         <main className="relative min-h-[calc(100vh-140px)] bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
//             {backdropUrl && (
//                 <div className="absolute inset-0 h-[450px] overflow-hidden opacity-20 dark:opacity-30">
//                     <Image
//                         src={backdropUrl}
//                         alt={movie.title}
//                         fill
//                         priority
//                         className="object-cover blur-md"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 dark:via-gray-950/80 to-white dark:to-gray-950" />
//                 </div>
//             )}

//             <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
//                 <div className="flex flex-col md:flex-row gap-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl p-8 shadow-2xl">
//                     <div className="relative w-full max-w-[300px] aspect-[2/3] overflow-hidden rounded-2xl">
//                         <Image
//                             src={posterUrl}
//                             alt={movie.title}
//                             fill
//                             priority
//                             sizes="(max-width:768px) 100vw, 300px"
//                             className="object-cover"
//                         />

//                         <FavoriteButton movie={movie} />
//                     </div>

//                     <div className="flex flex-1 flex-col gap-6">
//                         <div className="flex items-center gap-3">
//                             <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-500">
//                                 {movie.release_date?.slice(0, 4) ?? "N/A"}
//                             </span>

//                             {movie.runtime && (
//                                 <span className="text-sm text-gray-500">⏱ {movie.runtime} min</span>
//                             )}
//                         </div>

//                         <h1 className="text-4xl font-black uppercase">{movie.title}</h1>

//                         <div className="flex items-center gap-4">
//                             <StarsRating rating={movie.vote_average} />

//                             <span className="font-semibold">
//                                 {movie.vote_average.toFixed(1)} / 10
//                             </span>
//                         </div>

//                         {movie.genres.length > 0 && (
//                             <div className="flex flex-wrap gap-2">
//                                 {movie.genres.map((genre) => (
//                                     <span
//                                         key={genre.id}
//                                         className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold"
//                                     >
//                                         {genre.name}
//                                     </span>
//                                 ))}
//                             </div>
//                         )}

//                         <div>
//                             <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500">
//                                 Overview
//                             </h2>

//                             <p className="leading-7 text-gray-700 dark:text-gray-300">
//                                 {movie.overview || "No description available."}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }
