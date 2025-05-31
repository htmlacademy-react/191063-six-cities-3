import { updateFavoriteOfferType } from '../../hooks/use-update-favorite-offer';
import { OfferPreviews } from '../../types/offer-types';
import { getCitiesWithFavorites, getCityOffers } from '../../utils/city-utils';
import FavoriteListItem from './favorite-list-item';

type FavoriteListProps = {
  offerPreviews: OfferPreviews;
  onFavoriteClick: updateFavoriteOfferType;
};

function FavoriteList(props: FavoriteListProps): JSX.Element {
  const { offerPreviews, onFavoriteClick } = props;
  const citiesWithFavorites = getCitiesWithFavorites(offerPreviews);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {citiesWithFavorites
          ? citiesWithFavorites.map((city) => (
            <FavoriteListItem
              key={city.name}
              cityName={city.name}
              offerPreviews={getCityOffers(city, offerPreviews)}
              onFavoriteClick={onFavoriteClick}
            />
          ))
          : null}
      </ul>
    </section>
  );
}

export default FavoriteList;
