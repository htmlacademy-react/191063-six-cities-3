import { combineReducers } from '@reduxjs/toolkit';
import { fullOfferReducer } from './slices/full-offer-slice/full-offer-slice';
import { offersReducer } from './slices/offers-slice/offers-slice';
import { userReducer } from './slices/user-slice/user-slice';
import { Namespace } from '../const/store-const';

export const rootReducer = combineReducers({
  [Namespace.FullOffer]: fullOfferReducer,
  [Namespace.Offers]: offersReducer,
  [Namespace.User]: userReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>;
