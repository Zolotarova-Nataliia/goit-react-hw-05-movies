import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  list-style: none;
  padding: 40px;
`;
export const StyledMoviesEl = styled.li`
  padding-top: 15px;
`;
