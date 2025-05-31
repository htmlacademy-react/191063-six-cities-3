import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { OfferPreviews } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { User } from '../types/user';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { loadOfferPreviews, redirectToRoute, requireAuthorization, setOfferPreviewsLoadingStatus } from './action';
import { dropToken, saveToken } from '../services/token';

const loadOfferPreviewsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/loadOfferPreviews', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOfferPreviewsLoadingStatus(true));
  const { data } = await api.get<OfferPreviews>(APIRoute.Offers);
  dispatch(loadOfferPreviews(data));
  dispatch(setOfferPreviewsLoadingStatus(false));
});

const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<User>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoute.Root));
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export { loadOfferPreviewsAction, loginAction, logoutAction, checkAuthAction };
