// // A centralized network layer built with Axios, designed for secure and efficient communication with the TMDB API

import axios from "axios";

const baseUrl = process.env.TMDB_BASE_URL;
const imageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
});

export const request = async <T,>(url: string): Promise<T> => {
    const { data } = await axiosInstance.get<T>(url);
    return data;
};

export { imageUrl };
