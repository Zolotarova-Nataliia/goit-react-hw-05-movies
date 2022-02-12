import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <header className="">
      <nav>
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/movies" className="">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
