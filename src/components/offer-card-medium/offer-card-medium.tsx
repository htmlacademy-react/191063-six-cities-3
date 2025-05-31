import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/offer-types';
import { AppRoute } from '../../const/app-const';
import { getCapitalizedString } from '../../utils/common-utils';
import { getRatingWidth } from '../../utils/offer-utils';
import { OfferPreviewListType } from '../offer-preview-list/offer-preview-list-type';
import { getOfferCardMediumClasses } from './offer-card-medium-utils';
import { updateFavoriteOfferType } from '../../hooks/use-update-favorite-offer';
import FavoriteButton from '../favorite-button';

type OfferCardMediumProps = {
  cardType: OfferPreviewListType;
  offerPreview: OfferPreview;
  onHover?: (hoveredOffer: OfferPreview | null) => void;
  onFavoriteClick: updateFavoriteOfferType;
};

function OfferCardMedium(props: OfferCardMediumProps): JSX.Element {
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
  const onFavoriteClick = props.onFavoriteClick;

  const offerLink = AppRoute.Offer.replace(':offerId', id);
  const additionalClasses = getOfferCardMediumClasses(cardType);

  const handleMouseEnter = () => {
    onHover?.(props.offerPreview);
  };

  const handleMouseLeave = () => {
    onHover?.(null);
  };

  const handleFavoriteClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    onFavoriteClick(evt, id, isFavorite);
  };

  return (
    <article
      className={additionalClasses.articleClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={additionalClasses.imgWrapperClass}>
        <Link to={offerLink}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            buttonType='PlaceCard'
            isFavorite={isFavorite}
            onClick={handleFavoriteClick}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
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

export default OfferCardMedium;
