import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MovieDetails() {
  const location = useLocation();
  return (
    <>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: location }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: location }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
