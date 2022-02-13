import { MovieDetailsLink } from 'pages/MovieDetailsPage/MovieDetails.styled';
import { MovieDetailsTitle } from 'pages/MovieDetailsPage/MovieDetails.styled';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MovieDetailsList, MovieDetailsWrapper } from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  return (
    <MovieDetailsWrapper>
      <MovieDetailsTitle>Additional information</MovieDetailsTitle>
      <MovieDetailsList>
        <li>
          <MovieDetailsLink to="cast" state={{ from: location }}>
            Cast
          </MovieDetailsLink>
        </li>
        <li>
          <MovieDetailsLink to="reviews" state={{ from: location }}>
            Reviews
          </MovieDetailsLink>
        </li>
      </MovieDetailsList>
      <Outlet />
    </MovieDetailsWrapper>
  );
}
