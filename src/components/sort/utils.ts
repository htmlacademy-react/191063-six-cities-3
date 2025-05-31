import { OfferPreview, OfferPreviews } from '../../types/offer-types';
import { SortOptionType } from './types';

function comparePriceUp(
  firstOfferPreview: OfferPreview,
  secondOfferPreview: OfferPreview
): number {
  return firstOfferPreview.price - secondOfferPreview.price;
}

function comparePriceDown(
  firstOfferPreview: OfferPreview,
  secondOfferPreview: OfferPreview
): number {
  return secondOfferPreview.price - firstOfferPreview.price;
}

function compareRatingDown(
  firstOfferPreview: OfferPreview,
  secondOfferPreview: OfferPreview
): number {
  return secondOfferPreview.rating - firstOfferPreview.rating;
}

function sortOfferPreviews(
  offerPreviews: OfferPreviews,
  sortOption: SortOptionType
): OfferPreviews {
  switch (sortOption) {
    case 'PriceUp':
      return offerPreviews.toSorted(comparePriceUp);
    case 'PriceDown':
      return offerPreviews.toSorted(comparePriceDown);
    case 'TopRated':
      return offerPreviews.toSorted(compareRatingDown);
    default:
      return offerPreviews;
  }
}

export { sortOfferPreviews };
