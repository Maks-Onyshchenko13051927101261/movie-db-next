import { IGenre } from "./IGenreModel";

export interface IMovieDetailsModel {
    genres: IGenre[];
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    runtime: number;
    budget?: number;
    revenue?: number;
    status?: string;
    tagline?: string;
    homepage?: string;
    vote_average: number;
    overview: string;
    genre_ids?: number[];
}
