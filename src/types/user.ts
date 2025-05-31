type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type UserAuth = {
  email: string;
  token: string;
};

type CurrentUser = User & UserAuth;

export type { User, UserAuth, CurrentUser };
