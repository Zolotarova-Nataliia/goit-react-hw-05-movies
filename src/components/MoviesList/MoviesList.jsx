import MovieCard from 'components/MovieCard/MovieCard';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.results.map(movie => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
