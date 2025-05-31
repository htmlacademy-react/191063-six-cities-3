import { OfferPreview } from '../types/offer';
import { SortOption } from '../const';
import { SortType } from '../types/sort';

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
  offerPreviews: OfferPreview[],
  sortOption: SortType
): OfferPreview[] {
  switch (sortOption) {
    case SortOption.PriceUp:
      return offerPreviews.toSorted(comparePriceUp);
    case SortOption.PriceDown:
      return offerPreviews.toSorted(comparePriceDown);
    case SortOption.TopRated:
      return offerPreviews.toSorted(compareRatingDown);
    default:
      return offerPreviews;
  }
}

export { sortOfferPreviews };
