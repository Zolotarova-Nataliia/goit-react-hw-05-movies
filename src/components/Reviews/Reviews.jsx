export default function Reviews({ movie }) {
  const reviews = movie.reviews.results;

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>
                <b>Author :</b> <span>{review.author}</span>
              </p>
              <p>"{review.content}"</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
