import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const/app-const';
import { getToken } from '../../services/token';
import { offersActions } from '../../store/slices/offers-slice/offers-slice';
import { userActions, userSelectors } from '../../store/slices/user-slice/user-slice';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page';
import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';
import PrivateRoute from '../private-route';

function App(): JSX.Element {
  const isLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn);
  const dispatch = useAppDispatch();

  const token = getToken();
  useEffect(() => {
    if (token) {
      dispatch(userActions.checkAuth())
        .unwrap()
        .then(() => {
          dispatch(offersActions.getFavoriteOffers());
        }).catch(() => {});
    }
  }, [dispatch, token, isLoggedIn]);

  useEffect(() => {
    dispatch(offersActions.getOffersPreviews());
  }, [dispatch, isLoggedIn]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute onlyNotAuth>
                <LoginPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
