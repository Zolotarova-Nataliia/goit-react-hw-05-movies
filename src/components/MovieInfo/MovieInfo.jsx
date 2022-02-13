import {
  MovieWrap,
  MovieInfoWrap,
  MovieInfoTitle,
  MovieInfoSubTitle,
  MovieInfoSpan,
  MovieInfoList,
} from './MovieInfo.styled';
const imgUrl = 'https://image.tmdb.org/t/p/w400';

export default function MovieInfo({ movie }) {
  return (
    <MovieWrap>
      <img
        src={
          movie.poster_path
            ? `${imgUrl}${movie.poster_path}`
            : `${process.env.PUBLIC_URL}/sorry-poster.jpg`
        }
        alt={movie.title}
      />
      <MovieInfoWrap>
        <MovieInfoTitle>
          {movie.original_title}
          <MovieInfoSpan>({movie.release_date.slice(0, 4)})</MovieInfoSpan>
        </MovieInfoTitle>
        <MovieInfoSubTitle>User score:</MovieInfoSubTitle>
        <MovieInfoSpan>{movie.vote_average * 10} %</MovieInfoSpan>
        <MovieInfoSubTitle>Overview:</MovieInfoSubTitle>
        <MovieInfoSpan>{movie.overview}</MovieInfoSpan>

        <div>
          <MovieInfoSubTitle>Genres:</MovieInfoSubTitle>
          <MovieInfoList>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </MovieInfoList>
        </div>
      </MovieInfoWrap>
    </MovieWrap>
  );
}
