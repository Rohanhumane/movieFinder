import axios from "axios";
const SEARCH = "/search/movie";
const POPULAR = "/movie/popular";
const RATED = "/movie/top_rated";
const UPCOMING = "/movie/upcoming";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const IMAGE_BASE = import.meta.env.VITE_IMAGE_BASE_URL;


const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const tmdbApi = {
  searchMovies: async (query) => {
    try {
      const res = await tmdb.get(SEARCH, { params: { query } });
      return res.data;
    } catch (error) {
      throw Error(error.response?.data?.status_message || error.message);
    }
  },

  getPopularMovies: async (page) => {
    const res = await tmdb.get(POPULAR, { params: { page } });
    return res;
  },

  getTopRated: async (page) => {
    const res = await tmdb.get(RATED, { params: { page } });
    return res;
  },

  getUpcoming: async (page = 1) => {
    const res = await tmdb.get(UPCOMING, { params: { page } });
    return res.data;
  },

  getMovieDetails: async (id) => {
    const res = await tmdb.get(`/movie/${id}`);
    return res.data;
  },
};

export function getImageUrl(filePath, size = "w500") {
  if (!filePath) return `${IMAGE_BASE}/${size}/placeholder.jpg`;
  return `${IMAGE_BASE}/${size}${filePath}`;
}
