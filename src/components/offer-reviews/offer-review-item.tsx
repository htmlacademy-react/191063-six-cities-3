import { DateFormat } from '../../const/app-const';
import { Review } from '../../types/review-types';
import { getFormattedDate } from '../../utils/date-utils';
import { getRatingStyles } from '../../utils/offer-utils';

type ReviewItemProps = {
  review: Review;
};

function OfferReviewItem(props: ReviewItemProps): JSX.Element {
  const { comment, date, rating, user } = props.review;
  const formattedDate = getFormattedDate(date, DateFormat.Review);
  const ratingStyles = getRatingStyles(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ratingStyles} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time data-testid="review-time-test-id" className="reviews__time" dateTime={date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

export default OfferReviewItem;
