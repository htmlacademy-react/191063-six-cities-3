import { useState } from 'react';
import { ReviewChangeHandler } from '../../types/review';
import { MIN_REVIEW_LENGTH, RATING_TYPES } from '../../const';
import ReviewRatingStar from './review-rating-star';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState({
    comment: '',
    rating: 0,
  });

  const handleChange: ReviewChangeHandler = (evt): void => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="comment">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_TYPES.map(({ value, title }) => (
          <ReviewRatingStar
            key={value}
            value={value}
            title={title}
            onChange={handleChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={review.comment}
        onChange={handleChange}
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
          disabled={review.comment.length < MIN_REVIEW_LENGTH || !review.rating}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
