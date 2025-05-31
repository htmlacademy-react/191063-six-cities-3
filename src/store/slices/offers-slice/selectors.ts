import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';

export const selectCity = (state: State) => state[NameSpace.Offers].city;
export const selectSortOption = (state: State) => state[NameSpace.Offers].sortOption;

export const selectOfferPreviews = (state: State) => state[NameSpace.Offers].offerPreviews;
export const selectOfferPreviewsStatus = (state: State) => state[NameSpace.Offers].offerPreviewsStatus;

export const selectFavoriteOfferPreviews = (state: State) => state[NameSpace.Offers].favoriteOfferPreviews;
export const selectFavoriteOfferPreviewsStatus = (state: State) => state[NameSpace.Offers].favoriteOfferPreviewsStatus;
