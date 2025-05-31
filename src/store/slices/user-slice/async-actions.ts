import { AuthData, CurrentUser } from '../../../types/user-types';
import { APIRoute } from '../../../const/api-const';
import createAppAsyncThunk from '../../create-app-async-thunk';

export const checkAuth = createAppAsyncThunk<
  CurrentUser,
  undefined
>('user/checkAuth', async (_arg, { extra: api }) => {
  const response = await api.get<CurrentUser>(APIRoute.Login);
  return response.data;
});

export const login = createAppAsyncThunk<CurrentUser, AuthData>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const response = await api.post<CurrentUser>(APIRoute.Login, {
      email,
      password,
    });
    return response.data;
  }
);

export const logout = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
  }
);
