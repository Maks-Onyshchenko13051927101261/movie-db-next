// The application's data provider layer. It abstracts all raw API endpoints into a clean, method-based interface

import { IGenre } from "@/models/IGenreModel";
import { IMovieModel } from "@/models/IMovieModel";
import { IResponseModel } from "@/models/IResponseModel";
import { request } from "./api.config";

const movieService = {
    getAll: async (page: number): Promise<IResponseModel> => {
        return await request<IResponseModel>(`/discover/movie?page=${page}`);
    },
    getByGenre: async (genreId: string | number, page: number): Promise<IResponseModel> => {
        return await request<IResponseModel>(`/discover/movie?with_genres=${genreId}&page=${page}`);
    },
    search: async (query: string, page: number = 1): Promise<IResponseModel> => {
        return await request<IResponseModel>(`/search/movie?query=${query}&page=${page}`);
    },
    getGenres: async (): Promise<IGenre[]> => {
        const data = await request<{ genres: IGenre[] }>("/genre/movie/list");
        return data.genres;
    },
    getById: async (id: string | number): Promise<IMovieModel> => {
        return await request<IMovieModel>(`/movie/${id}`);
    }
};

export default movieService;