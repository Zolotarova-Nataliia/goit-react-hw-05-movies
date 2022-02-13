import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from 'react-spinkit';
import Navigation from './Navigation/Navigation';
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('pages/Homepage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
export const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <Suspense
        fallback={<Spinner name="ball-spin-fade-loader" color="#000000" />}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
