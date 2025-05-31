import { OfferPreviewListType } from '../offer-preview-list/offer-preview-list-type';

function getOfferCardMediumClasses(cardType: OfferPreviewListType) {
  switch (cardType) {
    case 'Cities':
      return {
        articleClass: 'cities__card place-card',
        imgWrapperClass: 'cities__image-wrapper place-card__image-wrapper',
      };
    case 'NearPlaces':
      return {
        articleClass: 'near-places__card place-card',
        imgWrapperClass: 'near-places__image-wrapper place-card__image-wrapper',
      };
    default:
      return {
        articleClass: 'place-card',
        imgWrapperClass: 'place-card__image-wrapper',
      };
  }
}

export { getOfferCardMediumClasses };
