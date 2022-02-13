import { CardWrap, CardImg, CardTitle } from './MovieCard.styled';
import { Link, useLocation } from 'react-router-dom';
import { CardImgWrap } from './MovieCard.styled';
const imgUrl = 'https://image.tmdb.org/t/p/w400';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  return (
    <CardWrap>
      <Link
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location },
        }}
      >
        <CardImgWrap>
          <CardImg
            src={
              movie.poster_path
                ? `${imgUrl}${movie.poster_path}`
                : `${process.env.PUBLIC_URL}/sorry-poster.jpg`
            }
            alt={movie.title}
          />
        </CardImgWrap>

        <CardTitle> {movie.original_title}</CardTitle>
      </Link>
    </CardWrap>
  );
};

export default MovieCard;
