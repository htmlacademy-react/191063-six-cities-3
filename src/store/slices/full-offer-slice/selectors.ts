import { RequestStatus } from '../../../const/api-const';
import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';
import { getOfferPreviewById } from '../../../utils/offer-utils';

export const selectOfferFull = (state: State) => state[NameSpace.FullOffer].offerFull;
export const selectOfferFullStatus = (state: State) => state[NameSpace.FullOffer].offerFullStatus;

export const selectNearOfferPreviews = (state: State) => state[NameSpace.FullOffer].nearOfferPreviews;
export const selectNearOfferPreviewsStatus = (state: State) => state[NameSpace.FullOffer].nearOfferPreviewsStatus;

export const selectReviews = (state: State) => state[NameSpace.FullOffer].reviews;
export const selectReviewsStatus = (state: State) => state[NameSpace.FullOffer].reviewsStatus;

export const selectPostReviewStatus = (state: State) => state[NameSpace.FullOffer].postReviewStatus;

export const selectCurrentOfferPreview = (state: State) =>
  getOfferPreviewById(state[NameSpace.Offers].offerPreviews, state[NameSpace.FullOffer].offerFull?.id);

export const selectIsLoading = (state: State) =>
  (state[NameSpace.Offers].offerPreviewsStatus === RequestStatus.Loading ||
  state[NameSpace.FullOffer].offerFullStatus === RequestStatus.Loading ||
  state[NameSpace.FullOffer].nearOfferPreviewsStatus === RequestStatus.Loading ||
  state[NameSpace.FullOffer].reviewsStatus === RequestStatus.Loading);

export const selectIsFailed = (state: State) =>
  (state[NameSpace.Offers].offerPreviewsStatus === RequestStatus.Failed ||
  state[NameSpace.FullOffer].offerFullStatus === RequestStatus.Failed ||
  state[NameSpace.FullOffer].nearOfferPreviewsStatus === RequestStatus.Failed ||
  state[NameSpace.FullOffer].reviewsStatus === RequestStatus.Failed);
