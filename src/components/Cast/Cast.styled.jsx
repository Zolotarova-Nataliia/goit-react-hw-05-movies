import styled from 'styled-components';

export const CastWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1em;
  list-style: none;
  padding: 20px;
`;
export const ActorWrap = styled.div`
  width: 15vw;
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

export const ActorInfo = styled.p`
  color: #ffff;
  font-size: 20px;
`;
export const ActorImgWrap = styled.div`
  height: 450px;
  width: 100%;
  overflow-y: hidden;
`;

export const ActorImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
