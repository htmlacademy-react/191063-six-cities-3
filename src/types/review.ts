import { ReactEventHandler } from 'react';
import { User } from './user';

type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

type Reviews = Review[];

type NewReview = {
  comment: string;
  rating: number;
};

type ReviewChangeHandler = ReactEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;

export type { Review, Reviews, NewReview, ReviewChangeHandler };
