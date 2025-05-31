import { createReducer } from '@reduxjs/toolkit';
import { setCity } from './action';
import { CITIES } from '../const';
import { getMockOfferPreviews } from '../mock/offer-previews-mock';

const allOfferPreviews = getMockOfferPreviews();

const initialState = {
  city: CITIES.Paris,
  offerPreviews: allOfferPreviews,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
