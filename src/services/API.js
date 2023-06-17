import axios from 'axios';

export const API_KEY = '2ea2288c6c0027064d0ebdd6a8cc6596';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
  },
};

export const fetchPopularMovie = () =>
  axios.get(`/trending/movie/day?`, params);

export const fetchSearchMovie = query =>
  axios.get(`search/movie?query=${query}`, params);

export const fetchMovieDetails = id => axios.get(`movie/${id}`, params);

export const fetchMovieCredits = id => axios.get(`movie/${id}/credits`, params);

export const fetchMovieReviews = id => axios.get(`movie/${id}/reviews`, params);
