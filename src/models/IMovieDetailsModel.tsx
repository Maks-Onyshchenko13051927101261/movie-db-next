import { IGenre } from "./IGenreModel";
import { IMovieModel } from "./IMovieModel";

export interface IMovieDetailsModel extends IMovieModel {
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
}
