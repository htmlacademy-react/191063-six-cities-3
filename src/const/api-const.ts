export const RequestStatus = {
  Idle: 'Idle',
  Loading: 'Loading',
  Success: 'Success',
  Failed: 'Failed',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const APIRoute = {
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers',
  Reviews: '/comments',
  Favorite: '/favorite',
} as const;
