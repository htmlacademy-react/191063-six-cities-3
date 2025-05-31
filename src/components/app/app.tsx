import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferPreview } from '../../types/offer';
import { getMockAuthStatus } from '../../mock/auth-status-mock';
import { isUserLoggedIn } from '../../utils/app-utils';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';

const isLoggedIn = isUserLoggedIn(getMockAuthStatus());

type AppProps = {
  offerPreviews: OfferPreview[];
};

function App(props: AppProps): JSX.Element {
  const { offerPreviews } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offerPreviews={offerPreviews} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              isLoggedIn ? <Navigate to={AppRoute.Root} /> : <LoginPage />
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offerPreviews={offerPreviews} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={
                  isLoggedIn
                    ? AuthorizationStatus.Auth
                    : AuthorizationStatus.NoAuth
                }
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
