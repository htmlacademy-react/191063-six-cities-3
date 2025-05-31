import { Location } from './location';
import { CITIES } from '../const';

type City = {
  name: keyof typeof CITIES;
  location: Location;
};

export type { City };
