import { OfferPreviews } from '../types/offer-types';
import { CITIES } from '../const/app-const';
import { City } from '../types/app-types';

export function getCitiesWithFavorites(offerPreviews: OfferPreviews): City[] | null {
  const citiesNamesWithFavorites = new Set(
    offerPreviews.map((offerPreview) => offerPreview.city.name)
  );

  const citiesWithFavorites = Object.values(CITIES).filter((city) =>
    citiesNamesWithFavorites.has(city.name)
  );

  return citiesWithFavorites;
}

export function getCityOffers(
  city: City,
  offerPreviews: OfferPreviews
): OfferPreviews {
  return offerPreviews.filter(
    (offerPreview) => offerPreview.city.name === city.name
  );
}
