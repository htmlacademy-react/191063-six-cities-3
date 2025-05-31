import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { AuthorizationStatusType, RequestStatusType } from './api-types';
import { OfferFull, OfferPreviews } from './offer-types';
import { SortOptionType } from '../components/sort/sort-types';
import { CurrentUser } from './user-types';
import { Namespace } from '../const/store-const';
import { createAPI } from '../services/api';
import { Reviews } from './review-types';
import { Values } from './common-types';
import { store } from '../store';
import { City } from './app-types';

export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<
  State,
  ReturnType<typeof createAPI>,
  Action
>;

export type State = ReturnType<typeof store.getState>;

export type NamespaceType = Values<typeof Namespace>;

export type UserSlice = {
  authStatus: AuthorizationStatusType;
  authRequestStatus: RequestStatusType;
  currentUser: CurrentUser | null;
};

export type OffersSlice = {
  city: City;
  sortOption: SortOptionType;
  offerPreviews: OfferPreviews;
  offerPreviewsStatus: RequestStatusType;
  favoriteOfferPreviews: OfferPreviews;
  favoriteOfferPreviewsStatus: RequestStatusType;
  updateFavoriteStatus: RequestStatusType;
};

export type FullOfferSlice = {
  offerFull: OfferFull | null;
  offerFullStatus: RequestStatusType;
  nearOfferPreviews: OfferPreviews;
  nearOfferPreviewsStatus: RequestStatusType;
  reviews: Reviews;
  reviewsStatus: RequestStatusType;
  postReviewStatus: RequestStatusType;
};
