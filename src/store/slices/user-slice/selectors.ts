import { createSelector } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const/api-const';
import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';

const selectSelf = (state: State) => state[NameSpace.User];

export const selectIsUserLoggedIn = createSelector(
  selectSelf,
  (state) => state.authStatus === AuthorizationStatus.Auth
);

export const selectCurrentUser = createSelector(
  selectSelf,
  (state) => state.currentUser
);

export const selectAuthRequestStatus = createSelector(
  selectSelf,
  (state) => state.authRequestStatus
);
