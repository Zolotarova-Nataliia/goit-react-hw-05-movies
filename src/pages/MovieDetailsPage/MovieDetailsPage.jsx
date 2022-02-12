import { useState, useEffect, lazy } from 'react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import * as movieApi from '../../services/movies-api';
import MovieDetails from 'components/MovieInfo/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

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
      <button onClick={onBtnClick}>Go back </button>
      {movie && <MovieInfo movie={movie} />}
      {movie && (
        <div>
          <h3>Additional information</h3>
          <Routes>
            <Route path="" element={<MovieDetails />}>
              <Route path="cast" element={<Cast movie={movie} />} />
              <Route path="reviews" element={<Reviews movie={movie} />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}
