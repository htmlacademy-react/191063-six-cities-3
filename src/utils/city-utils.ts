import { City } from '../types/app-types';
import { OfferPreviews } from '../types/offer-types';

export function getCityOffers(
  city: City,
  offerPreviews: OfferPreviews
): OfferPreviews {
  return offerPreviews.filter(
    (offerPreview) => offerPreview.city.name === city.name
  );
}
