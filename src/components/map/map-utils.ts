import { Page } from '../../types/app-types';

export function getMapClasses(pageType: Page) {
  switch (pageType) {
    case 'Main':
      return {
        sectionClass: 'cities__map map',
      };
    case 'Offer':
      return {
        sectionClass: 'offer__map map',
      };
    default:
      return {
        sectionClass: 'map',
      };
  }
}
