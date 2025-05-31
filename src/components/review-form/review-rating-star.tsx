import { ReviewChangeHandler } from '../../types/review';

type ReviewRatingStarProps = {
  value: number;
  title: string;
  disabled: boolean;
  onChange: ReviewChangeHandler;
};

function ReviewRatingStar(props: ReviewRatingStarProps): JSX.Element {
  const { value, title, disabled } = props;
  const handleUpdateReviewRating = props.onChange;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={value}
        id={`${value}-stars`}
        type="radio"
        disabled={disabled}
        onChange={handleUpdateReviewRating}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default ReviewRatingStar;
