import MovieCard from 'components/MovieCard/MovieCard';
import { StyledMoviesList, StyledMoviesEl } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies.results.map(movie => (
        <StyledMoviesEl key={movie.id}>
          <MovieCard movie={movie} />
        </StyledMoviesEl>
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;
