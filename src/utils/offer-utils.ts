import { OfferPreview, OfferPreviews } from '../types/offer-types';

export function getOfferPreviewById(
  offerPreviews: OfferPreviews,
  offerId?: string
): OfferPreview {
  return offerPreviews.filter((offerPreview) => offerPreview.id === offerId)[0];
}

export function getRatingWidth(value: number): string {
  const widthPercent = (Number.parseInt(value.toFixed(), 10) * 100) / 5;
  return `${widthPercent}%`;
}
