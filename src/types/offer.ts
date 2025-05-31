import { User } from './user';
import { City } from './city';
import { Location } from './location';


type OfferBase = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type OfferPreview = OfferBase & {
  previewImage: string;
};

type OfferPreviews = OfferPreview[];

type OfferFull = OfferBase & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type { OfferPreview, OfferPreviews, OfferFull };
