import { createSlice } from '@reduxjs/toolkit';
import { UserSlice } from '../../../types/store-types';
import { AuthorizationStatus, RequestStatus } from '../../../const/api-const';
import { checkAuth, login, logout } from './async-actions';
import { dropToken, saveToken } from '../../../services/token';
import { Namespace } from '../../../const/store-const';
import {
  selectCurrentUser,
  selectIsUserLoggedIn,
  selectAuthRequestStatus,
} from './selectors';

const initialState: UserSlice = {
  currentUser: null,
  authStatus: AuthorizationStatus.Unknown,
  authRequestStatus: RequestStatus.Idle,
};

const userSlice = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.currentUser = null;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.pending, (state) => {
        state.authRequestStatus = RequestStatus.Loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.currentUser = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
        state.authRequestStatus = RequestStatus.Success;
      })
      .addCase(login.rejected, (state) => {
        state.currentUser = null;
        state.authStatus = AuthorizationStatus.NoAuth;
        state.authRequestStatus = RequestStatus.Failed;
      })
      .addCase(logout.fulfilled, (state) => {
        dropToken();
        state.currentUser = null;
        state.authStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const userReducer = userSlice.reducer;

export const userActions = { checkAuth, login, logout };

export const userSelectors = {
  selectAuthRequestStatus,
  selectIsUserLoggedIn,
  selectCurrentUser,
};
