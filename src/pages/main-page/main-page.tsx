import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import Sort from '../../components/sort';
import MainMap from '../../components/main-map';
import OfferPreviewList from '../../components/offer-preview-list';

type MainPageProps = {
  offerPreviews: OfferPreview[];
};

function MainPage(props: MainPageProps): JSX.Element {
  const { offerPreviews } = props;
  const [hoveredOffer, setHoveredOffer] = useState<OfferPreview | null>(null);

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
                {offerPreviews.length} places to stay in Amsterdam
              </b>
              <Sort />
              <OfferPreviewList offerPreviews={offerPreviews} onOfferCardHover={setHoveredOffer}/>
            </section>
            <div className="cities__right-section">
              <MainMap hoveredOffer={hoveredOffer ? hoveredOffer : null}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
