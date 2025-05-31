import { AuthorizationStatus } from '../../../const/api-const';
import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';

export const selectIsUserLoggedIn = (state: State) => state[NameSpace.User].authStatus === AuthorizationStatus.Auth;
export const selectCurrentUser = (state: State) => state[NameSpace.User].currentUser;
