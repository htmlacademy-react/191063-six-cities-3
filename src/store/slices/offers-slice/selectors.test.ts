import { getMockOfferPreviews } from '../../../utils/mock-utils';
import { offersSelectors } from './offers-slice';
import { RequestStatus } from '../../../const/api-const';
import { SortOption } from '../../../components/sort/sort-const';
import { Namespace } from '../../../const/store-const';
import { Cities } from '../../../const/app-const';
import { State } from '../../../types/store-types';

describe('Offers selectors', () => {
  const mockOfferPreviews = getMockOfferPreviews();
  const mockNearOfferPreviews = getMockOfferPreviews();
  const state = {
    [Namespace.Offers]: {
      city: Cities.Paris,
      sortOption: SortOption[0],
      offerPreviews: mockOfferPreviews,
      offerPreviewsStatus: RequestStatus.Idle,
      favoriteOfferPreviews: mockNearOfferPreviews,
      favoriteOfferPreviewsStatus: RequestStatus.Idle,
    },
  };

  it('should return city from state', () => {
    const { city } = state[Namespace.Offers];
    const result = offersSelectors.selectCity(state as State);
    expect(result).toEqual(city);
  });

  it('should return offerFullStatus from state', () => {
    const { sortOption } = state[Namespace.Offers];
    const result = offersSelectors.selectSortOption(state as State);
    expect(result).toEqual(sortOption);
  });

  it('should return nearOfferPreviews from state', () => {
    const { offerPreviews } = state[Namespace.Offers];
    const result = offersSelectors.selectOfferPreviews(state as State);
    expect(result).toEqual(offerPreviews);
  });

  it('should return nearOfferPreviewsStatus from state', () => {
    const { offerPreviewsStatus } = state[Namespace.Offers];
    const result = offersSelectors.selectOfferPreviewsStatus(state as State);
    expect(result).toEqual(offerPreviewsStatus);
  });

  it('should return reviews from state', () => {
    const { favoriteOfferPreviews } = state[Namespace.Offers];
    const result = offersSelectors.selectFavoriteOfferPreviews(state as State);
    expect(result).toEqual(favoriteOfferPreviews);
  });

  it('should return reviewsStatus from state', () => {
    const { favoriteOfferPreviewsStatus } = state[Namespace.Offers];
    const result = offersSelectors.selectFavoriteOfferPreviewsStatus(
      state as State
    );
    expect(result).toEqual(favoriteOfferPreviewsStatus);
  });

  it('should return mainOffers from state', () => {
    const { city, offerPreviews } = state[Namespace.Offers];
    const mainOffers = offerPreviews.filter(
      (offer) => offer.city.name === city.name
    );
    const result = offersSelectors.selectMainOffers(state as State);
    expect(result).toEqual(mainOffers);
  });
});
