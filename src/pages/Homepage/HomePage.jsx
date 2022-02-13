import { useState, useEffect } from 'react';
import { PageTitle } from './Homepage.styled';
import MoviesList from '../../components/MoviesList/MoviesList';
import * as movieApi from '../../services/movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    movieApi.fetchTrandMovie().then(setMovies);
  }, []);

  return (
    <>
      <PageTitle>Trending movies</PageTitle>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
