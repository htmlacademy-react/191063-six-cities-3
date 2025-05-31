import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, AuthorizationStatusType } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatusType;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
