export type OfferPreviewListType = 'Cities' | 'Near';

export function getOfferPreviewListClasses(listType: OfferPreviewListType) {
  switch (listType) {
    case 'Near':
      return {
        divClass: 'near-places__list places__list',
      };
    default:
      return {
        divClass: 'cities__places-list places__list tabs__content',
      };
  }
}
