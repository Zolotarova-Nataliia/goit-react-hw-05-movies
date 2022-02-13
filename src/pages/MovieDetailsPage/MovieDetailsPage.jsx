import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import * as movieApi from '../../services/movies-api';
import MovieDetails from 'components/MovieInfo/MovieDetails';
import Spinner from 'react-spinkit';
import { Btn } from './MovieDetails.styled';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    movieApi.fetchMovieById(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);
  const onBtnClick = () => {
    navigate('/');
  };
  return (
    <>
      <Btn onClick={onBtnClick}>Go back </Btn>
      {movie && <MovieInfo movie={movie} />}
      {movie && (
        <div>
          <Suspense
            fallback={<Spinner name="ball-spin-fade-loader" color="#ffff" />}
          >
            <Routes>
              <Route path="" element={<MovieDetails />}>
                <Route path="cast" element={<Cast movie={movie} />} />
                <Route path="reviews" element={<Reviews movie={movie} />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
}
