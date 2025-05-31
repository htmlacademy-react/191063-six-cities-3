import { OfferPreview, OfferPreviews } from '../types/offer';

function getOfferPreviewById(
  offerPreviews: OfferPreviews,
  offerId: string
): OfferPreview {
  return offerPreviews.filter((offerPreview) => offerPreview.id === offerId)[0];
}

function getRatingWidth(value: number): string {
  const widthPercent = (Number.parseInt(value.toFixed(), 10) * 100) / 5;
  return `${widthPercent}%`;
}

export { getOfferPreviewById, getRatingWidth };
