import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortOptionType } from '../components/sort/types';
import { OfferPreviews } from '../types/offer';
import { AuthorizationStatusType } from '../const';

const setError = createAction<string | null>('app/setError');

const setCity = createAction<City>('city/setCity');

const setSortOption = createAction<SortOptionType>('offer/setSortOption');
const loadOfferPreviews = createAction<OfferPreviews>('offer/loadOfferPreviews');
const setOfferPreviewsLoadingStatus = createAction<boolean>('offer/setOfferPreviewsLoadingStatus');

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

export { setError, setCity, setSortOption, loadOfferPreviews, setOfferPreviewsLoadingStatus, requireAuthorization};
