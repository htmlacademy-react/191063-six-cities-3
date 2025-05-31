import { CITIES, CityName } from '../const';
import { City } from '../types/city';
import { OfferPreview } from '../types/offer';

function getCitiesNames(): string[] {
  return Object.values(CityName);
}

function getCitiesWithFavorites(offerPreviews: OfferPreview[]): City[] | null {
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
  offerPreviews: OfferPreview[]
): OfferPreview[] {
  return offerPreviews.filter(
    (offerPreview) => offerPreview.city.name === city.name
  );
}

export { getCitiesNames, getCitiesWithFavorites, getCityOffers };
