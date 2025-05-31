import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { selectFavoriteOfferPreviews } from '../../store/selectors';
import { getFavoriteOffers } from '../../store/api-actions';
import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';
import Header from '../../components/header';
import FavoriteList from '../../components/favorite-list';
import Footer from '../../components/footer';
import FavoriteEmpty from '../../components/favorite-empty';

function FavoritesPage(): JSX.Element {
  const favoriteOfferPreviews = useAppSelector(selectFavoriteOfferPreviews);
  const favoriteEmpty = favoriteOfferPreviews.length === 0;
  const pageAddClass = favoriteEmpty ? ' page--favorites-empty' : '';
  const mainAddClass = favoriteEmpty ? ' page__main--favorites-empty' : '';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoriteOffers());
  }, [dispatch]);

  return (
    <div className={`page${pageAddClass}`}>
      <Helmet>
        <title>6 Cities. Favorites</title>
      </Helmet>
      <Header />
      <main className={`page__main page__main--favorites${mainAddClass}`}>
        <div className="page__favorites-container container">
          {favoriteEmpty
            ? <FavoriteEmpty />
            : <FavoriteList offerPreviews={favoriteOfferPreviews} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
