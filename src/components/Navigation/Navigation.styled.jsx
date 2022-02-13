import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  padding: 20px;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: #2c2b2b;
  -webkit-box-shadow: 0 1px 4px rgb(234, 29, 111),
    0 0 40px rgb(234, 29, 111) inset;
  -moz-box-shadow: 0 1px 4px rgb(234, 29, 111), 0 0 40px rgb(234, 29, 111) inset;
  box-shadow: 0 1px 4px rgb(234, 29, 111), 0 0 40px rgb(234, 29, 111) inset;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-box-shadow: 0 0 20px rgb(234, 29, 111);
    -moz-box-shadow: 0 0 20px rgb(234, 29, 111);
    box-shadow: 0 0 20px rgb(234, 29, 111);
    top: 0;
    bottom: 0;
    left: 10px;
    -moz-border-radius: 100px / 10px;
    border-radius: 100px / 10px;
  }
`;

export const Nav = styled.nav`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  font-size: 40px;
  font-weight: 600;
  transition: color 500ms;
  &:hover {
    font-size: 40px;
    font-weight: 600;
    color: #b9134f;
    text-shadow: 2px 2px 5px #ffff 2px 2px 5px #b9134f;
  }
  &.active {
    color: rgb(234, 29, 111);
    text-shadow: 2px 2px 5px #ffff 2px 2px 5px #b9134f;
  }
`;

export const FilmSvg = styled.div`
  > svg {
    width: 40px;
    height: 40px;
  }
`;
