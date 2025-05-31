import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Offer, OfferPreview } from '../../types/offer';
import { getRatingWidth } from '../../utils';
import { getMockReviews } from '../../mock/reviews-mock';
import Header from '../../components/header';
import OfferGallery from '../../components/offer-gallery';
import OfferFeatures from '../../components/offer-features';
import OfferInside from '../../components/offer-inside';
import OfferHost from '../../components/offer-host';
import OfferReviews from '../../components/offer-reviews';
import OfferMap from '../../components/offer-map';
import OfferNearPlacesList from '../../components/offer-near-places-list';

const mockReviews = getMockReviews();

type OfferPageProps = {
  offer: Offer;
  offerPreviews: OfferPreview[];
};

function OfferPage(props: OfferPageProps): JSX.Element {
  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = props.offer;
  const offerPreviews = props.offerPreviews;
  const [hoveredOffer, setHoveredOffer] = useState<OfferPreview | null>(null);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingWidth(rating) }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <OfferFeatures
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside goods={goods} />
              <OfferHost host={host} />
              <div className="offer__description">
                <p className="offer__text">{description}</p>
              </div>
              <OfferReviews reviews={mockReviews} />
            </div>
          </div>
          <OfferMap hoveredOffer={hoveredOffer} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferNearPlacesList
              offerPreviews={offerPreviews}
              onOfferCardHover={setHoveredOffer}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
