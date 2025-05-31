import { Helmet } from 'react-helmet-async';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import { RequestStatus } from '../../const/api-const';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import useAppSelector from '../../hooks/use-app-selector';
import LoadingPage from '../loading-page';
import useMainOfferPreviews from '../../hooks/use-main-offer-previews';
import MainOffers from '../../components/main-offers';
import MainOffersEmpty from '../../components/main-offers-empty';
import useUpdateFavoriteOffer from '../../hooks/use-update-favorite-offer';

function MainPage(): JSX.Element {
  const offerPreviews = useMainOfferPreviews();
  const currentCity = useAppSelector(offersSelectors.selectCity);
  const offerPreviewsStatus = useAppSelector(
    offersSelectors.selectOfferPreviewsStatus
  );
  const updateFavoriteClick = useUpdateFavoriteOffer();
  const isOffersEmpty = offerPreviews.length === 0;
  const mainAddClass = isOffersEmpty ? ' page__main--index-empty' : '';

  if (offerPreviewsStatus === RequestStatus.Loading) {
    return <LoadingPage />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header showUser/>
      <main className={`page__main page__main--index${mainAddClass}`}>
        <Navigation />
        {isOffersEmpty ? (
          <MainOffersEmpty currentCity={currentCity} />
        ) : (
          <MainOffers
            currentCity={currentCity}
            offerPreviews={offerPreviews}
            onFavoriteClick={updateFavoriteClick}
          />
        )}
      </main>
    </div>
  );
}

export default MainPage;
