import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { extractActionsTypes, getMockOfferPreviews } from '../../../utils/mock-utils';
import { AppThunkDispatch, State } from '../../../types/store-types';
import { APIRoute, RequestStatus } from '../../../const/api-const';
import { offersActions } from './offers-slice';
import { SortOption } from '../../../components/sort/const';
import { createAPI } from '../../../services/api';
import { CITIES } from '../../../const/app-const';

describe('Offers slice async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    AppThunkDispatch
  >(middleware);
  let store: ReturnType<typeof mockStoreCreator>;
  const initialState = {
    city: CITIES.Paris,
    sortOption: SortOption[0],
    offerPreviews: [],
    offerPreviewsStatus: RequestStatus.Idle,
    favoriteOfferPreviews: [],
    favoriteOfferPreviewsStatus: RequestStatus.Idle,
  };

  beforeEach(() => {
    store = mockStoreCreator({ Offers: initialState });
  });

  describe('getOfferPreviews', () => {
    it('should dispatch "getOfferPreviews.pending" and "getOfferPreviews.fulfilled" when server response 200', async () => {
      const mockOfferPreviews = getMockOfferPreviews();
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOfferPreviews);

      await store.dispatch(offersActions.getOffersPreviews());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof offersActions.getOffersPreviews.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        offersActions.getOffersPreviews.pending.type,
        offersActions.getOffersPreviews.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(mockOfferPreviews);
    });

    it('should dispatch "getOfferPreviews.pending" and "getOfferPreviews.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400);

      await store.dispatch(offersActions.getOffersPreviews());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        offersActions.getOffersPreviews.pending.type,
        offersActions.getOffersPreviews.rejected.type,
      ]);
    });
  });

  describe('getFavoriteOffers', () => {
    it('should dispatch "getFavoriteOffers.pending" and "getFavoriteOffers.fulfilled" when server response 200', async () => {
      const mockFavoriteOfferPreviews = getMockOfferPreviews();
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteOfferPreviews);

      await store.dispatch(offersActions.getFavoriteOffers());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof offersActions.getFavoriteOffers.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        offersActions.getFavoriteOffers.pending.type,
        offersActions.getFavoriteOffers.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(mockFavoriteOfferPreviews);
    });

    it('should dispatch "getFavoriteOffers.pending" and "getFavoriteOffers.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400);

      await store.dispatch(offersActions.getFavoriteOffers());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        offersActions.getFavoriteOffers.pending.type,
        offersActions.getFavoriteOffers.rejected.type,
      ]);
    });
  });

  describe('updateFavoriteOffer', () => {
    it('should dispatch "updateFavoriteOffer.pending" and "updateFavoriteOffer.fulfilled" when server response 200', async () => {
      const mockOfferPreview = getMockOfferPreviews()[0];
      mockOfferPreview.isFavorite = false;
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOfferPreview.id}/1`).reply(200, mockOfferPreview);

      await store.dispatch(offersActions.updateFavoriteOffer({
        offerId: mockOfferPreview.id,
        status: 1,
      }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof offersActions.updateFavoriteOffer.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        offersActions.updateFavoriteOffer.pending.type,
        offersActions.updateFavoriteOffer.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(mockOfferPreview);
    });

    it('should dispatch "updateFavoriteOffer.pending" and "updateFavoriteOffer.rejected" when server response 400', async () => {
      const mockOfferPreview = getMockOfferPreviews()[0];
      mockOfferPreview.isFavorite = false;
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOfferPreview.id}/1`).reply(400);

      await store.dispatch(offersActions.updateFavoriteOffer({
        offerId: mockOfferPreview.id,
        status: 1,
      }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        offersActions.updateFavoriteOffer.pending.type,
        offersActions.updateFavoriteOffer.rejected.type,
      ]);
    });
  });
});
