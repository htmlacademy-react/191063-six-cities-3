import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import { selectAuthorizationStatus, selectIsUserLoggedIn, selectOfferPreviewsLoadingStatus } from '../../store/selectors';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page';
import LoadingPage from '../../pages/loading-page';
import PrivateRoute from '../private-route';
import useAppSelector from '../../hooks/use-app-selector';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const isOfferPreviewsLoading = useAppSelector(
    selectOfferPreviewsLoadingStatus
  );

  if (isOfferPreviewsLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route
            path={AppRoute.Login}
            element={
              isLoggedIn ? <Navigate to={AppRoute.Root} /> : <LoginPage />
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
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
