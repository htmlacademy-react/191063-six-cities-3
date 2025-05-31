import { createReducer } from '@reduxjs/toolkit';
import { setError, setCity, setSortOption, loadOfferPreviews, requireAuthorization, setOfferPreviewsLoadingStatus,} from './action';
import { AuthorizationStatus, AuthorizationStatusType, CITIES } from '../const';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';
import { OfferPreviews } from '../types/offer';

const initialState = {
  error: null as string | null,
  city: CITIES.Paris,
  sortOption: SortOption[0] as SortOptionType,
  offerPreviews: [] as OfferPreviews,
  isOfferPreviewsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown as AuthorizationStatusType,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(loadOfferPreviews, (state, action) => {
      state.offerPreviews = action.payload;
    })
    .addCase(setOfferPreviewsLoadingStatus, (state, action) => {
      state.isOfferPreviewsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
