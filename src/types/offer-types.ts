import { User } from './user-types';
import { AppLocation } from './location-types';
import { City } from './app-types';

export type FavoriteData = {
  offerId: string;
  status: number;
}

export type OfferBase = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: AppLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferPreview = OfferBase & {
  previewImage: string;
};

export type OfferPreviews = OfferPreview[];

export type OfferFull = OfferBase & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};
