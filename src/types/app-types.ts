import { AppRoute, CITIES, DateFormat } from '../const/app-const';
import { Keys, Values } from './common-types';
import { AppLocation } from './location-types';

export type AppRouteType = Values<typeof AppRoute>;

export type DateFormatType = Values<typeof DateFormat>;

export type Page = 'Main' | 'Offer';

export type CityName = Keys<typeof CITIES>;

export type City = {
  name: CityName;
  location: AppLocation;
};
