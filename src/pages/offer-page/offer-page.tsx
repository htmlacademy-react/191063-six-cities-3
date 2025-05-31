import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MAX_NEAR_OFFERS_COUNT } from '../../const/offer-const';
import { getRatingStyles } from '../../utils/offer-utils';
import {
  fullOfferActions,
  fullOfferSelectors,
} from '../../store/slices/full-offer-slice/full-offer-slice';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import Header from '../../components/header';
import OfferGallery from '../../components/offer-gallery';
import OfferFeatures from '../../components/offer-features';
import OfferInside from '../../components/offer-inside';
import OfferHost from '../../components/offer-host';
import OfferReviews from '../../components/offer-reviews';
import OfferPreviewList from '../../components/offer-preview-list';
import Map from '../../components/map';
import NotFoundPage from '../not-found-page';
import LoadingPage from '../loading-page';
import ReviewForm from '../../components/review-form';
import FavoriteButton from '../../components/favorite-button';

function OfferPage(): JSX.Element {
  const offerFull = useAppSelector(fullOfferSelectors.selectOfferFull);
  const currentOfferPreview = useAppSelector(
    fullOfferSelectors.selectCurrentOfferPreview
  );
  const reviews = useAppSelector(fullOfferSelectors.selectReviews);
  const nearOfferPreviews = useAppSelector(
    fullOfferSelectors.selectNearOfferPreviews
  ).slice(0, MAX_NEAR_OFFERS_COUNT);
  const isLoading = useAppSelector(fullOfferSelectors.selectIsLoading);
  const isFailed = useAppSelector(fullOfferSelectors.selectIsFailed);
  const dispatch = useAppDispatch();
  const { offerId } = useParams();

  useEffect(() => {
    if (offerId) {
      dispatch(fullOfferActions.getOfferFull(offerId));
      dispatch(fullOfferActions.getReviews(offerId));
      dispatch(fullOfferActions.getNearOfferPreviews(offerId));
    }
  }, [dispatch, offerId]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!offerId || !offerFull || isFailed) {
    return <NotFoundPage />;
  }

  const mapOfferPreviews = [...nearOfferPreviews, currentOfferPreview];

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isPremium,
    isFavorite,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = offerFull;
  const ratingStyles = getRatingStyles(rating);


  return (
    <div className="page" data-testid="offer-page-test-id">
      <Helmet>
        <title>6 Cities. Offer</title>
      </Helmet>
      <Header showUser />
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
                <FavoriteButton
                  buttonType="Offer"
                  offerId={offerId}
                  isFavorite={isFavorite}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={ratingStyles} />
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
              <OfferReviews
                reviews={reviews}
                reviewForm={<ReviewForm offerId={offerId} />}
              />
            </div>
          </div>
          <Map
            pageType={'Offer'}
            city={currentOfferPreview.city}
            offerPreviews={mapOfferPreviews}
            hoveredOffer={currentOfferPreview}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferPreviewList
              listType={'Near'}
              cardType={'Near'}
              offerPreviews={nearOfferPreviews}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
