import { CITIES } from '../const';
import { City } from '../types/city';
import { OfferPreviews } from '../types/offer';

function getCitiesWithFavorites(offerPreviews: OfferPreviews): City[] | null {
  const citiesNamesWithFavorites = new Set(
    offerPreviews.map((offerPreview) => offerPreview.city.name)
  );

  const citiesWithFavorites = Object.values(CITIES).filter((city) =>
    citiesNamesWithFavorites.has(city.name)
  );

  return citiesWithFavorites;
}

function getCityOffers(
  city: City,
  offerPreviews: OfferPreviews
): OfferPreviews {
  return offerPreviews.filter(
    (offerPreview) => offerPreview.city.name === city.name
  );
}

export { getCitiesWithFavorites, getCityOffers };
