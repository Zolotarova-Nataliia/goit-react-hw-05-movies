const imgUrl = 'https://image.tmdb.org/t/p/w400';

export default function Cast({ movie }) {
  const casts = movie.credits.cast;

  return (
    <>
      {casts.map(cast => (
        <div key={cast.cast_id}>
          <img
            src={
              cast.profile_path
                ? ` ${imgUrl}${cast.profile_path}`
                : `${process.env.PUBLIC_URL}/nophoto.jpg`
            }
            alt={cast.name}
          />
          <p>{cast.original_name}</p>
          <p>{cast.character}</p>
        </div>
      ))}
    </>
  );
}
