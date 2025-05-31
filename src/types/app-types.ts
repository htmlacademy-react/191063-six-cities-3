import { AppRoute, DateFormat } from '../const/app-const';
import { AppLocation } from './location-types';
import { Values } from './common-types';

export type AppRouteType = Values<typeof AppRoute>;

export type DateFormatType = Values<typeof DateFormat>;

export type Page = 'Main' | 'Offer';

export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type City = {
  name: CityName;
  location: AppLocation;
};
