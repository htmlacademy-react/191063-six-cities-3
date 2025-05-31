import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer';
import { getCityOffers } from '../../utils/city-utils';
import { pluralize } from '../../utils/common-utils';
import { sortOfferPreviews } from '../../components/sort/utils';
import { selectCity, selectOfferPreviews, selectOfferPreviewsStatus, selectSortOption } from '../../store/selectors';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import Sort from '../../components/sort';
import Map from '../../components/map';
import OfferPreviewList from '../../components/offer-preview-list';
import useAppSelector from '../../hooks/use-app-selector';
import LoadingPage from '../loading-page';

function MainPage(): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<OfferPreview | null>(null);
  const currentCity = useAppSelector(selectCity);
  const currentSortOption = useAppSelector(selectSortOption);
  const allOfferPreviews = useAppSelector(selectOfferPreviews);
  const offerPreviewsStatus = useAppSelector(
    selectOfferPreviewsStatus
  );

  if (offerPreviewsStatus === 'Loading') {
    return <LoadingPage />;
  }

  const cityOfferPreviews = getCityOffers(currentCity, allOfferPreviews);
  const sortedOfferPreviews = sortOfferPreviews(
    cityOfferPreviews,
    currentSortOption
  );

  const countOfferPreviews = sortedOfferPreviews.length;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <Navigation />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {`${countOfferPreviews} ${pluralize(
                  'place',
                  countOfferPreviews
                )} to stay in ${currentCity.name}`}
              </b>
              <Sort />
              <OfferPreviewList
                listType={'Cities'}
                offerPreviews={sortedOfferPreviews}
                onOfferCardHover={setHoveredOffer}
              />
            </section>
            <div className="cities__right-section">
              <Map
                pageType={'Main'}
                city={currentCity}
                offerPreviews={sortedOfferPreviews}
                hoveredOffer={hoveredOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
