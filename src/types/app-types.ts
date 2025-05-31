import { AppRoute, CITIES, DateFormat } from '../const/app-const';
import { Keys, Values } from './common-types';
import { Location } from './location-types';

export type AppRouteType = Values<typeof AppRoute>;

export type DateFormatType = Values<typeof DateFormat>;

export type Page = 'Main' | 'Offer';

export type City = {
  name: Keys<typeof CITIES>;
  location: Location;
};
