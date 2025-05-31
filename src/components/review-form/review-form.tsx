import { FormEvent, useState } from 'react';
import { MAN_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../const/review-const';
import { ReviewChangeHandler } from '../../types/review-types';
import { RequestStatus } from '../../const/api-const';
import { RatingOption } from '../../const/app-const';
import {
  fullOfferSelectors,
  fullOfferActions,
} from '../../store/slices/full-offer-slice/full-offer-slice';
import ReviewRatingStar from './review-rating-star';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';

type ReviewFormProps = {
  offerId: string;
};

function ReviewForm(props: ReviewFormProps): JSX.Element {
  const { offerId } = props;
  const dispatch = useAppDispatch();
  const postReviewStatus = useAppSelector(
    fullOfferSelectors.selectPostReviewStatus
  );
  const initialReview = {
    comment: '',
    rating: 0,
  };
  const [review, setReview] = useState(initialReview);

  const isInputsDisabled = postReviewStatus === RequestStatus.Loading;

  const isFormDisabled =
    !review.rating ||
    review.comment.length < MIN_REVIEW_LENGTH ||
    review.comment.length > MAN_REVIEW_LENGTH ||
    postReviewStatus === RequestStatus.Loading;

  const handleCommentChange: ReviewChangeHandler = (evt): void => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: value });
  };

  const handleRatingChange: ReviewChangeHandler = (evt): void => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: Number(value) });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    const form = evt.currentTarget;
    evt.preventDefault();
    dispatch(fullOfferActions.postReview({ offerId, review }))
      .unwrap()
      .then(() => {
        form.reset();
        setReview(initialReview);
      });
  };

  return (
    <form
      className="reviews__form form"
      data-testid="review-form-test-id"
      action=""
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="comment">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.values(RatingOption).map(({ value, title }) => (
          <ReviewRatingStar
            key={value}
            value={value}
            title={title}
            disabled={isInputsDisabled}
            onChange={handleRatingChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={review.comment}
        disabled={isInputsDisabled}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
