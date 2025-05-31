import { updateFavoriteOfferType } from '../../hooks/use-update-favorite-offer';
import { OfferPreviews } from '../../types/offer-types';
import OfferCardSmall from '../offer-card-small';

type FavoriteListItemProps = {
  cityName: string;
  offerPreviews: OfferPreviews;
  onFavoriteClick: updateFavoriteOfferType;
};

function FavoriteListItem(props: FavoriteListItemProps): JSX.Element {
  const { cityName, offerPreviews, onFavoriteClick } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offerPreviews.map((offerPreview) => (
          <OfferCardSmall
            key={offerPreview.id}
            offerPreview={offerPreview}
            onFavoriteClick={onFavoriteClick}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoriteListItem;
