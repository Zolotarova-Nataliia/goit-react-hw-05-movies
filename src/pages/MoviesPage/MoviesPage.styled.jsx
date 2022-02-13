import styled from 'styled-components';
export const SearchWrap = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const SearchForm = styled.form`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  width: 800px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 3px solid rgb(234, 29, 111);
  -webkit-box-shadow: 0 0 40px rgb(234, 29, 111);
  -moz-box-shadow: 0 0 40px #ffff;
  box-shadow: 0 0 40px rgb(234, 29, 111);
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  > svg {
    width: 26px;
    height: 26px;
  }
  &:hover {
    > svg {
      fill: rgb(234, 29, 111);
    }
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  transition: all 0.3s;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
