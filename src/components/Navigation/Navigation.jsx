import { HiOutlineFilm } from 'react-icons/hi';
import { Header, Nav, Link, FilmSvg } from './Navigation.styled';
export default function Navigation() {
  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        <FilmSvg>
          <HiOutlineFilm />
        </FilmSvg>

        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
  );
}
