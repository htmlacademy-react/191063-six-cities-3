import { AuthorizationStatus } from '../const';
import { State } from '../types/state';

const selectCity = (state: State) => state.city;
const selectSortOption = (state: State) => state.sortOption;
const selectOfferPreviews = (state: State) => state.offerPreviews;
const selectOfferPreviewsLoadingStatus = (state: State) => state.isOfferPreviewsLoading;
const selectAuthorizationStatus = (state: State) => state.authorizationStatus;
const selectIsUserLoggedIn = (state: State) => state.authorizationStatus === AuthorizationStatus.Auth;

export {
  selectCity,
  selectSortOption,
  selectOfferPreviews,
  selectOfferPreviewsLoadingStatus,
  selectAuthorizationStatus,
  selectIsUserLoggedIn,
};
