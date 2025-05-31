import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';
import { sortOfferPreviews } from '../../../components/sort/utils';
import { getCityOffers } from '../../../utils/city-utils';

const selectSelf = (state: State) => state[NameSpace.Offers];

export const selectCity = createSelector(selectSelf, (state) => state.city);

export const selectSortOption = createSelector(
  selectSelf,
  (state) => state.sortOption
);

export const selectOfferPreviews = createSelector(
  selectSelf,
  (state) => state.offerPreviews
);

export const selectOfferPreviewsStatus = createSelector(
  selectSelf,
  (state) => state.offerPreviewsStatus
);

export const selectFavoriteOfferPreviews = createSelector(
  selectSelf,
  (state) => state.favoriteOfferPreviews
);

export const selectFavoriteOfferPreviewsStatus = createSelector(
  selectSelf,
  (state) => state.favoriteOfferPreviewsStatus
);

export const selectMainOffers = createSelector(selectSelf, (state) => {
  const currentCity = state.city;
  const currentSortOption = state.sortOption;
  const allOfferPreviews = state.offerPreviews;

  let offerPreviews = getCityOffers(currentCity, allOfferPreviews);
  offerPreviews = sortOfferPreviews(offerPreviews, currentSortOption);

  return offerPreviews;
});
