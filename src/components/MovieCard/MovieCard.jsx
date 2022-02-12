import { Link, useLocation } from 'react-router-dom';
const imgUrl = 'https://image.tmdb.org/t/p/w400';
const sorryPoster = '../../../public/sorry-poster.jpg';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  return (
    <div>
      <Link
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location },
        }}
      >
        <img
          src={
            movie.poster_path ? `${imgUrl}${movie.poster_path}` : sorryPoster
          }
          alt={movie.title}
        />
        <h2> {movie.original_title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;
