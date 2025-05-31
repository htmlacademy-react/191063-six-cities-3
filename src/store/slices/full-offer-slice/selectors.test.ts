import { fullOfferSelectors } from './full-offer-slice';
import { RequestStatus } from '../../../const/api-const';
import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';
import {
  getMockOfferFull,
  getMockOfferFullPreview,
  getMockOfferPreviews,
  getMockReviews,
} from '../../../utils/mock-utils';

describe('Full Offer selectors', () => {
  const mockOfferFull = getMockOfferFull();
  const mockNearOfferPreviews = getMockOfferPreviews();
  const mockReviews = getMockReviews();
  const state = {
    [NameSpace.FullOffer]: {
      offerFull: mockOfferFull,
      offerFullStatus: RequestStatus.Idle,
      nearOfferPreviews: mockNearOfferPreviews,
      nearOfferPreviewsStatus: RequestStatus.Idle,
      reviews: mockReviews,
      reviewsStatus: RequestStatus.Idle,
      postReviewStatus: RequestStatus.Idle,
    },
    [NameSpace.Offers]: {
      offerPreviews: [getMockOfferFullPreview()],
      offerPreviewsStatus: RequestStatus.Idle,
    },
  };

  it('should return offerFull from state', () => {
    const { offerFull } = state[NameSpace.FullOffer];
    const result = fullOfferSelectors.selectOfferFull(state as State);
    expect(result).toEqual(offerFull);
  });

  it('should return offerFullStatus from state', () => {
    const { offerFullStatus } = state[NameSpace.FullOffer];
    const result = fullOfferSelectors.selectOfferFullStatus(state as State);
    expect(result).toEqual(offerFullStatus);
  });

  it('should return nearOfferPreviews from state', () => {
    const { nearOfferPreviews } = state[NameSpace.FullOffer];
    const result = fullOfferSelectors.selectNearOfferPreviews(state as State);
    expect(result).toEqual(nearOfferPreviews);
  });

  it('should return nearOfferPreviewsStatus from state', () => {
    const { nearOfferPreviewsStatus } = state[NameSpace.FullOffer];
    const result = fullOfferSelectors.selectNearOfferPreviewsStatus(state as State);
    expect(result).toEqual(nearOfferPreviewsStatus);
  });

  it('should return reviewsStatus from state', () => {
    const { reviewsStatus } = state[NameSpace.FullOffer];
    const result = fullOfferSelectors.selectReviewsStatus(state as State);
    expect(result).toEqual(reviewsStatus);
  });

  it('should return postReviewStatus from state', () => {
    const { postReviewStatus } = state[NameSpace.FullOffer];
    const result = fullOfferSelectors.selectPostReviewStatus(state as State);
    expect(result).toEqual(postReviewStatus);
  });

  it('should return currentOfferPreview from state', () => {
    const { offerPreviews } = state[NameSpace.Offers];
    const result = fullOfferSelectors.selectCurrentOfferPreview(state as State);
    expect(result).toEqual(offerPreviews[0]);
  });

  it('should return isLoading from state', () => {
    const initialState = {
      [NameSpace.FullOffer]: {
        offerFullStatus: RequestStatus.Loading,
        nearOfferPreviewsStatus: RequestStatus.Loading,
        reviewsStatus: RequestStatus.Loading,
      },
      [NameSpace.Offers]: {
        offerPreviewsStatus: RequestStatus.Loading,
      },
    };
    const { offerFullStatus, nearOfferPreviewsStatus, reviewsStatus } =
      initialState[NameSpace.FullOffer];
    const { offerPreviewsStatus } = initialState[NameSpace.Offers];

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
      [NameSpace.FullOffer]: {
        offerFullStatus: RequestStatus.Failed,
        nearOfferPreviewsStatus: RequestStatus.Failed,
        reviewsStatus: RequestStatus.Failed,
      },
      [NameSpace.Offers]: {
        offerPreviewsStatus: RequestStatus.Failed,
      },
    };
    const { offerFullStatus, nearOfferPreviewsStatus, reviewsStatus } =
      initialState[NameSpace.FullOffer];
    const { offerPreviewsStatus } = initialState[NameSpace.Offers];

    const result = fullOfferSelectors.selectIsFailed(initialState as State);
    const isFailed =
      (offerFullStatus === RequestStatus.Failed) &&
      (nearOfferPreviewsStatus === RequestStatus.Failed) &&
      (reviewsStatus === RequestStatus.Failed) &&
      (offerPreviewsStatus === RequestStatus.Failed);

    expect(result).toEqual(isFailed);
  });
});
