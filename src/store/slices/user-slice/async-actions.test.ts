import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { APIRoute, AuthorizationStatus, RequestStatus } from '../../../const/api-const';
import { extractActionsTypes, getMockCurrentUser } from '../../../utils/mock-utils';
import { AppThunkDispatch, State } from '../../../types/store-types';
import { userActions } from './user-slice';
import { createAPI } from '../../../services/api';

describe('User slice async actions', () => {
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
    currentUser: null,
    authStatus: AuthorizationStatus.Unknown,
    authRequestStatus: RequestStatus.Idle,
  };

  beforeEach(() => {
    store = mockStoreCreator({ User: initialState });
  });

  describe('checkAuth', () => {
    it('should dispatch "checkAuth.pending" and "checkAuth.fulfilled" when server response 200', async () => {
      const mockCurrentUser = getMockCurrentUser();
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, mockCurrentUser);

      await store.dispatch(userActions.checkAuth());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof userActions.checkAuth.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        userActions.checkAuth.pending.type,
        userActions.checkAuth.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(mockCurrentUser);
    });

    it('should dispatch "checkAuth.pending" and "checkAuth.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(userActions.checkAuth());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        userActions.checkAuth.pending.type,
        userActions.checkAuth.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    it('should dispatch "login.pending" and "login.fulfilled" when server response 201', async () => {
      const mockCurrentUser = getMockCurrentUser();
      mockAxiosAdapter.onPost(APIRoute.Login).reply(201, mockCurrentUser);

      await store.dispatch(userActions.login({
        login: 'username',
        password: 'q1w2e3',
      }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferFullActionFulfilled = emittedActions.at(1) as ReturnType<typeof userActions.login.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        userActions.login.pending.type,
        userActions.login.fulfilled.type,
      ]);

      expect(getOfferFullActionFulfilled.payload).toEqual(mockCurrentUser);
    });

    it('should dispatch "login.pending" and "login.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(400);

      await store.dispatch(userActions.login({
        login: 'username',
        password: 'q1w2e3',
      }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        userActions.login.pending.type,
        userActions.login.rejected.type,
      ]);
    });
  });

  describe('logout', () => {
    it('should dispatch "logout.pending" and "logout.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(userActions.logout());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        userActions.logout.pending.type,
        userActions.logout.fulfilled.type,
      ]);
    });
  });
});
