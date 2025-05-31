import { AuthorizationStatus, RequestStatus } from '../../../const/api-const';
import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';
import {
  getMockCurrentUser,
} from '../../../utils/mock-utils';
import { userSelectors } from './user-slice';

describe('User selectors', () => {
  const mockCurrentUser = getMockCurrentUser();
  const state = {
    [NameSpace.User]: {
      currentUser: mockCurrentUser,
      authStatus: AuthorizationStatus.Auth,
      authRequestStatus: RequestStatus.Success,
    },
  };

  it('should return currentUser from state', () => {
    const { currentUser } = state[NameSpace.User];
    const result = userSelectors.selectCurrentUser(state as State);
    expect(result).toEqual(currentUser);
  });

  it('should return isUserLoggedIn from state', () => {
    const { authStatus } = state[NameSpace.User];
    const isLoggedIn = authStatus === AuthorizationStatus.Auth;
    const result = userSelectors.selectIsUserLoggedIn(state as State);
    expect(result).toEqual(isLoggedIn);
  });

  it('should return authRequestStatus from state', () => {
    const { authRequestStatus } = state[NameSpace.User];
    const result = userSelectors.selectAuthRequestStatus(state as State);
    expect(result).toEqual(authRequestStatus);
  });
});
