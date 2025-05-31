import { ReactEventHandler } from 'react';
import { User } from './user-types';

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type Reviews = Review[];

export type NewReview = {
  comment: string;
  rating: number;
};

export type ReviewChangeHandler = ReactEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;
