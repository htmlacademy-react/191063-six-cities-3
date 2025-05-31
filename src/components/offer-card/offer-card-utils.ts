export type OfferCardType = 'Cities' | 'Near' | 'Favorite';

export function getOfferCardClasses(cardType: OfferCardType) {
  switch (cardType) {
    case 'Near':
      return {
        articleClass: 'near-places__card place-card',
        imgWrapperClass: 'near-places__image-wrapper place-card__image-wrapper',
        divInfoClass: 'place-card__info',
      };
    case 'Favorite':
      return {
        articleClass: 'favorites__card place-card',
        imgWrapperClass: 'favorites__image-wrapper place-card__image-wrapper',
        divInfoClass: 'favorites__card-info place-card__info',
      };
    default:
      return {
        articleClass: 'cities__card place-card',
        imgWrapperClass: 'cities__image-wrapper place-card__image-wrapper',
        divInfoClass: 'place-card__info',
      };
  }
}

export function getCardImageSize(cardType: OfferCardType) {
  switch (cardType) {
    case 'Favorite':
      return {
        width: '150',
        height: '110',
      };
    default:
      return {
        width: '260',
        height: '200',
      };
  }
}
