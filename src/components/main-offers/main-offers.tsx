import { useState } from 'react';
import { OfferPreview, OfferPreviews } from '../../types/offer-types';
import { pluralize } from '../../utils/common-utils';
import { City } from '../../types/app-types';
import OfferPreviewList from '../../components/offer-preview-list';
import Sort from '../../components/sort';
import Map from '../../components/map';

type MainOffersProps = {
  currentCity: City;
  offerPreviews: OfferPreviews;
};

function MainOffers(props: MainOffersProps): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<OfferPreview | null>(null);
  const { currentCity, offerPreviews } = props;
  const countOfferPreviews = offerPreviews.length;

  return (
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
            cardType={'Cities'}
            offerPreviews={offerPreviews}
            onOfferCardHover={setHoveredOffer}
          />
        </section>
        <div className="cities__right-section">
          <Map
            pageType={'Main'}
            city={currentCity}
            offerPreviews={offerPreviews}
            hoveredOffer={hoveredOffer}
          />
        </div>
      </div>
    </div>
  );
}

export default MainOffers;
