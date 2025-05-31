import { ReactNode } from 'react';
import { Review } from '../../types/review-types';
import { userSelectors } from '../../store/slices/user-slice/user-slice';
import { sortReviewsDate } from '../../utils/reviews-utils';
import OfferReviewItem from './offer-review-item';
import useAppSelector from '../../hooks/use-app-selector';

type OfferReviewsProps = {
  reviews: Review[];
  reviewForm: ReactNode;
};

function OfferReviews(props: OfferReviewsProps): JSX.Element {
  const { reviews, reviewForm } = props;
  const isLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn);

  const sortedReviews = sortReviewsDate(reviews);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{sortedReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <OfferReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {isLoggedIn ? reviewForm : null}
    </section>
  );
}

export default OfferReviews;
