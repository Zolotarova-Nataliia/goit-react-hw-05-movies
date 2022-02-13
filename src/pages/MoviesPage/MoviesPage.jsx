import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';
import * as movieApi from '../../services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';
import {
  SearchForm,
  SearchBtn,
  SearchInput,
  SearchWrap,
} from './MoviesPage.styled';

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
      <SearchWrap>
        <SearchForm onSubmit={onFormSubmit}>
          <SearchInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search your film"
            defaultValue={query}
          ></SearchInput>
          <SearchBtn type="submit">
            <BsSearch />
          </SearchBtn>
        </SearchForm>
      </SearchWrap>
      <SearchWrap>{movies && <MoviesList movies={movies} />}</SearchWrap>
    </>
  );
}
