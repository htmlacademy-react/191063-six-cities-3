import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/offer-types';
import { AppRoute } from '../../const/app-const';
import { getCapitalizedString } from '../../utils/common-utils';
import { getRatingWidth } from '../../utils/offer-utils';
import { updateFavoriteOfferType } from '../../hooks/use-update-favorite-offer';
import FavoriteButton from '../favorite-button';

type OfferCardProps = {
  offerPreview: OfferPreview;
  onFavoriteClick: updateFavoriteOfferType;
};

function OfferCardSmall(props: OfferCardProps): JSX.Element {
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
  const onFavoriteClick = props.onFavoriteClick;
  const offerLink = AppRoute.Offer.replace(':offerId', id);

  const handleFavoriteClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    onFavoriteClick(evt, id, isFavorite);
  };

  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerLink}>
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton
            buttonType='PlaceCard'
            isFavorite={isFavorite}
            onClick={handleFavoriteClick}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
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

export default OfferCardSmall;
