import { OfferPreview } from '../types/offer';
import { NEAR_OFFERS_COUNT } from '../const';
import { getMockOfferPreviews } from './offer-previews-mock';

const mockOfferPreviews = getMockOfferPreviews();

function getMockNearOfferPreviews(
  currentOfferPreview: OfferPreview
): OfferPreview[] {
  return mockOfferPreviews
    .filter(
      (offerPreview) =>
        offerPreview.city.name === currentOfferPreview.city.name &&
        offerPreview.id !== currentOfferPreview.id
    )
    .slice(0, NEAR_OFFERS_COUNT);
}

export { getMockNearOfferPreviews };
