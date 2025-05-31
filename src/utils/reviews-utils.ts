import dayjs from 'dayjs';
import { Review, Reviews } from '../types/review';

function compareDateDown(firstReview: Review, secondReview: Review): number {
  return dayjs(secondReview.date).diff(dayjs(firstReview.date));
}

function sortReviewsDate(reviews: Reviews): Reviews {
  return reviews.sort(compareDateDown);
}

export { sortReviewsDate };
