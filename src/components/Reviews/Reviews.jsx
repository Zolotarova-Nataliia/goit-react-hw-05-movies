import {
  ReviewsAuthorName,
  ReviewsListItem,
  ReviewsText,
  ReviewsList,
} from './Reviews.styled';

export default function Reviews({ movie }) {
  const reviews = movie.reviews.results;

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsListItem key={review.id}>
              <ReviewsText>
                Author : <ReviewsAuthorName>{review.author}</ReviewsAuthorName>
              </ReviewsText>
              <p>"{review.content}"</p>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      ) : (
        <ReviewsText>We don't have any reviews for this movie</ReviewsText>
      )}
    </>
  );
}
