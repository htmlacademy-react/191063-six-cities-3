import { Location } from './location';
import { CITIES } from '../const';
import { Keys } from './common';

type City = {
  name: Keys<typeof CITIES>;
  location: Location;
};

export type { City };
