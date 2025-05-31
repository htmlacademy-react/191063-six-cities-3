import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

const setCity = createAction('city/setCity', (city: City) => ({
  payload: city,
}));

export { setCity };
