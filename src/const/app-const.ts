import { City, CityName } from '../types/app-types';

export const MIN_PASSWORD_LENGTH = 2;

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Offer: '/offer/:offerId',
  Favorites: '/favorites',
} as const;

export const RatingOption = {
  Perfect: { value: 5, title: 'perfect' },
  Good: { value: 4, title: 'good' },
  NotBad: { value: 3, title: 'not bad' },
  Badly: { value: 2, title: 'badly' },
  Terribly: { value: 1, title: 'terribly' },
} as const;

export const DateFormat = {
  Review: 'MMMM YYYY',
} as const;

export const CITIES: Record<CityName, City> = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
} as const;
