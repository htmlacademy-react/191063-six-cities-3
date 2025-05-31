import { ReactNode } from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';
import { userSelectors } from '../../store/slices/user-slice/user-slice';
import { AppRoute } from '../../const/app-const';
import useAppSelector from '../../hooks/use-app-selector';

type PrivateRouteProps = {
  onlyNotAuth?: boolean;
  children: ReactNode;
};

type FromState = {
  from?: Location;
};

export default function PrivateRoute(props: PrivateRouteProps) {
  const { onlyNotAuth, children } = props;
  const location: Location<FromState> = useLocation() as Location<FromState>;
  const isLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn);

  if (isLoggedIn && onlyNotAuth) {
    const from = location.state?.from || { pathname: AppRoute.Root };
    return <Navigate to={from} />;
  }

  if (!isLoggedIn && !onlyNotAuth) {
    return <Navigate state={{ from: location }} to={AppRoute.Login} />;
  }

  return children;
}
