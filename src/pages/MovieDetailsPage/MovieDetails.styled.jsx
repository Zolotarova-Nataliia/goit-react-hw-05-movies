import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  margin-top: 20px;
  margin-left: 40px;
  padding: 8px 16px;
  border-radius: 2px;
  transition: all 0.2s linear 0s;
  background-color: rgb(234, 29, 111);
  text-align: center;
  font-size: 20px;
  color: #ffff;
  display: inline-block;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  width: 150px;
  overflow: hidden;
  &:before {
    content: '⇦';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 30px;
    transition: all 0.2s linear 0s;
  }

  &:hover {
    text-indent: -9999px;

    &:before {
      top: 0;
      text-indent: 0;
    }
  }
`;

export const MovieDetailsTitle = styled.h2`
  color: #ffff;
  font-size: 40px;
`;

export const MovieDetailsLink = styled(NavLink)`
  font-size: 40px;
  font-weight: 600;
  transition: color 500ms;
  margin-right: 30px;
  margin-bottom: 20px;
  &:hover {
    font-size: 40px;
    font-weight: 600;
    color: rgb(234, 29, 111);
  }
  &.active {
    color: #b9134f;
  }
`;
