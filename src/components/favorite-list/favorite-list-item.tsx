import { OfferPreview } from '../../types/offer';
import OfferCardSmall from '../offer-card-small';

type FavoriteListItemProps = {
  city: string;
  offerPreviews: OfferPreview[];
};

function FavoriteListItem(props: FavoriteListItemProps): JSX.Element {
  const { city, offerPreviews } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offerPreviews.map((offerPreview) => (
          <OfferCardSmall key={offerPreview.id} offerPreview={offerPreview} />
        ))}
      </div>
    </li>
  );
}

export default FavoriteListItem;
