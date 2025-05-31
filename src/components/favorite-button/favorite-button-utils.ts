export type FavoriteButtonType = 'PlaceCard' | 'Offer';

export function getFavoriteButtonClasses(buttonType: FavoriteButtonType) {
  switch (buttonType) {
    case 'Offer':
      return {
        buttonClass: 'offer__bookmark-button button',
        svgClass: 'offer__bookmark-icon',
        activeClass: 'offer__bookmark-button--active',
      };
    default:
      return {
        buttonClass: 'place-card__bookmark-button button',
        svgClass: 'place-card__bookmark-icon',
        activeClass: 'place-card__bookmark-button--active',
      };
  }
}

export function getFavoriteButtonSize(buttonType: FavoriteButtonType) {
  switch (buttonType) {
    case 'Offer':
      return {
        width: '31',
        height: '33',
      };
    default:
      return {
        width: '18',
        height: '19',
      };
  }
}
