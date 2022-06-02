import { http } from './api';

const API_KEY = 'a4073c3aa9b0e56e387e6992db67c6da';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = () => {
  return http.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

export const fetchSearchMovies = query => {
  return http.get(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
};
