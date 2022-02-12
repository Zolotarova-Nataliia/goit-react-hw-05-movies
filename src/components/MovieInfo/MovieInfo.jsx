const imgUrl = 'https://image.tmdb.org/t/p/w400';

export default function MovieInfo({ movie }) {
  return (
    <div>
      <img
        src={
          movie.poster_path
            ? `${imgUrl}${movie.poster_path}`
            : `${process.env.PUBLIC_URL}/sorry-poster.jpg`
        }
        alt={movie.title}
      />
      <h2>
        {movie.original_title}
        <span>({movie.release_date.slice(0, 4)})</span>
      </h2>
      <p>
        User score:
        <span>{movie.vote_average * 10} %</span>
      </p>
      <p>Overview </p>
      <p>{movie.overview}</p>
      <div>
        <span>Genres:</span>
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
