import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortOptionType } from '../components/sort/types';

const setCity = createAction<City>('city/setCity');
const setSortOption = createAction<SortOptionType>('city/setSortOption');

export { setCity, setSortOption };
