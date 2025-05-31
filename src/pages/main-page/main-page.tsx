import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer';
import { CITIES } from '../../const';
import { getCityOffers } from '../../utils/city-utils';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import Sort from '../../components/sort';
import Map from '../../components/map';
import OfferPreviewList from '../../components/offer-preview-list';

type MainPageProps = {
  offerPreviews: OfferPreview[];
};

function MainPage(props: MainPageProps): JSX.Element {
  const { offerPreviews } = props;
  const [hoveredOffer, setHoveredOffer] = useState<OfferPreview | null>(null);
  const currentCity = CITIES.Amsterdam;
  const currentCityOffers = getCityOffers(currentCity, offerPreviews);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <Navigation currentCity={currentCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentCityOffers.length} places to stay in {currentCity.name}
              </b>
              <Sort />
              <OfferPreviewList
                listType={'Cities'}
                offerPreviews={currentCityOffers}
                onOfferCardHover={setHoveredOffer}
              />
            </section>
            <div className="cities__right-section">
              <Map
                pageType={'Main'}
                city={currentCity}
                offerPreviews={currentCityOffers}
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
