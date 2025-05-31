import { SortOptionType } from './types';

const SortOption = ['Popular', 'PriceUp', 'PriceDown', 'TopRated'] as const;

const SortOptionLabel: Record<SortOptionType, string> = {
  Popular: 'Popular',
  PriceUp: 'Price: low to high',
  PriceDown: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export { SortOption, SortOptionLabel };
