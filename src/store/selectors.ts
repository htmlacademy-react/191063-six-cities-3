import { State } from '../types/state';

const selectCity = (state: State) => state.city;
const selectSortOption = (state: State) => state.sortOption;
const selectOfferPreviews = (state: State) => state.offerPreviews;

export { selectCity, selectSortOption, selectOfferPreviews };
