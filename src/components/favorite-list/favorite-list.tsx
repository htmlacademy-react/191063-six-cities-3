import { CityName } from '../../types/app-types';
import { OfferPreviews } from '../../types/offer-types';
import FavoriteListItem from './favorite-list-item';

type OffersByCity = Record<CityName, OfferPreviews>;

type FavoriteListProps = {
  offerPreviews: OfferPreviews;
};

function FavoriteList(props: FavoriteListProps): JSX.Element {
  const { offerPreviews } = props;
  const offersByCity: OffersByCity = Object.groupBy(
    offerPreviews,
    (offerPreview) => offerPreview.city.name
  ) as OffersByCity;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(offersByCity).map(([cityName, offers]) => (
          <FavoriteListItem
            key={cityName}
            cityName={cityName}
            offerPreviews={offers}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoriteList;
