export type AuthData = {
  login: string;
  password: string;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type UserAuth = {
  email: string;
  token: string;
};

export type CurrentUser = User & UserAuth;
