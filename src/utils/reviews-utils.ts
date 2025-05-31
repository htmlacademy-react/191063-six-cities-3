import dayjs from 'dayjs';
import { Review, Reviews } from '../types/review-types';

function compareDateDown(firstReview: Review, secondReview: Review): number {
  return dayjs(secondReview.date).diff(dayjs(firstReview.date));
}

export function sortReviewsDate(reviews: Reviews): Reviews {
  return reviews.toSorted(compareDateDown);
}
