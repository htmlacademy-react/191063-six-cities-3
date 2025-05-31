import { SortOption } from '../const';

type SortType = typeof SortOption[keyof typeof SortOption];

export type { SortType };
