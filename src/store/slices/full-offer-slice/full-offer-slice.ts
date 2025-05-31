import { createSlice } from '@reduxjs/toolkit';
import { updateFavoriteOffer } from '../offers-slice/async-actions';
import { FullOfferSlice } from '../../../types/store-types';
import { RequestStatus } from '../../../const/api-const';
import { Namespace } from '../../../const/store-const';
import { logout } from '../user-slice/async-actions';
import {
  selectNearOfferPreviewsStatus,
  selectCurrentOfferPreview,
  selectNearOfferPreviews,
  selectPostReviewStatus,
  selectOfferFullStatus,
  selectReviewsStatus,
  selectIsLoading,
  selectOfferFull,
  selectIsFailed,
  selectReviews,
} from './selectors';
import {
  getNearOfferPreviews,
  getOfferFull,
  getReviews,
  postReview,
} from './async-actions';

const initialState: FullOfferSlice = {
  offerFull: null,
  offerFullStatus: RequestStatus.Idle,
  nearOfferPreviews: [],
  nearOfferPreviewsStatus: RequestStatus.Idle,
  reviews: [],
  reviewsStatus: RequestStatus.Idle,
  postReviewStatus: RequestStatus.Idle,
};

const fullOfferSlice = createSlice({
  name: Namespace.FullOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOfferFull.pending, (state) => {
        state.offerFullStatus = RequestStatus.Loading;
      })
      .addCase(getOfferFull.fulfilled, (state, action) => {
        state.offerFull = action.payload;
        state.offerFullStatus = RequestStatus.Success;
      })
      .addCase(getOfferFull.rejected, (state) => {
        state.offerFullStatus = RequestStatus.Failed;
      })
      .addCase(getNearOfferPreviews.pending, (state) => {
        state.nearOfferPreviewsStatus = RequestStatus.Loading;
      })
      .addCase(getNearOfferPreviews.fulfilled, (state, action) => {
        state.nearOfferPreviews = action.payload;
        state.nearOfferPreviewsStatus = RequestStatus.Success;
      })
      .addCase(getNearOfferPreviews.rejected, (state) => {
        state.nearOfferPreviewsStatus = RequestStatus.Failed;
      })
      .addCase(getReviews.pending, (state) => {
        state.reviewsStatus = RequestStatus.Loading;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsStatus = RequestStatus.Success;
      })
      .addCase(getReviews.rejected, (state) => {
        state.reviewsStatus = RequestStatus.Failed;
      })
      .addCase(postReview.pending, (state) => {
        state.postReviewStatus = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.postReviewStatus = RequestStatus.Success;
      })
      .addCase(postReview.rejected, (state) => {
        state.postReviewStatus = RequestStatus.Failed;
      })
      .addCase(updateFavoriteOffer.fulfilled, (state, action) => {
        if (state.offerFull?.id === action.payload.id) {
          state.offerFull.isFavorite = action.payload.isFavorite;
        }

        const nearOfferPreview = state.nearOfferPreviews
          .find((offerPreview) => offerPreview.id === action.payload.id);
        if (nearOfferPreview) {
          nearOfferPreview.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        if (state.offerFull?.isFavorite) {
          state.offerFull.isFavorite = false;
        }
      });
  },
});

export const fullOfferReducer = fullOfferSlice.reducer;

export const fullOfferActions = {
  getNearOfferPreviews,
  getOfferFull,
  getReviews,
  postReview,
};

export const fullOfferSelectors = {
  selectNearOfferPreviewsStatus,
  selectCurrentOfferPreview,
  selectNearOfferPreviews,
  selectPostReviewStatus,
  selectOfferFullStatus,
  selectReviewsStatus,
  selectOfferFull,
  selectIsLoading,
  selectIsFailed,
  selectReviews,
};
