import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/offer';
import { AppRoute } from '../../const';
import { getCapitalizedString } from '../../utils/common-utils';
import { getRatingWidth } from '../../utils/offer-utils';
import { OfferPreviewListType } from '../offer-preview-list/offer-preview-list-type';
import { getOfferCardMediumClasses } from './offer-card-medium-utils';

type OfferCardMediumProps = {
  cardType: OfferPreviewListType;
  offerPreview: OfferPreview;
  onHover?: (hoveredOffer: OfferPreview | null) => void;
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

  const offerLink = AppRoute.Offer.replace(':offerId', id);
  const additionalClasses = getOfferCardMediumClasses(cardType);

  const handleMouseEnter = () => {
    onHover?.(props.offerPreview);
  };
  const handleMouseLeave = () => {
    onHover?.(null);
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
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
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
