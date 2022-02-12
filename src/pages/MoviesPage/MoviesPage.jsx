import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as movieApi from '../../services/movies-api';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      movieApi.fetchMovieByQuery(query).then(setMovies);
    }
  }, [query]);

  const onFormSubmit = evt => {
    evt.preventDefault();
    console.log(evt.currentTarget);
    const query = evt.currentTarget.elements.query.value.trim();
    if (query === '') {
      return;
    }
    setSearchParams({ query });
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search your film"
            defaultValue={query}
          ></input>
          <button type="submit"></button>
        </label>
      </form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
