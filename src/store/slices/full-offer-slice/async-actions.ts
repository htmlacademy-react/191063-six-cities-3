import { NewReview, Review, Reviews } from '../../../types/review-types';
import { OfferFull, OfferPreviews } from '../../../types/offer-types';
import { APIRoute } from '../../../const/api-const';
import createAppAsyncThunk from '../../create-app-async-thunk';

export const getOfferFull = createAppAsyncThunk<
  OfferFull,
  string
>('fullOffer/getOfferFull', async (offerId, { extra: api }) => {
  const response = await api.get<OfferFull>(`${APIRoute.Offers}/${offerId}`);
  return response.data;
});

export const getNearOfferPreviews = createAppAsyncThunk<
  OfferPreviews,
  string
>('fullOffer/getNearOfferPreviews', async (offerId, { extra: api }) => {
  const response = await api.get<OfferPreviews>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  return response.data;
});

export const getReviews = createAppAsyncThunk<Reviews, string>(
  'fullOffer/getReviews',
  async (offerId, { extra: api }) => {
    const response = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    return response.data;
  }
);

export const postReview = createAppAsyncThunk<
  Review,
  { offerId: string; review: NewReview }
>('fullOffer/postReview', async ({ offerId, review }, { extra: api }) => {
  const response = await api.post<Review>(
    `${APIRoute.Reviews}/${offerId}`,
    review
  );
  return response.data;
});
