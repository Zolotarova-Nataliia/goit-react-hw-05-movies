import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import * as movieApi from '../../services/movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    movieApi.fetchTrandMovie().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending movies</h1>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
