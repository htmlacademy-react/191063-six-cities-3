import { Helmet } from 'react-helmet-async';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import { RequestStatus } from '../../const/api-const';
import MainOffersEmpty from '../../components/main-offers-empty';
import useAppSelector from '../../hooks/use-app-selector';
import LoadingPage from '../loading-page';
import MainOffers from '../../components/main-offers';
import Navigation from '../../components/navigation';
import Header from '../../components/header';

function MainPage(): JSX.Element {
  const offerPreviews = useAppSelector(offersSelectors.selectMainOffers);
  const currentCity = useAppSelector(offersSelectors.selectCity);
  const offerPreviewsStatus = useAppSelector(
    offersSelectors.selectOfferPreviewsStatus
  );
  const isOffersEmpty = offerPreviews.length === 0;
  const mainAddClass = isOffersEmpty ? ' page__main--index-empty' : '';

  if (offerPreviewsStatus === RequestStatus.Loading) {
    return <LoadingPage />;
  }

  return (
    <div className="page page--gray page--main" data-testid="main-page-test-id">
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
          />
        )}
      </main>
    </div>
  );
}

export default MainPage;
