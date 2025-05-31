import { OfferPreviews } from '../../types/offer';
import { getCitiesWithFavorites, getCityOffers } from '../../utils/city-utils';
import FavoriteListItem from './favorite-list-item';

type FavoriteListProps = {
  offerPreviews: OfferPreviews;
};

function FavoriteList(props: FavoriteListProps): JSX.Element {
  const { offerPreviews } = props;
  const citiesWithFavorites = getCitiesWithFavorites(offerPreviews);

  return (
    <ul className="favorites__list">
      {citiesWithFavorites ? citiesWithFavorites.map((city) => (
        <FavoriteListItem
          key={city.name}
          cityName={city.name}
          offerPreviews={getCityOffers(city, offerPreviews)}
        />
      )) : null}
    </ul>
  );
}

export default FavoriteList;
