import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersSlice } from '../../../types/store-types';
import { CITIES } from '../../../const/app-const';
import { SortOption } from '../../../components/sort/const';
import { RequestStatus } from '../../../const/api-const';
import { NameSpace } from '../../../const/store-const';
import { City } from '../../../types/app-types';
import { SortOptionType } from '../../../components/sort/types';
import { getOfferPreviewById } from '../../../utils/offer-utils';
import {
  getFavoriteOffers,
  getOffersPreviews,
  updateFavoriteOffer,
} from './async-actions';
import {
  selectCity,
  selectFavoriteOfferPreviews,
  selectFavoriteOfferPreviewsStatus,
  selectMainOffers,
  selectOfferPreviews,
  selectOfferPreviewsStatus,
  selectSortOption,
} from './selectors';

const initialState: OffersSlice = {
  city: CITIES.Paris,
  sortOption: SortOption[0],
  offerPreviews: [],
  offerPreviewsStatus: RequestStatus.Idle,
  favoriteOfferPreviews: [],
  favoriteOfferPreviewsStatus: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    setSortOption(state, action: PayloadAction<SortOptionType>) {
      state.sortOption = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getOffersPreviews.pending, (state) => {
        state.offerPreviewsStatus = RequestStatus.Loading;
      })
      .addCase(getOffersPreviews.fulfilled, (state, action) => {
        state.offerPreviews = action.payload;
        state.offerPreviewsStatus = RequestStatus.Success;
      })
      .addCase(getOffersPreviews.rejected, (state) => {
        state.offerPreviewsStatus = RequestStatus.Failed;
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
      .addCase(updateFavoriteOffer.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteOfferPreviews.push(action.payload);
        } else {
          state.favoriteOfferPreviews = state.favoriteOfferPreviews.filter(
            (offerPreview) => offerPreview.id !== action.payload.id
          );
        }
        getOfferPreviewById(state.offerPreviews, action.payload.id).isFavorite =
          action.payload.isFavorite;
      });
  },
});

export const offersReducer = offersSlice.reducer;

export const offersActions = {
  ...offersSlice.actions,
  getOffersPreviews,
  getFavoriteOffers,
  updateFavoriteOffer,
};
export const offersSelectors = {
  selectCity,
  selectSortOption,
  selectMainOffers,
  selectOfferPreviews,
  selectOfferPreviewsStatus,
  selectFavoriteOfferPreviews,
  selectFavoriteOfferPreviewsStatus,
};
