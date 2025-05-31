import { createReducer } from '@reduxjs/toolkit';
import {
  redirectToRoute,
  setCity,
  setSortOption,
} from './action';
import {
  AppRoute,
  AuthorizationStatus,
  AuthorizationStatusType,
  CITIES,
  RequestStatus,
  RequestStatusType,
} from '../const';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';
import { OfferFull, OfferPreviews } from '../types/offer';
import { Values } from '../types/common';
import { Reviews } from '../types/review';
import {
  checkAuth,
  login,
  logout,
  getOfferPreviews,
  getOfferFull,
  getReviews,
  getNearOfferPreviews,
  postReview,
  getFavoriteOffers,
} from './api-actions';
import { sortReviewsDate } from '../utils/reviews-utils';
import { dropToken, saveToken } from '../services/token';
import { CurrentUser } from '../types/user';

type State = {
  currentUser: CurrentUser | null;
  authRequestStatus: RequestStatusType;
  authorizationStatus: AuthorizationStatusType;
  city: Values<typeof CITIES>;
  sortOption: SortOptionType;

  offerPreviews: OfferPreviews;
  offerPreviewsStatus: RequestStatusType;

  offerFull: OfferFull | null;
  offerFullStatus: RequestStatusType;

  nearOfferPreviews: OfferPreviews;
  nearOfferPreviewsStatus: RequestStatusType;

  favoriteOfferPreviews: OfferPreviews;
  favoriteOfferPreviewsStatus: RequestStatusType;

  reviews: Reviews;
  reviewsStatus: RequestStatusType;

  postReviewStatus: RequestStatusType;
};

const initialState: State = {
  currentUser: null,
  authRequestStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown,
  city: CITIES.Paris,
  sortOption: SortOption[0],

  offerPreviews: [],
  offerPreviewsStatus: RequestStatus.Idle,

  offerFull: null,
  offerFullStatus: RequestStatus.Idle,

  nearOfferPreviews: [],
  nearOfferPreviewsStatus: RequestStatus.Idle,

  favoriteOfferPreviews: [],
  favoriteOfferPreviewsStatus: RequestStatus.Idle,

  reviews: [],
  reviewsStatus: RequestStatus.Idle,

  postReviewStatus: RequestStatus.Idle,
};

type ReducerType = ReturnType<typeof reducer>;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.currentUser = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(login.pending, (state) => {
      state.authRequestStatus = RequestStatus.Loading;
    })
    .addCase(login.fulfilled, (state, action) => {
      saveToken(action.payload.token);
      state.currentUser = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.authRequestStatus = RequestStatus.Success;
      redirectToRoute(AppRoute.Root);
    })
    .addCase(login.rejected, (state) => {
      state.authRequestStatus = RequestStatus.Failed;
    })
    .addCase(logout.fulfilled, (state) => {
      dropToken();
      state.currentUser = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      redirectToRoute(AppRoute.Root);
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(getOfferPreviews.pending, (state) => {
      state.offerPreviewsStatus = RequestStatus.Loading;
    })
    .addCase(getOfferPreviews.fulfilled, (state, action) => {
      state.offerPreviews = action.payload;
      state.offerPreviewsStatus = RequestStatus.Success;
    })
    .addCase(getOfferPreviews.rejected, (state) => {
      state.offerPreviewsStatus = RequestStatus.Failed;
    })
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
    .addCase(getReviews.pending, (state) => {
      state.reviewsStatus = RequestStatus.Loading;
    })
    .addCase(getReviews.fulfilled, (state, action) => {
      state.reviews = sortReviewsDate(action.payload);
      state.reviewsStatus = RequestStatus.Success;
    })
    .addCase(getReviews.rejected, (state) => {
      state.reviewsStatus = RequestStatus.Failed;
    })
    .addCase(getNearOfferPreviews.pending, (state) => {
      state.nearOfferPreviewsStatus = RequestStatus.Loading;
    })
    .addCase(getNearOfferPreviews.fulfilled, (state, action) => {
      state.nearOfferPreviews = action.payload.slice(0, 3);
      state.nearOfferPreviewsStatus = RequestStatus.Success;
    })
    .addCase(getNearOfferPreviews.rejected, (state) => {
      state.nearOfferPreviewsStatus = RequestStatus.Failed;
    })
    .addCase(getFavoriteOffers.pending, (state) => {
      state.favoriteOfferPreviewsStatus = RequestStatus.Loading;
    })
    .addCase(getFavoriteOffers.fulfilled, (state, action) => {
      state.favoriteOfferPreviews = action.payload;
      state.favoriteOfferPreviewsStatus = RequestStatus.Success;
    })
    .addCase(getFavoriteOffers.rejected, (state) => {
      state.favoriteOfferPreviewsStatus = RequestStatus.Failed;
    })
    .addCase(postReview.pending, (state) => {
      state.postReviewStatus = RequestStatus.Loading;
    })
    .addCase(postReview.fulfilled, (state, action) => {
      state.reviews.unshift(action.payload);
      state.postReviewStatus = RequestStatus.Success;
    })
    .addCase(postReview.rejected, (state) => {
      state.postReviewStatus = RequestStatus.Failed;
    });
});

export type { State, ReducerType };
export { reducer };
