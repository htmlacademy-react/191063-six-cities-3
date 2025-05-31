import { Link } from 'react-router-dom';
import { memo } from 'react';
import { getCapitalizedString } from '../../utils/common-utils';
import { getRatingStyles } from '../../utils/offer-utils';
import { OfferPreview } from '../../types/offer-types';
import { AppRoute } from '../../const/app-const';
import {
  getOfferCardClasses,
  getCardImageSize,
  OfferCardType,
} from './offer-card-utils';
import FavoriteButton from '../favorite-button';

export type OfferCardComponentProps = {
  cardType: OfferCardType;
  offerPreview: OfferPreview;
  onHover?: (hoveredOffer: OfferPreview | null) => void;
};

function OfferCardComponent(props: OfferCardComponentProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isPremium,
    isFavorite,
    previewImage,
    rating,
  } = props.offerPreview;
  const cardType = props.cardType;
  const onHover = props.onHover;

  const offerLink = AppRoute.Offer.replace(':offerId', id);
  const classes = getOfferCardClasses(cardType);
  const imageSize = getCardImageSize(cardType);
  const ratingStyles = getRatingStyles(rating);

  const handleMouseEnter = () => {
    onHover?.(props.offerPreview);
  };

  const handleMouseLeave = () => {
    onHover?.(null);
  };

  return (
    <article
      className={classes.articleClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={classes.imgWrapperClass}>
        <Link to={offerLink}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt={title}
          />
        </Link>
      </div>
      <div className={classes.divInfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            buttonType="PlaceCard"
            offerId={id}
            isFavorite={isFavorite}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyles}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{getCapitalizedString(type)}</p>
      </div>
    </article>
  );
}

const OfferCard = memo(OfferCardComponent);

export default OfferCard;
