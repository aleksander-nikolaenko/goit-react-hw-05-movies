import { http } from './api';

const API_KEY = 'a4073c3aa9b0e56e387e6992db67c6da';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = () => {
  return http.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

export const fetchSearchMovies = query => {
  // if (query === '' || query === null) return;
  return http.get(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
};

export const fetchMovieDetails = id => {
  return http.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const fetchMovieReviews = id => {
  return http.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const fetchMovieCast = id => {
  return http.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};
