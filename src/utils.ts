import { OfferPreview } from './types/offer';
import { City } from './types/city';
import { CityName, CITIES, AppRoute, AuthorizationStatus } from './const';

function getCapitalizedString(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

function getRatingWidth(value: number): string {
  const widthPercent = (Number.parseInt(value.toFixed(), 10) * 100) / 5;
  return `${widthPercent}%`;
}

function getCitiesNames(): string[] {
  return Object.values(CityName);
}

function getCitiesWithFavorites(offerPreviews: OfferPreview[]): City[] | null {
  const citiesNamesWithFavorites = new Set(
    offerPreviews.map((offerPreview) => offerPreview.city.name)
  );

  const citiesWithFavorites = Object.values(CITIES).filter((city) =>
    citiesNamesWithFavorites.has(city.name)
  );

  return citiesWithFavorites;
}

function getCityOffers(
  city: City,
  offerPreviews: OfferPreview[]
): OfferPreview[] {
  return offerPreviews.filter(
    (offerPreview) => offerPreview.city.name === city.name
  );
}

function isUserLoggedIn(currentAuthStatus: AuthorizationStatus): boolean {
  return currentAuthStatus === AuthorizationStatus.Auth;
}

function isRequiredPage(pathname: string, appRoute: AppRoute): boolean {
  return (pathname as AppRoute) === appRoute;
}

function pluralize(noun: string, count: number): string {
  if (count === 0 || count === 1) {
    return noun;
  } else if (noun.endsWith('y') && !/[aeiou]y$/i.test(noun)) {
    return `${noun.slice(0, -1)}ies`;
  } else if (
    noun.endsWith('s') ||
    noun.endsWith('ss') ||
    noun.endsWith('sh') ||
    noun.endsWith('ch') ||
    noun.endsWith('x') ||
    noun.endsWith('z')
  ) {
    return `${noun}es`;
  } else {
    return `${noun}s`;
  }
}

export {
  getCapitalizedString,
  getRatingWidth,
  getCitiesNames,
  getCitiesWithFavorites,
  getCityOffers,
  isUserLoggedIn,
  isRequiredPage,
  pluralize,
};
