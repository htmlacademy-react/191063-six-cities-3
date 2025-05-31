import { AuthorizationStatus, RequestStatus } from '../../../const/api-const';
import { getMockCurrentUser } from '../../../utils/mock-utils';
import { userActions, userReducer } from './user-slice';

describe('User Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const initialState = {
      currentUser: null,
      authStatus: AuthorizationStatus.Unknown,
      authRequestStatus: RequestStatus.Idle,
    };
    const expectedState = {
      currentUser: null,
      authStatus: AuthorizationStatus.Unknown,
      authRequestStatus: RequestStatus.Idle,
    };

    const result = userReducer(initialState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with undefined state and empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      currentUser: null,
      authStatus: AuthorizationStatus.Unknown,
      authRequestStatus: RequestStatus.Idle,
    };

    const result = userReducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('Check Authorization', () => {
    it('should set "authStatus" to "Auth" and currentUser to given User with "checkAuth.fulfilled"', () => {
      const mockCurrentUser = getMockCurrentUser();
      const expectedState = {
        currentUser: mockCurrentUser,
        authStatus: AuthorizationStatus.Auth,
        authRequestStatus: RequestStatus.Idle,
      };

      const result = userReducer(
        undefined,
        userActions.checkAuth.fulfilled(mockCurrentUser, '', undefined)
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "authStatus" to "NoAuth" and currentUser to "null" with "checkAuth.rejected"', () => {
      const expectedState = {
        currentUser: null,
        authStatus: AuthorizationStatus.NoAuth,
        authRequestStatus: RequestStatus.Idle,
      };

      const result = userReducer(
        undefined,
        userActions.checkAuth.rejected
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('Login', () => {
    it('should set "authRequestStatus" to "Loading" with "login.pending"', () => {
      const expectedState = {
        currentUser: null,
        authStatus: AuthorizationStatus.Unknown,
        authRequestStatus: RequestStatus.Loading,
      };

      const result = userReducer(
        undefined,
        userActions.login.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "authStatus" to "Auth", currentUser to given User and authRequestStatus to "Success" with "login.fulfilled"', () => {
      const mockCurrentUser = getMockCurrentUser();
      const expectedState = {
        currentUser: mockCurrentUser,
        authStatus: AuthorizationStatus.Auth,
        authRequestStatus: RequestStatus.Success,
      };

      const result = userReducer(
        undefined,
        userActions.login.fulfilled(mockCurrentUser, '', {
          login: 'username',
          password: '1q2w3e',
        })
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "authStatus" to "NoAuth", currentUser to null and authRequestStatus to "Failed" with "login.rejected"', () => {
      const expectedState = {
        currentUser: null,
        authStatus: AuthorizationStatus.NoAuth,
        authRequestStatus: RequestStatus.Failed,
      };

      const result = userReducer(
        undefined,
        userActions.login.rejected);

      expect(result).toEqual(expectedState);
    });
  });

  describe('Logout', () => {
    it('should set "authStatus" to "NoAuth", currentUser to null with "logout.fulfilled"', () => {
      const expectedState = {
        currentUser: null,
        authStatus: AuthorizationStatus.NoAuth,
        authRequestStatus: RequestStatus.Idle,
      };

      const result = userReducer(
        undefined,
        userActions.logout.fulfilled);

      expect(result).toEqual(expectedState);
    });
  });
});
