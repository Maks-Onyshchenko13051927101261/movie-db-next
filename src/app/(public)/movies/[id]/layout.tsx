import { Metadata } from "next";

// import { movieService } from "@/services/movie.service";
// import type { Metadata } from "next";

// type Props = {
//     params: Promise<{ id: string }>;
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const { id } = await params;
//     const movie = await movieService.getMovieById(id).catch(() => null);

//     if (!movie) {
//         return {
//             title: "Movie Not Found",
//         };
//     }

//     return {
//         title: movie.title,
//         description: movie.overview || `Detailed information about ${movie.title}`,
//         openGraph: {
//             title: movie.title,
//             description: movie.overview,
//             images: movie.poster_path
//                 ? [`https://image.tmdb.org/t/p/w500${movie.poster_path}`]
//                 : [],
//         },
//     };
// }
export const metadata: Metadata = {
    title: "Movie Details",
    description: "View detailed information about this movie.",
};
type Props = { children: React.ReactNode };
const MovieLayout = ({ children }: Props) => {
    return <div>{children}</div>;
};
export default MovieLayout;
