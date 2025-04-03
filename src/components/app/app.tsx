import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  placeCardCount: number;
}

function App({placeCardCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainScreen placeCardCount={placeCardCount} />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites} element={<FavoritesScreen />} />
          <Route path={AppRoute.Offer} element={<OfferScreen />}/>
          <Route path='*' element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
