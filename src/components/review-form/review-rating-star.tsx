import { ReviewChangeHandler } from '../../types/review';

type ReviewRatingStarProps = {
  value: number;
  title: string;
  onChange: ReviewChangeHandler;
};

function ReviewRatingStar(props: ReviewRatingStarProps): JSX.Element {
  const { value, title } = props;
  const handleUpdateReviewRating = props.onChange;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={value}
        id={`${value}-stars`}
        type="radio"
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
