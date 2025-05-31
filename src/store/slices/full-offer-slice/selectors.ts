import { createSelector } from '@reduxjs/toolkit';
import { getOfferPreviewById } from '../../../utils/offer-utils';
import { MAX_REVIEWS_COUNT } from '../../../const/review-const';
import { sortReviewsDate } from '../../../utils/reviews-utils';
import { RequestStatus } from '../../../const/api-const';
import { Namespace } from '../../../const/store-const';
import { State } from '../../../types/store-types';

const selectSelf = (state: State) => state[Namespace.FullOffer];
const selectOffers = (state: State) => state[Namespace.Offers];

export const selectOfferFull = createSelector(
  selectSelf,
  (state) => state.offerFull
);

export const selectOfferFullStatus = createSelector(
  selectSelf,
  (state) => state.offerFullStatus
);

export const selectNearOfferPreviews = createSelector(
  selectSelf,
  (state) => state.nearOfferPreviews
);

export const selectNearOfferPreviewsStatus = createSelector(
  selectSelf,
  (state) => state.nearOfferPreviewsStatus
);

export const selectReviews = createSelector(
  selectSelf,
  (state) => {
    const sortedReviews = sortReviewsDate(state.reviews);
    return sortedReviews.slice(0, MAX_REVIEWS_COUNT);
  }

);
export const selectReviewsStatus = createSelector(
  selectSelf,
  (state) => state.reviewsStatus
);

export const selectPostReviewStatus = createSelector(
  selectSelf,
  (state) => state.postReviewStatus
);

export const selectCurrentOfferPreview = createSelector(
  [selectSelf, selectOffers],
  (selfState, offersState) =>
    getOfferPreviewById(offersState.offerPreviews, selfState.offerFull?.id)
);

export const selectIsLoading = createSelector(
  [selectSelf, selectOffers],
  (selfState, offersState) =>
    offersState.offerPreviewsStatus === RequestStatus.Loading ||
    selfState.offerFullStatus === RequestStatus.Loading ||
    selfState.nearOfferPreviewsStatus === RequestStatus.Loading ||
    selfState.reviewsStatus === RequestStatus.Loading
);

export const selectIsFailed = createSelector(
  [selectSelf, selectOffers],
  (selfState, offersState) =>
    offersState.offerPreviewsStatus === RequestStatus.Failed ||
    selfState.offerFullStatus === RequestStatus.Failed ||
    selfState.nearOfferPreviewsStatus === RequestStatus.Failed ||
    selfState.reviewsStatus === RequestStatus.Failed
);
