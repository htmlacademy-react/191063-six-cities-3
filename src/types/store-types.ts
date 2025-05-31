import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { SortOptionType } from '../components/sort/types';
import { NameSpace } from '../const/store-const';
import { store } from '../store';
import { AuthorizationStatusType, RequestStatusType } from './api-types';
import { City } from './app-types';
import { Values } from './common-types';
import { OfferFull, OfferPreviews } from './offer-types';
import { Reviews } from './review-types';
import { CurrentUser } from './user-types';
import { createAPI } from '../services/api';

export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export type State = ReturnType<typeof store.getState>;

export type NameSpaceType = Values<typeof NameSpace>;

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

