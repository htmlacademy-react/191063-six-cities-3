import { SortOptionType } from './sort-types';

export const SortOption = [
  'Popular',
  'PriceUp',
  'PriceDown',
  'TopRated',
] as const;

export const SortOptionLabel: Record<SortOptionType, string> = {
  Popular: 'Popular',
  PriceUp: 'Price: low to high',
  PriceDown: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;
