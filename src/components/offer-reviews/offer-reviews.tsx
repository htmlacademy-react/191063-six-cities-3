import { Review } from '../../types/review';
import { selectIsUserLoggedIn } from '../../store/selectors';
import OfferReviewItem from './offer-review-item';
import useAppSelector from '../../hooks/use-app-selector';
import { ReactNode } from 'react';

type OfferReviewsProps = {
  reviews: Review[];
  reviewForm: ReactNode;
};

function OfferReviews(props: OfferReviewsProps): JSX.Element {
  const { reviews, reviewForm } = props;
  const isLoggedIn = useAppSelector(selectIsUserLoggedIn);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <OfferReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {isLoggedIn ? reviewForm : null}
    </section>
  );
}

export default OfferReviews;
