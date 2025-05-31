import { Helmet } from 'react-helmet-async';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import useAppSelector from '../../hooks/use-app-selector';
import Header from '../../components/header';
import FavoriteList from '../../components/favorite-list';
import Footer from '../../components/footer';
import FavoriteEmpty from '../../components/favorite-empty';

function FavoritesPage(): JSX.Element {
  const favoriteOfferPreviews = useAppSelector(
    offersSelectors.selectFavoriteOfferPreviews
  );
  const isFavoriteEmpty = favoriteOfferPreviews.length === 0;
  const pageAddClass = isFavoriteEmpty ? ' page--favorites-empty' : '';
  const mainAddClass = isFavoriteEmpty ? ' page__main--favorites-empty' : '';

  return (
    <div className={`page${pageAddClass}`} data-testid="favorite-page-test-id">
      <Helmet>
        <title>6 Cities. Favorites</title>
      </Helmet>
      <Header showUser/>
      <main className={`page__main page__main--favorites${mainAddClass}`}>
        <div className="page__favorites-container container">
          {isFavoriteEmpty ? (
            <FavoriteEmpty />
          ) : (
            <FavoriteList
              offerPreviews={favoriteOfferPreviews}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
