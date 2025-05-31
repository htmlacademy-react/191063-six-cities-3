import { Location } from './location';
import { CityName } from '../const';

type City = {
  name: keyof typeof CityName;
  location: Location;
};

export type { City };
