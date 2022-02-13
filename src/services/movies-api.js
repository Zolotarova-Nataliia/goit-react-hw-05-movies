import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = '025512eaa3724bc89359bc473e706bcf';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchMovies(url = '') {
  const { data } = await axios.get(url);
  return data;
}

export function fetchTrandMovie() {
  return fetchMovies(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMovieById(movieId) {
  return fetchMovies(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=reviews,credits,videos`
  );
}

export function fetchMovieByQuery(searchQuery) {
  return fetchMovies(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );
}
