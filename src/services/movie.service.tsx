// The application's data provider layer.
// It abstracts all raw API endpoints into a clean, method-based interface.

import { IGenre } from "@/models/IGenreModel";
import { IMovieModel } from "@/models/IMovieModel";
import { IResponseModel } from "@/models/IResponseModel";
import { request } from "./api.service";

type GetMoviesParams = {
    page?: number;
    query?: string;
    genre?: string;
};

export const movieService = {
    getAll: async (page: number): Promise<IResponseModel> => {
        return request<IResponseModel>(`/discover/movie?page=${page}`);
    },

    getByGenre: async (genreId: string | number, page: number): Promise<IResponseModel> => {
        return request<IResponseModel>(`/discover/movie?with_genres=${genreId}&page=${page}`);
    },

    search: async (query: string, page: number = 1): Promise<IResponseModel> => {
        return request<IResponseModel>(
            `/search/movie?query=${encodeURIComponent(query)}&page=${page}`
        );
    },

    getGenres: async (): Promise<IGenre[]> => {
        const data = await request<{ genres: IGenre[] }>("/genre/movie/list");

        return data.genres;
    },

    getById: async (id: string | number): Promise<IMovieModel> => {
        return request<IMovieModel>(`/movie/${id}`);
    },

    // Single entry point for the main page
    getMovies: async ({
        page = 1,
        query = "",
        genre = "",
    }: GetMoviesParams): Promise<IResponseModel> => {
        if (query.trim()) {
            return movieService.search(query, page);
        }

        if (genre) {
            return movieService.getByGenre(genre, page);
        }

        return movieService.getAll(page);
    },
};
