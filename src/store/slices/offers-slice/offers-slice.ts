import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOfferPreviewById } from '../../../utils/offer-utils';
import { SortOptionType } from '../../../components/sort/sort-types';
import { RequestStatus } from '../../../const/api-const';
import { OffersSlice } from '../../../types/store-types';
import { SortOption } from '../../../components/sort/sort-const';
import { Namespace } from '../../../const/store-const';
import { Cities } from '../../../const/app-const';
import { City } from '../../../types/app-types';
import {
  selectFavoriteOfferPreviewsStatus,
  selectIsUpdateFavoriteLoading,
  selectFavoriteOfferPreviews,
  selectOfferPreviewsStatus,
  selectOfferPreviews,
  selectMainOffers,
  selectSortOption,
  selectCity,
} from './selectors';
import {
  updateFavoriteOffer,
  getFavoriteOffers,
  getOffersPreviews,
} from './async-actions';

const initialState: OffersSlice = {
  city: Cities.Paris,
  sortOption: SortOption[0],
  offerPreviews: [],
  offerPreviewsStatus: RequestStatus.Idle,
  favoriteOfferPreviews: [],
  favoriteOfferPreviewsStatus: RequestStatus.Idle,
  updateFavoriteStatus: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: Namespace.Offers,
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
      .addCase(updateFavoriteOffer.pending, (state) => {
        state.updateFavoriteStatus = RequestStatus.Loading;
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
        state.updateFavoriteStatus = RequestStatus.Success;
      })
      .addCase(updateFavoriteOffer.rejected, (state) => {
        state.updateFavoriteStatus = RequestStatus.Failed;
      });
  },
});

export const offersReducer = offersSlice.reducer;

export const offersActions = {
  ...offersSlice.actions,
  updateFavoriteOffer,
  getOffersPreviews,
  getFavoriteOffers,
};
export const offersSelectors = {
  selectFavoriteOfferPreviewsStatus,
  selectIsUpdateFavoriteLoading,
  selectFavoriteOfferPreviews,
  selectOfferPreviewsStatus,
  selectOfferPreviews,
  selectSortOption,
  selectMainOffers,
  selectCity,
};
