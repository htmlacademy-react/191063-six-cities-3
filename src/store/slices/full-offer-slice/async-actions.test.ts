import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { extractActionsTypes, getMockOfferFull, getMockOfferPreviews, getMockReviews } from '../../../utils/mock-utils';
import { AppThunkDispatch, State } from '../../../types/store-types';
import { APIRoute, RequestStatus } from '../../../const/api-const';
import { fullOfferActions } from './full-offer-slice';
import { createAPI } from '../../../services/api';

describe('Full Offer slice async actions', () => {
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
    offerFull: null,
    offerFullStatus: RequestStatus.Idle,
    nearOfferPreviews: [],
    nearOfferPreviewsStatus: RequestStatus.Idle,
    reviews: [],
    reviewsStatus: RequestStatus.Idle,
    postReviewStatus: RequestStatus.Idle,
  };

  beforeEach(() => {
    store = mockStoreCreator({ FullOffer: initialState });
  });

  describe('getOfferFull', () => {
    it('should dispatch "getOfferFull.pending" and "getOfferFull.fulfilled" when server response 200', async () => {
      const mockOfferFull = getMockOfferFull();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferFull.id}`).reply(200, mockOfferFull);

      await store.dispatch(fullOfferActions.getOfferFull(mockOfferFull.id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof fullOfferActions.getOfferFull.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fullOfferActions.getOfferFull.pending.type,
        fullOfferActions.getOfferFull.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(mockOfferFull);
    });

    it('should dispatch "getOfferFull.pending" and "getOfferFull.rejected" when server response 400', async () => {
      const mockOfferFull = getMockOfferFull();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferFull.id}`).reply(400, null);

      await store.dispatch(fullOfferActions.getOfferFull(mockOfferFull.id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fullOfferActions.getOfferFull.pending.type,
        fullOfferActions.getOfferFull.rejected.type,
      ]);
    });
  });

  describe('getNearOfferPreviews', () => {
    it('should dispatch "getNearOfferPreviews.pending" and "getNearOfferPreviews.fulfilled" when server response 200', async () => {
      const mockOfferFull = getMockOfferFull();
      const mockNearOfferPreviews = getMockOfferPreviews();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferFull.id}/nearby`).reply(200, mockNearOfferPreviews);

      await store.dispatch(fullOfferActions.getNearOfferPreviews(mockOfferFull.id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof fullOfferActions.getNearOfferPreviews.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fullOfferActions.getNearOfferPreviews.pending.type,
        fullOfferActions.getNearOfferPreviews.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(mockNearOfferPreviews);
    });

    it('should dispatch "getNearOfferPreviews.pending" and "getNearOfferPreviews.rejected" when server response 400', async () => {
      const mockOfferFull = getMockOfferFull();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferFull.id}/nearby`).reply(400, []);

      await store.dispatch(fullOfferActions.getNearOfferPreviews(mockOfferFull.id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fullOfferActions.getNearOfferPreviews.pending.type,
        fullOfferActions.getNearOfferPreviews.rejected.type,
      ]);
    });
  });

  describe('getReviews', () => {
    it('should dispatch "getReviews.pending" and "getReviews.fulfilled" when server response 200', async () => {
      const mockOfferFull = getMockOfferFull();
      const mockReviews = getMockReviews();
      mockAxiosAdapter.onGet(`${APIRoute.Reviews}/${mockOfferFull.id}`).reply(200, mockReviews);

      await store.dispatch(fullOfferActions.getReviews(mockOfferFull.id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof fullOfferActions.getReviews.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fullOfferActions.getReviews.pending.type,
        fullOfferActions.getReviews.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(mockReviews);
    });

    it('should dispatch "getReviews.pending" and "getReviews.rejected" when server response 400', async () => {
      const mockOfferFull = getMockOfferFull();
      mockAxiosAdapter.onGet(`${APIRoute.Reviews}/${mockOfferFull.id}`).reply(400, []);

      await store.dispatch(fullOfferActions.getReviews(mockOfferFull.id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fullOfferActions.getReviews.pending.type,
        fullOfferActions.getReviews.rejected.type,
      ]);
    });
  });

  describe('postReview', () => {
    it('should dispatch "postReview.pending" and "postReview.fulfilled" when server response 201', async () => {
      const mockOfferFull = getMockOfferFull();
      const responseMockReview = getMockReviews()[0];
      const newMockReview = {
        rating: responseMockReview.rating,
        comment: responseMockReview.comment,
      };
      mockAxiosAdapter.onPost(`${APIRoute.Reviews}/${mockOfferFull.id}`).reply(201, responseMockReview);

      await store.dispatch(fullOfferActions.postReview({
        offerId: mockOfferFull.id,
        review: newMockReview,
      }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof fullOfferActions.postReview.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fullOfferActions.postReview.pending.type,
        fullOfferActions.postReview.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(responseMockReview);
    });

    it('should dispatch "postReview.pending" and "postReview.rejected" when server response 400', async () => {
      const mockOfferFull = getMockOfferFull();
      const responseMockReview = getMockReviews()[0];
      const newMockReview = {
        rating: responseMockReview.rating,
        comment: responseMockReview.comment,
      };
      mockAxiosAdapter.onPost(`${APIRoute.Reviews}/${mockOfferFull.id}`).reply(400);

      await store.dispatch(fullOfferActions.postReview({
        offerId: mockOfferFull.id,
        review: newMockReview,
      }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fullOfferActions.postReview.pending.type,
        fullOfferActions.postReview.rejected.type,
      ]);
    });
  });
});
