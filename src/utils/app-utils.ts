import { AppRoute } from '../const';
import { Values } from '../types/common';

function isRequiredPage(
  pathname: string,
  appRoute: Values<typeof AppRoute>
): boolean {
  return pathname === appRoute;
}

export { isRequiredPage };
