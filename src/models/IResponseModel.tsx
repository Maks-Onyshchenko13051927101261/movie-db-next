import { IMovieModel } from "./IMovieModel";

export interface IResponseModel {
    page: number;
    results: IMovieModel[];
    total_pages: number;
    total_results: number;
}