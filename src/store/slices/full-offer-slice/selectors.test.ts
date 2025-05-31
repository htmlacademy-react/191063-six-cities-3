import { fullOfferSelectors } from './full-offer-slice';
import { RequestStatus } from '../../../const/api-const';
import { Namespace } from '../../../const/store-const';
import { State } from '../../../types/store-types';
import {
  getMockOfferFullPreview,
  getMockOfferPreviews,
  getMockOfferFull,
  getMockReviews,
} from '../../../utils/mock-utils';

describe('Full Offer selectors', () => {
  const mockOfferFull = getMockOfferFull();
  const mockNearOfferPreviews = getMockOfferPreviews();
  const mockReviews = getMockReviews();
  const state = {
    [Namespace.FullOffer]: {
      offerFull: mockOfferFull,
      offerFullStatus: RequestStatus.Idle,
      nearOfferPreviews: mockNearOfferPreviews,
      nearOfferPreviewsStatus: RequestStatus.Idle,
      reviews: mockReviews,
      reviewsStatus: RequestStatus.Idle,
      postReviewStatus: RequestStatus.Idle,
    },
    [Namespace.Offers]: {
      offerPreviews: [getMockOfferFullPreview()],
      offerPreviewsStatus: RequestStatus.Idle,
    },
  };

  it('should return offerFull from state', () => {
    const { offerFull } = state[Namespace.FullOffer];
    const result = fullOfferSelectors.selectOfferFull(state as State);
    expect(result).toEqual(offerFull);
  });

  it('should return offerFullStatus from state', () => {
    const { offerFullStatus } = state[Namespace.FullOffer];
    const result = fullOfferSelectors.selectOfferFullStatus(state as State);
    expect(result).toEqual(offerFullStatus);
  });

  it('should return nearOfferPreviews from state', () => {
    const { nearOfferPreviews } = state[Namespace.FullOffer];
    const result = fullOfferSelectors.selectNearOfferPreviews(state as State);
    expect(result).toEqual(nearOfferPreviews);
  });

  it('should return nearOfferPreviewsStatus from state', () => {
    const { nearOfferPreviewsStatus } = state[Namespace.FullOffer];
    const result = fullOfferSelectors.selectNearOfferPreviewsStatus(state as State);
    expect(result).toEqual(nearOfferPreviewsStatus);
  });

  it('should return reviewsStatus from state', () => {
    const { reviewsStatus } = state[Namespace.FullOffer];
    const result = fullOfferSelectors.selectReviewsStatus(state as State);
    expect(result).toEqual(reviewsStatus);
  });

  it('should return postReviewStatus from state', () => {
    const { postReviewStatus } = state[Namespace.FullOffer];
    const result = fullOfferSelectors.selectPostReviewStatus(state as State);
    expect(result).toEqual(postReviewStatus);
  });

  it('should return currentOfferPreview from state', () => {
    const { offerPreviews } = state[Namespace.Offers];
    const result = fullOfferSelectors.selectCurrentOfferPreview(state as State);
    expect(result).toEqual(offerPreviews[0]);
  });

  it('should return isLoading from state', () => {
    const initialState = {
      [Namespace.FullOffer]: {
        offerFullStatus: RequestStatus.Loading,
        nearOfferPreviewsStatus: RequestStatus.Loading,
        reviewsStatus: RequestStatus.Loading,
      },
      [Namespace.Offers]: {
        offerPreviewsStatus: RequestStatus.Loading,
      },
    };
    const { offerFullStatus, nearOfferPreviewsStatus, reviewsStatus } =
      initialState[Namespace.FullOffer];
    const { offerPreviewsStatus } = initialState[Namespace.Offers];

    const result = fullOfferSelectors.selectIsLoading(initialState as State);
    const isLoading =
      (offerFullStatus === RequestStatus.Loading) &&
      (nearOfferPreviewsStatus === RequestStatus.Loading) &&
      (reviewsStatus === RequestStatus.Loading) &&
      (offerPreviewsStatus === RequestStatus.Loading);

    expect(result).toEqual(isLoading);
  });

  it('should return isFailed from state', () => {
    const initialState = {
      [Namespace.FullOffer]: {
        offerFullStatus: RequestStatus.Failed,
        nearOfferPreviewsStatus: RequestStatus.Failed,
        reviewsStatus: RequestStatus.Failed,
      },
      [Namespace.Offers]: {
        offerPreviewsStatus: RequestStatus.Failed,
      },
    };
    const { offerFullStatus, nearOfferPreviewsStatus, reviewsStatus } =
      initialState[Namespace.FullOffer];
    const { offerPreviewsStatus } = initialState[Namespace.Offers];

    const result = fullOfferSelectors.selectIsFailed(initialState as State);
    const isFailed =
      (offerFullStatus === RequestStatus.Failed) &&
      (nearOfferPreviewsStatus === RequestStatus.Failed) &&
      (reviewsStatus === RequestStatus.Failed) &&
      (offerPreviewsStatus === RequestStatus.Failed);

    expect(result).toEqual(isFailed);
  });
});
