import { AppRoute, AuthorizationStatus } from '../const';

function isUserLoggedIn(
  currentAuthStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus]
): boolean {
  return currentAuthStatus === AuthorizationStatus.Auth;
}

function isRequiredPage(
  pathname: string,
  appRoute: (keyof typeof AppRoute)
): boolean {
  return pathname === appRoute;
}

export { isUserLoggedIn, isRequiredPage };
