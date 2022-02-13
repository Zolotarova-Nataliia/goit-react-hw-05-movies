import styled from 'styled-components';

export const CardWrap = styled.div`
  width: 22vw;
  text-align: center;
  border: 3px solid #ffff;
  transition: all 0.3s;
  &:hover {
    border: 3px solid rgb(234, 29, 111);
    -webkit-box-shadow: 0 0 40px rgb(234, 29, 111);
    -moz-box-shadow: 0 0 40px #ffff;
    box-shadow: 0 0 40px rgb(234, 29, 111);
    transform: scale(1.05);
  }
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const CardImgWrap = styled.div`
  height: 450px;
  width: 100%;
  overflow-y: hidden;
`;

export const CardTitle = styled.h2`
  padding: 10px;
  font-size: 20px;
  color: #ffff;
`;
