import { ActorImgWrap } from './Cast.styled';
import { ActorImg } from './Cast.styled';
import { CastWrap, ActorWrap, ActorInfo } from './Cast.styled';
const imgUrl = 'https://image.tmdb.org/t/p/w400';

export default function Cast({ movie }) {
  const casts = movie.credits.cast;

  return (
    <CastWrap>
      {casts.map(cast => (
        <ActorWrap key={cast.cast_id}>
          <ActorImgWrap>
            <ActorImg
              src={
                cast.profile_path
                  ? ` ${imgUrl}${cast.profile_path}`
                  : `${process.env.PUBLIC_URL}/no-image-available.png`
              }
              alt={cast.name}
            />
          </ActorImgWrap>
          <ActorInfo>{cast.original_name}</ActorInfo>
          <ActorInfo>{cast.character}</ActorInfo>
        </ActorWrap>
      ))}
    </CastWrap>
  );
}
