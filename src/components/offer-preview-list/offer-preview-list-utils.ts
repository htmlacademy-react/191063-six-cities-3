import { OfferPreviewListType } from './offer-preview-list-type';

function getOfferPreviewListClasses(listType: OfferPreviewListType) {
  switch (listType) {
    case 'Cities':
      return {
        divClass: 'cities__places-list places__list tabs__content',
      };
    case 'NearPlaces':
      return {
        divClass: 'near-places__list places__list',
      };
    default:
      return {
        divClass: 'places__list',
      };
  }
}

export { getOfferPreviewListClasses };
