import { offersActions, offersReducer } from './offers-slice';
import { getMockOfferPreviews } from '../../../utils/mock-utils';
import { RequestStatus } from '../../../const/api-const';
import { SortOption } from '../../../components/sort/sort-const';
import { Cities } from '../../../const/app-const';

describe('Offers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const initialState = {
      city: Cities.Paris,
      sortOption: SortOption[0],
      offerPreviews: [],
      offerPreviewsStatus: RequestStatus.Idle,
      favoriteOfferPreviews: [],
      favoriteOfferPreviewsStatus: RequestStatus.Idle,
      updateFavoriteStatus: RequestStatus.Idle,
    };
    const expectedState = {
      city: Cities.Paris,
      sortOption: SortOption[0],
      offerPreviews: [],
      offerPreviewsStatus: RequestStatus.Idle,
      favoriteOfferPreviews: [],
      favoriteOfferPreviewsStatus: RequestStatus.Idle,
      updateFavoriteStatus: RequestStatus.Idle,
    };

    const result = offersReducer(initialState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with undefined state and empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: Cities.Paris,
      sortOption: SortOption[0],
      offerPreviews: [],
      offerPreviewsStatus: RequestStatus.Idle,
      favoriteOfferPreviews: [],
      favoriteOfferPreviewsStatus: RequestStatus.Idle,
      updateFavoriteStatus: RequestStatus.Idle,
    };

    const result = offersReducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set given City', () => {
    const newCity = Cities.Amsterdam;
    const expectedState = {
      city: newCity,
      sortOption: SortOption[0],
      offerPreviews: [],
      offerPreviewsStatus: RequestStatus.Idle,
      favoriteOfferPreviews: [],
      favoriteOfferPreviewsStatus: RequestStatus.Idle,
      updateFavoriteStatus: RequestStatus.Idle,
    };

    const result = offersReducer(undefined, offersActions.setCity(newCity));

    expect(result.city).toEqual(expectedState.city);
  });

  it('should set given Sort Option', () => {
    const newSortOption = SortOption[1];
    const expectedState = {
      city: Cities.Paris,
      sortOption: newSortOption,
      offerPreviews: [],
      offerPreviewsStatus: RequestStatus.Idle,
      favoriteOfferPreviews: [],
      favoriteOfferPreviewsStatus: RequestStatus.Idle,
      updateFavoriteStatus: RequestStatus.Idle,
    };

    const result = offersReducer(
      undefined,
      offersActions.setSortOption(newSortOption)
    );

    expect(result.sortOption).toEqual(expectedState.sortOption);
  });

  describe('Get Offer Previews', () => {
    it('should set "offerPreviewsStatus" to "Loading" with "getOffersPreviews.pending"', () => {
      const expectedState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [],
        offerPreviewsStatus: RequestStatus.Loading,
        favoriteOfferPreviews: [],
        favoriteOfferPreviewsStatus: RequestStatus.Idle,
        updateFavoriteStatus: RequestStatus.Idle,
      };

      const result = offersReducer(
        undefined,
        offersActions.getOffersPreviews.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "offerPreviewsStatus" to "Success" and fill in offerPreviews with "getOffersPreviews.fulfilled"', () => {
      const mockOfferPreviews = getMockOfferPreviews();
      const expectedState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: mockOfferPreviews,
        offerPreviewsStatus: RequestStatus.Success,
        favoriteOfferPreviews: [],
        favoriteOfferPreviewsStatus: RequestStatus.Idle,
        updateFavoriteStatus: RequestStatus.Idle,
      };

      const result = offersReducer(
        undefined,
        offersActions.getOffersPreviews.fulfilled(
          mockOfferPreviews,
          '',
          undefined
        )
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "offerPreviewsStatus" to "Failed" with "getOffersPreviews.rejected"', () => {
      const expectedState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [],
        offerPreviewsStatus: RequestStatus.Failed,
        favoriteOfferPreviews: [],
        favoriteOfferPreviewsStatus: RequestStatus.Idle,
        updateFavoriteStatus: RequestStatus.Idle,
      };

      const result = offersReducer(
        undefined,
        offersActions.getOffersPreviews.rejected
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('Get Favorite Offer Previews', () => {
    it('should set "favoriteOfferPreviewsStatus" to "Loading" with "getFavoriteOffers.pending"', () => {
      const expectedState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [],
        offerPreviewsStatus: RequestStatus.Idle,
        favoriteOfferPreviews: [],
        favoriteOfferPreviewsStatus: RequestStatus.Loading,
        updateFavoriteStatus: RequestStatus.Idle,
      };

      const result = offersReducer(
        undefined,
        offersActions.getFavoriteOffers.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "favoriteOfferPreviewsStatus" to "Success" and fill in favoriteOfferPreviews with "getFavoriteOffers.fulfilled"', () => {
      const mockOfferPreviews = getMockOfferPreviews();
      const expectedState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [],
        offerPreviewsStatus: RequestStatus.Idle,
        favoriteOfferPreviews: mockOfferPreviews,
        favoriteOfferPreviewsStatus: RequestStatus.Success,
        updateFavoriteStatus: RequestStatus.Idle,
      };

      const result = offersReducer(
        undefined,
        offersActions.getFavoriteOffers.fulfilled(
          mockOfferPreviews,
          '',
          undefined
        )
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "favoriteOfferPreviewsStatus" to "Failed" with "getFavoriteOffers.rejected"', () => {
      const expectedState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [],
        offerPreviewsStatus: RequestStatus.Idle,
        favoriteOfferPreviews: [],
        favoriteOfferPreviewsStatus: RequestStatus.Failed,
        updateFavoriteStatus: RequestStatus.Idle,
      };

      const result = offersReducer(
        undefined,
        offersActions.getFavoriteOffers.rejected
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('Update Favorite Offer', () => {
    it('should add offer preview in favoriteOfferPreviews with "updateFavoriteOffer.fulfilled" and status = 1', () => {
      const mockOfferPreview = getMockOfferPreviews()[0];
      const initialMockOfferPreview = {
        ...mockOfferPreview,
        isFavorite: false,
      };
      const updatedMockOfferPreview = { ...mockOfferPreview, isFavorite: true };
      const initialState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [initialMockOfferPreview],
        offerPreviewsStatus: RequestStatus.Idle,
        favoriteOfferPreviews: [],
        favoriteOfferPreviewsStatus: RequestStatus.Idle,
        updateFavoriteStatus: RequestStatus.Idle,
      };
      const expectedState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [updatedMockOfferPreview],
        offerPreviewsStatus: RequestStatus.Idle,
        favoriteOfferPreviews: [updatedMockOfferPreview],
        favoriteOfferPreviewsStatus: RequestStatus.Idle,
        updateFavoriteStatus: RequestStatus.Success,
      };

      const result = offersReducer(
        initialState,
        offersActions.updateFavoriteOffer.fulfilled(
          updatedMockOfferPreview,
          '',
          {
            offerId: mockOfferPreview.id,
            status: 1,
          }
        )
      );

      expect(result).toEqual(expectedState);
    });

    it('should remove offer preview from favoriteOfferPreviews with "updateFavoriteOffer.fulfilled" and status = 0', () => {
      const mockOfferPreview = getMockOfferPreviews()[0];
      const initialMockOfferPreview = { ...mockOfferPreview, isFavorite: true };
      const updatedMockOfferPreview = {
        ...mockOfferPreview,
        isFavorite: false,
      };
      const initialState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [initialMockOfferPreview],
        offerPreviewsStatus: RequestStatus.Idle,
        favoriteOfferPreviews: [initialMockOfferPreview],
        favoriteOfferPreviewsStatus: RequestStatus.Idle,
        updateFavoriteStatus: RequestStatus.Idle,
      };
      const expectedState = {
        city: Cities.Paris,
        sortOption: SortOption[0],
        offerPreviews: [updatedMockOfferPreview],
        offerPreviewsStatus: RequestStatus.Idle,
        favoriteOfferPreviews: [],
        favoriteOfferPreviewsStatus: RequestStatus.Idle,
        updateFavoriteStatus: RequestStatus.Success,
      };

      const result = offersReducer(
        initialState,
        offersActions.updateFavoriteOffer.fulfilled(
          updatedMockOfferPreview,
          '',
          {
            offerId: mockOfferPreview.id,
            status: 0,
          }
        )
      );

      expect(result).toEqual(expectedState);
    });
  });
});
